'use client';

import { useEffect, useState } from 'react';
import crossCircle from '@/assets/svg/x-circle.svg';
import { Type } from '@/components/Header/Header';
import AuthInput from '@/UI/AuthInput';
import Image from 'next/image';
import { signIn, signUp } from '@/lib/api/auth';
import UserDataModel from '@/models/UserDataModel';
import UserCredentialsModel from '@/models/UserCredentialsModel';

type SignModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: Type | null;
  onTypeChange: (type: Type) => void;
};

interface FormState {
  name: string;
  email: string;
  password: string;
  phone: string;
  agreeToTerms: boolean;
}

export default function SignModal({
  isOpen,
  onClose,
  type,
  onTypeChange,
}: SignModalProps) {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false,
  });
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  useEffect(() => {
    if (type) {
      onTypeChange(type);
      // Reset form state and errors when type changes
      setFormState({
        name: '',
        email: '',
        password: '',
        phone: '',
        agreeToTerms: false,
      });
      setFieldErrors({});
      setGeneralError(null);
    }
  }, [type, onTypeChange]);

  if (!isOpen || !type) return null;

  const handleSwitchType = () => {
    onTypeChange(isSignUp ? Type.SignIn : Type.SignUp);
  };

  const isSignUp = type === Type.SignUp;
  const modalTitle = isSignUp ? 'Sign Up' : 'Sign In';
  const buttonText = isSignUp ? 'Sign Up' : 'Sign In';
  const switchText = isSignUp
    ? 'Already have an account?'
    : "Don't have an account?";
  const switchButtonText = isSignUp ? 'Log in' : 'Sign Up';

  const handleInputChange = (field: keyof FormState) => (value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    setGeneralError(null);
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    // Email validation
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formState.password) {
      errors.password = 'Password is required';
    } else if (formState.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp) {
      // Full name validation
      if (!formState.name) {
        errors.name = 'Full name is required';
      }

      // Phone validation
      if (!formState.phone) {
        errors.phone = 'Phone number is required';
      }
    }

    if (!formState.agreeToTerms) {
      errors.agreeToTerms = 'Please agree to the Privacy Policy';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setGeneralError(null);

    try {
      if (isSignUp) {
        const userData: UserDataModel = {
          name: formState.name,
          email: formState.email,
          password: formState.password,
          phone: formState.phone,
        };

        const register = await signUp(userData);

        console.log(register);
      } else {
        const credentials: UserCredentialsModel = {
          email: formState.email,
          password: formState.password,
        };

        await signIn(credentials);
      }

      onClose();
    } catch (err) {
      setGeneralError(
        err instanceof Error
          ? err.message
          : 'An error occurred during authentication'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50">
      <div className="w-[670px] gap-[24px] p-6 bg-white rounded-3xl flex-col justify-start inline-flex relative">
        <div className="flex justify-center items-center w-full relative">
          <div className="sign-in text-black font-bold text-[48px] font-['Poppins']">
            {modalTitle}
          </div>
          <Image
            src={crossCircle}
            alt="close-modal"
            className="absolute right-0 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {generalError && (
          <div className="text-red-500 text-sm text-center">{generalError}</div>
        )}

        {isSignUp && (
          <>
            <AuthInput
              headText="Full Name"
              placeholderText="Name Surname"
              value={formState.name}
              onChange={handleInputChange('name')}
              error={fieldErrors.name}
            />
            <AuthInput
              headText="Your Phone"
              placeholderText="Phone"
              type="tel"
              value={formState.phone}
              onChange={handleInputChange('phone')}
              error={fieldErrors.phone}
            />
          </>
        )}

        <AuthInput
          headText="Your Email"
          placeholderText="Mail"
          type="email"
          value={formState.email}
          onChange={handleInputChange('email')}
          error={fieldErrors.email}
        />
        <AuthInput
          headText="Password"
          placeholderText="Password"
          type="password"
          value={formState.password}
          onChange={handleInputChange('password')}
          error={fieldErrors.password}
        />

        <div className="flex gap-[14px] mt-[-8px]">
          <input
            className="w-[18px] h-[18px] cursor-pointer"
            type="checkbox"
            checked={formState.agreeToTerms}
            onChange={(e) => {
              setFormState((prev) => ({
                ...prev,
                agreeToTerms: e.target.checked,
              }));
              if (fieldErrors.agreeToTerms) {
                setFieldErrors((prev) => ({
                  ...prev,
                  agreeToTerms: undefined,
                }));
              }
            }}
          />
          <div className="w-full h-5 text-black text-sm font-light font-['Poppins'] leading-normal">
            Yes, I have read and agree to Privacy Policy
          </div>
        </div>
        {fieldErrors.agreeToTerms && (
          <div className="text-red-500 text-xs mt-1">
            {fieldErrors.agreeToTerms}
          </div>
        )}

        <button
          className={`w-[120px] h-12 px-6 py-3 bg-black rounded-3xl justify-center items-center gap-2.5 inline-flex
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          <div className="text-white text-[15px] font-bold font-['Source Sans 3'] leading-normal">
            {isLoading ? 'Loading...' : buttonText}
          </div>
        </button>

        <div className="w-[623px] h-4 pr-[47px] justify-center items-center gap-6 inline-flex">
          <div className="text-[#303030] text-sm font-medium font-['Poppins'] leading-none">
            {switchText}
          </div>
          <button
            className="text-[#008fe0] text-sm font-medium font-['Poppins'] underline leading-none"
            onClick={handleSwitchType}
          >
            {switchButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
