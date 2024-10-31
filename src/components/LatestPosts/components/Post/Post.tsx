import Image, { StaticImageData } from "next/image";

export type PostProps = {
  title: string;
  text: string;
  image: string | StaticImageData;
  isImageLeft?: boolean;
};
export default async function Post({ title, text, image, isImageLeft = false }: PostProps) {
  return (
    <div className="justify-start items-start gap-12 inline-flex">
      {isImageLeft && (
        <Image
          src={image}
          alt=""
        />
      )}
      <div className="w-[462px] flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch text-black text-[32px] font-bold font-['Poppins'] leading-[38.40px]">{title}</div>
        <div className="self-stretch text-black text-[22px] font-normal leading-[30.80px]">{text}</div>
      </div>
      {!isImageLeft && (
        <Image
          src={image}
          alt=""
        />
      )}
    </div>
  );
} 
