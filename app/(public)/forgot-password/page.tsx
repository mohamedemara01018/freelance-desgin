"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KeyRound, Mail, ArrowLeft, Loader2 } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading && !isSent) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
      }, 1500);
    }
  };

  const buttonGradient = isSent
    ? undefined
    : 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-primary) 100%)';

  const buttonHoverGradient =
    'linear-gradient(135deg, color-mix(in srgb, var(--color-primary-container) 80%, white) 0%, color-mix(in srgb, var(--color-primary) 80%, white) 100%)';

  return (
    <div className=" flex flex-col font-['Inter'] text-[16px] leading-[24px] font-normal bg-background text-on-surface antialiased">
      {/* Main Content: Centered Forgot Password Card */}
      <main className="flex-grow flex items-center justify-center px-[16px] py-[32px]">
        <div className="w-full max-w-md">
          <div
            className="bg-surface-container-lowest border border-outline-variant rounded-xl p-[32px] flex flex-col items-center text-center"
            style={{ boxShadow: 'var(--shadow-level-2)' }}
          >
            {/* Icon/Avatar Section */}
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-[16px]">
              <KeyRound className="text-primary" size={36} />
            </div>

            <h1 className="font-['Geist'] text-[32px] leading-[40px] font-semibold tracking-[-0.01em] md:text-[28px] md:leading-[36px] text-on-surface mb-[8px]">
              Forgot Password?
            </h1>

            <p className="font-['Inter'] text-[16px] leading-[24px] text-on-surface-variant mb-[32px] max-w-[280px]">
              No worries, we&apos;ll send you reset instructions.
            </p>

            {/* Form Section */}
            <form className="w-full space-y-[16px]" onSubmit={handleSubmit}>
              <div className="relative group">

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant" size={22} />
                  <input
                    className="w-full pl-[48px] pr-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-0 focus:outline-none focus:border-primary transition-colors font-['Inter'] text-[16px] leading-[24px] text-on-surface"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading || isSent}
                  />
                </div>
              </div>

              <button
                className={`w-full text-on-primary py-3 px-[24px] rounded-lg font-['Geist'] text-[14px] leading-[20px] font-medium tracking-[0.01em] transition-all duration-200 ${isSent
                  ? "bg-primary-container cursor-default"
                  : isLoading
                    ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] opacity-80 cursor-wait"
                    : "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] active:scale-[0.98]"
                  }`}
                style={{ background: buttonGradient }}
                onMouseEnter={(e) => {
                  if (!isLoading && !isSent) e.currentTarget.style.background = buttonHoverGradient;
                }}
                onMouseLeave={(e) => {
                  if (!isLoading && !isSent) e.currentTarget.style.background = buttonGradient ?? '';
                }}
                type="submit"
                disabled={isLoading || isSent}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} /> Sending...
                  </span>
                ) : isSent ? (
                  "Reset Link Sent!"
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            <div className="mt-[32px]">
              <Link
                href="/login"
                className="inline-flex items-center gap-[8px] font-['Geist'] text-[14px] leading-[20px] font-medium tracking-[0.01em] text-secondary hover:text-primary transition-colors group"
              >
                <ArrowLeft className="transition-transform group-hover:-translate-x-1" size={18} />
                Back to Login
              </Link>
            </div>
          </div>

          {/* Contextual Helper */}
          <p className="text-center mt-[16px] font-['Inter'] text-[14px] leading-[20px] font-normal text-on-surface-variant">
            Having trouble?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact our support team
            </Link>.
          </p>
        </div>
      </main>
    </div>
  );
}