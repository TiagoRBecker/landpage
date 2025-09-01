import Image from "next/image";
import { landContent } from "@/components/mocks";
import Link from "next/link";
import AccordionGroup from "@/components/accordion";
import { Rethink_Sans } from "next/font/google";
import Contact from "@/components/contact";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // escolha as weights que precisar
  variable: "--font-rethink-sans",
  display: "swap",
});
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col  ">
      <header
        className="w-full h- bg-cover bg-center pb-7 h-full  lg:-screen"
        style={{ backgroundImage: `url(${landContent.header.image})` }}
      >
        <div className="container mx-auto h-[100px]  flex items-center  ">
          <Image src={landContent.logo} alt="" width={250} height={101} />
        </div>
        <div className="container grid grid-cols-1   mt-36  mx-auto gap-6  lg:grid-cols-2">
          <div className="w-full flex  gap-6 flex-col items-center justify-center lg:items-start">
            <h1 className="text-white font-semibold text-6xl max-w-[500px]">
              {landContent.header.title}
            </h1>
            <p className="w-[326px] h-[30px] text-white bg-white/35 backdrop-blur-none  flex items-center justify-center rounded-md ">
              Consulte seus direitos e busque justiça
            </p>
            <p
              className={`text-white text-xl max-w-[500px] ${rethinkSans.className}`}
            >
              {landContent.header.content}
            </p>
          </div>
          <div className="w-full h-full lg:w-[670px] lg:h-[557px] mx-auto ">
           <Contact/>
          </div>
        </div>
      </header>
      <section className="w-full h-full  ">
        <div className="container mx-auto flex items-center flex-col gap-10">
          <div className="w-full h-full  flex flex-col mt-36 items-center lg:flex-row lg:justify-between ">
            <h2 className="w-full text-5xl lg:max-w-[520px]">
              {landContent.section_1.title}
            </h2>
            <button className="w-[295px] py-4 bg-bgBtn text-white rounded-md  ">
              {landContent.btnsText.contact}
            </button>
          </div>
          <p className={`text-xl text-[#1B1B1B] ${rethinkSans.className}`}>
            {landContent.section_1.content}
          </p>
          <div className="w-full h-[510px] flex items-center justify-center rounded-md relative ">
            <video
              src={landContent.section_1.movie}
              loop
              muted
              autoPlay
              className="w-full h-[540px] object-cover top-20 rounded-4xl absolute"
            ></video>
          </div>
        </div>
        <div className="w-full h-full pb-10  bg-bgSection -mt-36 py-10">
          <div className="container mx-auto flex items-center flex-col gap-10 mt-36">
            <div className="w-full flex items-center justify-items-start">
              <h1 className="text-white text-5xl text-left pt-35 pb-10  w-[590px]  ">
                {landContent.section_2.title}
              </h1>
            </div>
            <div className="w-full gap-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
              {landContent.section_2.grid.map((grid, index) => (
                <div
                  className="w-full h-full flex flex-col gap-6 bg-[#002444] p-8 text-white rounded-3xl"
                  key={index}
                >
                  <Image
                    src={grid.icon}
                    alt={grid.title}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                  <h2 className="text-[20px] max-w-[270px] h-[45px]">
                    {grid.title}
                  </h2>
                  <p className={`text-sm  ${rethinkSans.className}`}>
                    {grid.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col mt-10 gap-6 items-center justify-center lg:flex-row lg:justify-between ">
              <h1
                className={` text-lg w-full  text-white ${rethinkSans.className}`}
              >
                {landContent.section_2.content}
              </h1>
              <button className="w-[295px] py-4 bg-bgBtn text-white rounded-md  ">
                {landContent.btnsText.contact}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full  h-full  bg-cover bg-center flex flex-col items-center justify-center lg:h-[830px]"
        style={{ backgroundImage: `url(${landContent.section_3.image})` }}
      >
        <div className="container flex flex-col gap-10">
          <h2 className="text-white text-6xl -w-full  lg:max-w-[1000px]">
            {landContent.section_3.title}
          </h2>
          <button className="w-[450px] py-4 bg-bgBtn text-white ">
            {landContent.btnsText.specialist}
          </button>
        </div>
      </section>
      <section className="w-full h-full  flex flex-col items-center justify-center p-10    ">
        <div className="w-full  h-full py-10 mx-auto  flex flex-col items-center justify-center gap-20 bg-bgBtn lg:h-[800px]">
          <h2 className="text-white text-5xl">{landContent.section_4.title}</h2>
          <div className="w-full  px-10 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
            {landContent.section_4.news.map((news, index) => (
              <div
                className="w-full bg-white  h-[492px] flex flex-col items-center justify-center gap-7  p-8 text-white rounded-3xl"
                key={index}
              >
                <Link href={news.link} target="_blank">
                  <div className="w-full h-[280px] ">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-[20px] text-[#161616] text-left w-full  line-clamp-1">
                    {news.title}
                  </h2>
                  <p className="text-sm text-[#5F6567]">{news.content}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full  flex flex-col py-10">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="w-full flex items-center justify-center gap-4">
            <h2 className="text-3xl text-center text-[#001D36] lg:text-8xl ">
              {landContent.section_5.title}
            </h2>
            <h2 className="text-2xl text-center text-[#001D36] lg:text-5xl   ">
              {landContent.section_5.subTitle}
            </h2>
          </div>

          <AccordionGroup />
        </div>
      </section>
      <section className="w-full h-full    py-20 mb-36">
        <div className="bg-bgSection w-[95%] h-[572px] mx-auto rounded-3xl ">
    <div className="w-full  grid grid-cols-1 lg:grid-cols-2 lg:container lg:mx-auto ">
          <div className="w-full -mt-12">
            <Image
              src={landContent.section_6.image}
              alt="Alex"
              width={720}
              height={720}
            />
          </div>
          <div className="w-[518px] flex flex-col justify-center gap-6 ">
            <h2 className="w-[151px] h-[30px] text-white bg-white/35 backdrop-blur-none  flex items-center justify-center rounded-md">
              {landContent.section_6.subTitle}
            </h2>
            <h2 className="text-5xl text-white">
              {landContent.section_6.title}
            </h2>

            <p className={`  text-white ${rethinkSans.className}`}>
              {landContent.section_6.content}
            </p>
            <Link href={"https://guedes-news.vercel.app/"} target="_blank">
              <button className="w-[295px] py-4 bg-bgBtn text-white rounded-md cursor-pointer  ">
                {landContent.btnsText.redirect}
              </button>
            </Link>
          </div>
        </div>
        </div>
    
      </section>
      <footer className="w-full h-[409px] bg-[#D9D9D9] flex flex-col items-center justify-center">
        <div className="container mx-auto grid grid-cols-4 gap-10">
          <div className="col-span-2">
            <Image
              src={landContent.footer.logo}
              alt=""
              width={600}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-4 text-[#072E4E]">
            <h2 className="text-[#707070] uppercase">Contato</h2>
            <p>{landContent.footer.address}</p>
            <p>{landContent.footer.city}</p>
          </div>
          <div className="flex flex-col gap-4 text-[#072E4E]">
            <h2 className="text-[#707070] uppercase">Siga nossas redes</h2>
            <div className="w-full flex items-center gap-2">
              {landContent.footer.socialIcons.map((icons, index) => (
                <div className="w-[50px] " key={index}>
                  <Image src={icons} alt="" width={25} height={25} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="container mx-auto h-[1px] bg-[#2E3034] border-0 mt-10" />
        <div className="container mx-auto flex items-center justify-between mt-10">
          <p> Todos os Direitos Reservados &copy; 2025</p>
          <p>Guedes Bampi Advogados</p>
        </div>
      </footer>
    </main>
  );
}
