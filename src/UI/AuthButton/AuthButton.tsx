import { Type } from "@/components/Header/Header";

type AuthButtonProps = {
  text: string;
  type: Type;
};

export default async function AuthButton ({ text, type }: AuthButtonProps) {
  return (
    <button
      data-auth-type={type}
      className="px-6 py-2 justify-center items-center gap-2.5 inline-flex 
        text-gray-500 hover:text-black transition-colors
        text-[15px] font-bold font-['Source Sans 3'] leading-normal"
    >
      {text}
    </button>
  );
};