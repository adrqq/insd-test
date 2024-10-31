import Image from 'next/image';
import mainLogo from '@/assets/svg/main-logo.svg';
import LinkTo from '@/UI/LinkTo';
import AuthButton from '@/UI/AuthButton';
import AuthClientWrapper from '../AuthClientWrapper';

export enum Type {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export default async function Header() {
  return (
    <header className="w-full h-[100px] flex items-center justify-between mb-[32px]">
      <div className="">
        <Image src={mainLogo} alt="company-logo" />
      </div>

      <div className="h-[37px] justify-between items-start inline-flex">
        <LinkTo text="Home" to="./" />
        <LinkTo text="Success Stories" to="./success-stories" />
        <LinkTo text="Services" to="./services" />
        <LinkTo text="Blog" to="./blog" />
        <LinkTo text="About us" to="./about-us" />
        <LinkTo text="Career" to="./career" />
      </div>

      <div className="h-[37px] justify-start items-center inline-flex">
        <AuthClientWrapper>
          <div className="h-[37px] justify-start items-center inline-flex">
            <AuthButton text="Sign Up" type={Type.SignUp} />
            <div className="border-[1px] border-black h-[37px]" />
            <AuthButton text="Sign In" type={Type.SignIn} />
          </div>
        </AuthClientWrapper>
      </div>
    </header>
  );
}
