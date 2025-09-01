import Image from "next/image";
import { landContent } from "@/components/mocks";
import Link from "next/link";
import AccordionGroup from "@/components/accordion";
import { Rethink_Sans } from "next/font/google";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400","700"], // escolha as weights que precisar
  variable: "--font-rethink-sans",
  display: "swap",
});
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col ">
      <header
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${landContent.header.image})` }}
      >
        <div className="container mx-auto h-[100px]  flex items-center  ">
          <Image src={landContent.logo} alt="" width={250} height={101} />
        </div>
        <div className="container mt-36  mx-auto grid grid-cols-2">
          <div className="w-full flex flex-col gap-6 ">
            <h2 className="text-white font-semibold text-6xl max-w-[500px]">
              {landContent.header.title}
            </h2>
            <p className="w-[321px] h-[30px] text-white bg-white/35 backdrop-blur-none  flex items-center justify-center rounded-md ">
              Consulte seus direitos e busque justiça
            </p>
            <p className={`text-white text-xl max-w-[500px] ${rethinkSans.className}`}>
              {landContent.header.content}
            </p>
          </div>
          <div className="w-[670px] h-[557px] ">
            <form className="w-full h-full  flex flex-col gap-6 rounded-3xl items-center justify-center  bg-black/35 backdrop-blur-none p-10">
              <input
                type="text"
                className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5"
                placeholder="Nome"
              />
              <input
                type="text"
                className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5"
                placeholder="Email"
              />
              <input
                type="text"
                className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5"
                placeholder="Telefone"
              />
              <input
                type="text"
                className="outline-none bg-white text-black w-full rounded-md h-[50px] pl-5 "
                placeholder="O que está cursando?"
              />
              <button className="w-full py-4 bg-[#3782FF] text-white ">
                {landContent.btnsText.specialist}
              </button>
            </form>
          </div>
        </div>
      </header>
      <section className="w-full h-full mt-10">
        <div className="container mx-auto flex items-center flex-col gap-10">
          <div className="w-full flex items-center justify-between mt-36">
            <h1 className="text-5xl max-w-[520px]">
              {landContent.section_1.title}
            </h1>
            <button className="w-[295px] py-4 bg-[#3782FF] text-white rounded-md  ">
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
        <div className="w-full h-screen bg-[#001D36] mb-26">
          <div className="container mx-auto flex items-center flex-col gap-10 mt-36">
            <div className="w-full flex items-center justify-items-start">
              <h1 className="text-white text-5xl text-left  w-[505px]  ">
                {landContent.section_2.title}
              </h1>
            </div>
            <div className="w-full grid grid-cols-4 gap-4">
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
                  <p className={`text-sm  ${rethinkSans.className}`}>{grid.content}</p>
                </div>
              ))}
            </div>
            <div className="w-full flex items-start justify-between mt-10 gap-6">
              <h1 className={` text-lg w-full  text-white ${rethinkSans.className}`}>
                {landContent.section_2.content}
              </h1>
              <button className="w-[295px] py-4 bg-[#3782FF] text-white rounded-md  ">
                {landContent.btnsText.contact}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full h-[830px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${landContent.section_3.image})` }}
      >
        <div className="container flex flex-col gap-10">
          <h2 className="text-white text-6xl max-w-[1000px]">
            {landContent.section_3.title}
          </h2>
          <button className="w-[450px] py-4 bg-[#3782FF] text-white ">
            {landContent.btnsText.specialist}
          </button>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col items-center justify-center p-10 ">
        <div className="w-full  mx-auto h-[800px] flex flex-col items-center justify-center gap-20 bg-[#3782FF]">
          <h1 className="text-white text-5xl">{landContent.section_4.title}</h1>
          <div className="w-full  gap-6 grid grid-cols-5 px-10">
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
      <section className="w-full h-full flex flex-col mb-36">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="w-full flex items-center gap-4">
            <h2 className="text-8xl text-[#001D36]">
              {landContent.section_5.title}
            </h2>
            <h2 className="text-5xl   text-[#001D36]">
              {landContent.section_5.subTitle}
            </h2>
          </div>

          <AccordionGroup />
        </div>
      </section>
      <section className="w-[95%] bg-[#001D36] h-[572px] mx-auto rounded-3xl mb-36">
        <div className="container mx-auto grid grid-cols-2 ">
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
           
            <p className= {` text-[#F8F8F8] text-white ${rethinkSans.className}`}>{landContent.section_6.content}</p>
            <Link href={"https://guedes-news.vercel.app/"} target="_blank">
              <button className="w-[295px] py-4 bg-[#3782FF] text-white rounded-md cursor-pointer  ">
                {landContent.btnsText.redirect}
              </button>
            </Link>
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
       <div className="container mx-auto flex items-center justify-between">
        <p> Todos os Direitos Reservados &copy; 2025</p>
         <p>Guedes Bampi Advogados</p>
       </div>
      </footer>
    </main>
  );
}
