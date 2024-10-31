/* eslint-disable @typescript-eslint/no-unused-vars */
import { StaticImageData } from 'next/image';
// import Image from "next/image";
// import Link from "next/link";

export type ValueProps = {
  title: string;
  text: string;
  image: string | StaticImageData;
};

export default async function Vaue({ title, text, image }: ValueProps) {
  return (
    <div className="grow shrink basis-0 self-stretch p-6 bg-white rounded-3xl border border-[#f367a3] flex-col justify-start items-start gap-6 inline-flex">
      <div className="text-black/20 text-[32px] font-bold font-['Poppins'] leading-[38.40px]">
        {title}
      </div>
      <img
        className="h-[200px] relative"
        src="https://via.placeholder.com/368x200"
      />
      <div className="self-stretch grow shrink basis-0 text-black text-sm font-semibold font-['Source Sans 3'] leading-[21px]">
        {text}
      </div>
      <div className="px-6 py-4 bg-black rounded-2xl justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
          View more
        </div>
      </div>
    </div>
  );
}
