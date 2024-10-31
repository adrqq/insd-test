"use client";

import crossCircle from "@/assets/svg/x-circle.svg";
import AuthInput from "@/UI/AuthInput";
import Image from "next/image";
import Link from "next/link";

export type SignUpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50">
      <div className="w-[670px] gap-[24px] p-6 bg-white rounded-3xl flex-col justify-start inline-flex relative">
        <div className="flex justify-center items-center w-full relative">
          <div className="sign-in text-black font-bold text-[48px] font-['Poppins']">Sign Up</div>
          <Image
            src={crossCircle}
            alt="close-modal"
            className="absolute right-0 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <AuthInput headText="Full Name" placeholderText="Name Surname" />
        <AuthInput headText="Your Email" placeholderText="Mail" />
        <AuthInput headText="Password" placeholderText="Password" />
        <AuthInput headText="Your Phone" placeholderText="Phone" />

        <div className="flex gap-[14px] mt-[-8px]">
          <input
            className="w-[18px] h-[18px] cursor-pointer"
            type="checkbox"
          />
          <div className="w-full h-5 text-black text-sm font-light font-['Poppins'] leading-normal">Yes, I have read and agree to Privacy Policy</div>
        </div>

        <button className="w-[120px] h-12 px-6 py-3 bg-black rounded-3xl justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-[15px] font-bold font-['Source Sans 3'] leading-normal">Sign In</div>
        </button>

        <div className="w-[623px] h-4 pr-[47px] justify-center items-center gap-6 inline-flex">
          <div className="text-[#303030] text-sm font-medium font-['Poppins'] leading-none">Already have an account?</div>
          <Link
            className="text-[#008fe0] text-sm font-medium font-['Poppins'] underline leading-none"
            href="/"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}