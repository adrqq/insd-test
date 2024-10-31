import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

export type LinkToProps = {
  text: string;
  to: string;
  isWhite?: boolean;
  logoSrc?: string | StaticImageData;
};
export default async function LinkTo({
  text,
  to,
  isWhite,
  logoSrc,
}: LinkToProps) {
  return (
    <Link href={to} className="p-2 justify-center items-center gap-2.5 flex">
      {logoSrc ? (
        <Image src={logoSrc} alt="" />
      ) : (
        <div
          className={`text-black ${isWhite && 'text-white'} text-sm font-semibold leading-[21px]`}
        >
          {text}
        </div>
      )}
    </Link>
  );
}
