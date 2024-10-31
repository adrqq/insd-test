"use server"

import Value from "./components/Value";

export type OurValuesProps = {
  // props go here
};

export default async function OurValues(props: OurValuesProps) {

  return (
    <div className="mb-[111px]">
      <div className="text-[#1d1d1d] text-[50px] font-bold font-['Poppins'] leading-[60px] mb-[16px]">Our Values</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-[39px]]">
        <Value
          title={"Courageous"}
          text={"We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow."}
          image={""}
        />
        <Value
          title={"Empowerment"}
          text={"We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective."}
          image={""}
        />
        <Value
          title={"Cheerfulness"}
          text={"We inject energy, positivity and fun into every task - this is our approach. We strive to actively engage and inspire our colleagues, clients and communities - this is the foundation of our work."}
          image={""}
        />
                <Value
          title={"Courageous"}
          text={"We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow."}
          image={""}
        />
        <Value
          title={"Empowerment"}
          text={"We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective."}
          image={""}
        />
        <Value
          title={"Cheerfulness"}
          text={"We inject energy, positivity and fun into every task - this is our approach. We strive to actively engage and inspire our colleagues, clients and communities - this is the foundation of our work."}
          image={""}
        />
      </div>
    </div>
  );
}
