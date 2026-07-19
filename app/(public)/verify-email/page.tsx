"use client";

import { ArrowLeft, CheckCircleIcon, LoaderCircle, MailOpen } from "lucide-react";
import React, { useState, useEffect, useRef, FormEvent, KeyboardEvent, ChangeEvent } from "react";



export default function VerifyEmailPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(59);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/^[0-9]*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setTimeout(() => {
        alert("Email verified successfully!");
        setOtp(["", "", "", "", "", ""]);
        setIsVerified(false);
        inputRefs.current[0]?.focus();
      }, 1000);
    }, 1500);
  };

  const handleResend = () => {
    if (timeLeft === 0) {
      setTimeLeft(59);
    }
  };

  return (
    <div className=" flex flex-col">
      {/* Main Content */}
      <main className="grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-120">
          {/* Card */}
          <div className="rounded-xl border border-outline-variant p-8 md:p-10 transition-all duration-300"
            style={{ boxShadow: 'var(--shadow-level-2)' }}>
            <div className="flex flex-col items-center text-center">
              {/* Icon/Visual */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-inverse-on-surface">
                <MailOpen className="text-(--text-headline-lg-size)" />
              </div>
              <h1 className="font-sans text-headline-lg leading-10 mb-2">Verify your email</h1>
              <p className="text-body-md mb-8 max-w-[320px]">
                We&apos;ve sent a 6-digit verification code to your email. Please enter it below.
              </p>

              {/* OTP Input Container */}
              <form className="w-full space-y-8" onSubmit={handleSubmit}>
                <div className="flex justify-between gap-2 md:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      required
                      className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl  bg-surface-variant text-body-lg  font-bold border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006b2c] focus:border-transparent transition-all duration-200"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isVerifying || isVerified}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-sans text-sm leading-5 tracking-[0.01em] font-medium text-white uppercase transition-all duration-200 ${isVerified
                    ? 'bg-[#006b2c]'
                    : 'bg-linear-to-br from-[#00873a] to-[#006b2c] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:opacity-95 hover:-translate-y-px active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0 disabled:active:scale-100'
                    }`}
                >
                  {isVerifying ? (
                    <>
                      <LoaderCircle className="animate-spin w-5 h-5" /> Verifying...
                    </>
                  ) : isVerified ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5" /> Verified
                    </>
                  ) : (
                    "Verify Email"
                  )}
                </button>
              </form>

              {/* Resend Section */}
              <div className="mt-8">
                <p className="font-sans text-sm leading-5 font-normal text-[#3e4a3d]">
                  Didn&apos;t receive the code?
                  <button
                    onClick={handleResend}
                    disabled={timeLeft > 0}
                    type="button"
                    className={`font-sans text-xs leading-4 font-semibold text-[#006b2c] ml-1 transition-all duration-200 ${timeLeft > 0 ? "opacity-50 cursor-not-allowed" : "hover:underline cursor-pointer"
                      }`}
                  >
                    Resend Code {timeLeft > 0 && <span className="font-normal">(0:{timeLeft.toString().padStart(2, "0")})</span>}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <a className="flex items-center justify-center gap-2 font-sans text-sm leading-5 tracking-[0.01em] font-medium text-on-surface hover:text-primary transition-colors" href="#">
              <ArrowLeft className="w-5 h-5" />
              Back to Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
