"use client";

import React, { useState, useEffect, useRef } from "react";

export default function SecurityVerification() {
  const [step, setStep] = useState<1 | 2>(1);
  const [timeLeft, setTimeLeft] = useState(120);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="bg-[#f4fcf0] text-[#171d16] font-sans min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#7ffc97]/20 rounded-full blur-[120px] animate-[pulse-subtle_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#dae2fd]/20 rounded-full blur-[120px] animate-[pulse-subtle_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full px-[24px] h-16 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <span className="text-[24px] leading-[32px] font-semibold text-[#006b2c] tracking-tight">
            GigFlow
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#3e4a3d] hover:text-[#006b2c] transition-colors duration-200">
            Help Center
          </button>
        </div>
      </header>

      <main className="w-full max-w-lg px-[16px] flex flex-col gap-[32px] relative z-10">
        {/* Step Indicator */}
        <div className="flex justify-between items-center px-2">
          <div
            className={`flex flex-col gap-1 items-start ${
              step === 1 ? "text-[#006b2c] font-bold" : "text-[#3e4a3d] font-medium"
            }`}
          >
            <span className="text-[10px] uppercase tracking-widest opacity-60">Step 01</span>
            <span className="text-[14px] leading-[20px] tracking-[0.01em]">
              Email Verification
            </span>
          </div>
          <div className="h-px bg-[#bdcaba] flex-grow mx-4 opacity-30"></div>
          <div
            className={`flex flex-col gap-1 items-end ${
              step === 2 ? "text-[#006b2c] font-bold" : "text-[#3e4a3d] font-medium"
            }`}
          >
            <span className="text-[10px] uppercase tracking-widest opacity-60">Step 02</span>
            <span className="text-[14px] leading-[20px] tracking-[0.01em]">Two-Factor Auth</span>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[500px]">
          {/* Email Verification Section */}
          <section
            className={`bg-white/80 backdrop-blur-[12px] border border-slate-200/80 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] rounded-xl p-[32px] flex flex-col gap-[32px] transition-all duration-500 transform absolute inset-0 ${
              step === 1
                ? "translate-x-0 opacity-100 relative"
                : "-translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] leading-[32px] font-semibold text-[#171d16]">
                Verify your email
              </h1>
              <p className="text-[14px] leading-[20px] font-normal text-[#3e4a3d]">
                We've sent a 6-digit verification code to{" "}
                <span className="font-semibold text-[#171d16]">alex.rivera@gigflow.com</span>.
                Please enter it below.
              </p>
            </div>

            {/* 6-Digit OTP Inputs */}
            <div className="flex justify-between gap-2 md:gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  autoFocus={index === 0}
                  className="w-full aspect-square text-center text-[24px] leading-[32px] font-semibold text-[#006b2c] bg-[#eff6ea] border border-[#bdcaba] rounded-lg focus:ring-2 focus:ring-[#00873a] focus:border-[#006b2c] focus:shadow-[0_0_0_2px_rgba(0,107,44,0.2)] transition-all outline-none"
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-[16px] pt-[8px]">
              <button
                onClick={() => setStep(2)}
                className="w-full bg-[linear-gradient(135deg,#00873a_0%,#006b2c_100%)] text-[#ffffff] py-3 px-[32px] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium shadow-lg hover:shadow-[#00873a]/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Continue to 2FA
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <div className="flex flex-col items-center gap-1">
                <p className="text-[14px] leading-[20px] font-normal text-[#3e4a3d]">
                  Didn't receive the code?
                </p>
                <button
                  disabled={timeLeft > 0}
                  onClick={() => setTimeLeft(120)}
                  className="text-[12px] leading-[16px] font-semibold text-[#006b2c] hover:underline decoration-2 underline-offset-4 disabled:text-[#bdcaba] disabled:no-underline transition-all"
                >
                  {timeLeft > 0 ? `Resend Code (${formatTime(timeLeft)})` : "Resend Code"}
                </button>
              </div>
            </div>
          </section>

          {/* 2FA Section */}
          <section
            className={`bg-white/80 backdrop-blur-[12px] border border-slate-200/80 shadow-[0px_4px_20px_rgba(15,23,42,0.05)] rounded-xl p-[32px] flex flex-col gap-[32px] absolute inset-0 transition-all duration-500 transform ${
              step === 2
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h1 className="text-[24px] leading-[32px] font-semibold text-[#171d16]">
                  Two-Factor Auth
                </h1>
                <span className="text-[#006b2c] p-2 bg-[#7ffc97]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </span>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-[#3e4a3d]">
                Protect your account by entering the code from your authenticator app (e.g., Google
                Authenticator, Authy).
              </p>
            </div>

            {/* Single Modern OTP Field */}
            <div className="space-y-[8px]">
              <label className="text-[12px] leading-[16px] font-semibold text-[#3e4a3d] px-1">
                Security Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  maxLength={7}
                  placeholder="000 000"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  className="w-full tracking-[0.5em] text-center text-[24px] leading-[32px] font-semibold py-4 bg-[#eff6ea] border border-[#bdcaba] rounded-lg focus:ring-2 focus:ring-[#006b2c] focus:border-[#006b2c] transition-all outline-none text-[#006b2c] placeholder:text-[#bdcaba] placeholder:tracking-normal"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                  <span className="text-[#6e7b6c] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] pt-[8px]">
              <button className="w-full bg-[linear-gradient(135deg,#00873a_0%,#006b2c_100%)] text-[#ffffff] py-4 px-[32px] rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium shadow-lg hover:shadow-[#00873a]/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Verify & Login
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </button>

              <div className="flex items-center gap-2 py-2">
                <div className="h-px bg-[#bdcaba] flex-grow opacity-30"></div>
                <span className="text-[10px] uppercase font-bold text-[#3e4a3d] tracking-widest">
                  Or
                </span>
                <div className="h-px bg-[#bdcaba] flex-grow opacity-30"></div>
              </div>

              <button className="w-full bg-[#f4fcf0] hover:bg-[#e3eadf] border border-[#bdcaba] text-[#3e4a3d] py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-all flex items-center justify-center gap-2 group">
                <span className="transition-transform group-hover:rotate-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
                    <path d="M8 18h1"></path>
                    <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z"></path>
                  </svg>
                </span>
                Use Recovery Code
              </button>
            </div>

            <button
              onClick={() => setStep(1)}
              className="flex items-center justify-center gap-1 text-[#3e4a3d] text-[12px] leading-[16px] font-semibold hover:text-[#171d16] transition-colors mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back to Email Verification
            </button>
          </section>
        </div>

        {/* Footer Policy Links */}
        <footer className="flex flex-col gap-[16px] items-center justify-center mt-[32px] pb-10">
          <div className="flex gap-[16px] text-[#3e4a3d] text-[12px] leading-[16px] font-semibold">
            <a
              href="#"
              className="hover:text-[#006b2c] transition-colors underline decoration-[#bdcaba]/30 underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#006b2c] transition-colors underline decoration-[#bdcaba]/30 underline-offset-4"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-[#3e4a3d]/60 text-[14px] leading-[20px] font-normal text-center">
            © 2024 GigFlow Global Inc. All rights reserved.
          </p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}} />
    </div>
  );
}
