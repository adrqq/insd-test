import Image from "next/image";
import LinkTo from "@/UI/LinkTo";
import footerLogo from "@/assets/svg/footer-logo.svg";

import dribbble from "@/assets/svg/dribbble.svg";
import linkedin from "@/assets/svg/linkedin.svg";
import behance from "@/assets/svg/behance.svg";
import instagram from "@/assets/svg/instagram.svg";
import facebook from "@/assets/svg/facebook.svg";
import telegram from "@/assets/svg/telegram.svg";


export type FooterProps = {
  // props go here
};

export default async function Footer(props: FooterProps) {
  return (
    <div className="h-[262px] relative bg-black flex justify-center mx-[-80px]">
      <div className="w-[524] h-full flex items-center flex-col gap-[32px]">
        <div className="py-[8px]">
          <Image
            src={footerLogo}
            alt="footer-logo"
          />
        </div>
        <div className="h-[37px] justify-start items-center gap-4 inline-flex">
          <LinkTo text="Home" to="./" isWhite />
          <LinkTo text="Success Stories" to="./success-stories" isWhite />
          <LinkTo text="Services" to="./services" isWhite />
          <LinkTo text="Blog" to="./blog" isWhite />
          <LinkTo text="About us" to="./about-us" isWhite />
          <LinkTo text="Career" to="./career" isWhite />
        </div>

        <div className="justify-start items-center gap-4 inline-flex">
          <LinkTo text="Home" to="https://dribbble.com/" logoSrc={dribbble} />
          <LinkTo text="Success Stories" to="https://www.linkedin.com/in/adrian-faryniuk/" logoSrc={linkedin} />
          <LinkTo text="Services" to="https://www.behance.net/" logoSrc={behance} />
          <LinkTo text="Blog" to="https://www.instagram.com/adrian_2cb/" logoSrc={instagram} />
          <LinkTo text="About us" to="https://www.facebook.com/" logoSrc={facebook} />
          <LinkTo text="Career" to="https://t.me/adrian_2cb" logoSrc={telegram} />
        </div>
      </div>
    </div>
  );
}
