"use client";

export type AuthInputProps = {
  headText: string;
  placeholderText: string;
  type?: "text" | "email" | "password" | "tel";
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function AuthInput({
  headText,
  placeholderText,
  type = "text",
  value,
  onChange,
  error
}: AuthInputProps) {
  return (
    <div className="w-full">
      <div className="h-5 text-[#1d1d1d] text-sm font-medium font-['Poppins'] leading-tight mb-[3px]">
        {headText}
      </div>
      <input
        className={`w-full h-[29px] text-[#1d1d1d] text-sm font-light font-['Poppins'] pb-[9px] outline-none border-b-2 ${
          error ? 'border-red-500' : 'border-black'
        }`}
        placeholder={placeholderText}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <div className="text-red-500 text-xs mt-1">
          {error}
        </div>
      )}
    </div>
  );
}