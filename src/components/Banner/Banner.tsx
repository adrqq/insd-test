import bannerHome from '@/assets/images/banner-home.png';
import Image from 'next/image';

export default async function Banner() {
  return (
    <div className="p-8 bg-white/40 rounded-3xl justify-start items-start gap-[76px] inline-flex mb-[120px]">
      <div className="w-[548px] flex-col justify-start items-start gap-[27px] inline-flex">
        <div className="text-[#616161] text-base font-medium font-['poppins'] leading-tight">
          Xceed Blog
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch text-[#1d1d1d] text-[50px] font-bold font-['poppins'] leading-[60px]">
            10 Web Design Mistakes and How to Avoid Them
          </div>
          <div className="self-stretch text-black text-[22px] font-normal leading-[30.80px]">
            Looking for more daily inspiration? Download Muzli extension — your
            go-to source for discovering design ideas from world’s top creators!
          </div>
          <div className="text-right">
            <span className="text-[#6f6f70] text-base font-normal font-['poppins'] leading-tight">
              13.06, 2024 · 2:15 PM ·{' '}
            </span>
            <span className="text-[#6f6f70] text-base font-normal font-['Poppins'] underline leading-tight">
              medium.muz.li
            </span>
          </div>
        </div>
      </div>
      <Image
        src={bannerHome}
        alt="banner-robot-hand"
        className="grow shrink basis-0 self-stretch"
      />
    </div>
  );
}
