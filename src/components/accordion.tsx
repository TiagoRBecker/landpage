"use client"
import { useState } from "react";
import { landContent } from "./mocks";

export default function AccordionGroup() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full  flex flex-col gap-7">
      {landContent.section_5.faq.map((item, index) => (
        <div key={index} className="border-[1px] border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-4 py-3  flex justify-between items-center"
          >
            <span className="text-[#454545]">{item.title}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-white text-[#454545]">{item.descricao}</div>
          )}
        </div>
      ))}
    </div>
  );
}
