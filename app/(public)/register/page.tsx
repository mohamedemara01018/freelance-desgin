import {
  Zap,
  Wallet,
} from 'lucide-react';
import RegisterForm from '@/components/features/register/RegisterForm';
import Link from 'next/link';
import { GoogleIcon } from '@/utils/icons.utils';




export default function SignupPage() {


  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-[24px] font-sans text-[16px] leading-[24px] text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-center z-10">

        {/* Left Column: Branding & Atmosphere */}
        <section className="hidden lg:flex lg:col-span-5 flex-col justify-center gap-[32px] h-full pr-[32px]">
          <div>
            <h1 className="text-[24px] leading-[32px] font-semibold text-primary mb-[8px]">GigFlow</h1>
            <h2 className="text-[48px] leading-[56px] font-bold tracking-[-0.02em] text-on-surface">
              Scale your freelance career with <span className="text-primary-container">precision.</span>
            </h2>
            <p className="text-[18px] leading-[28px] text-on-surface-variant mt-[16px] max-w-md">
              Join the elite ecosystem where talent meets opportunity. Manage jobs, track growth, and get paid faster.
            </p>
          </div>

          {/* Bento-style feature highlights */}
          <div className="grid grid-cols-2 gap-[16px]">
            <div
              className="backdrop-blur-md border border-outline-variant p-[16px] rounded-xl"
              style={{ boxShadow: 'var(--shadow-level-2)' }}
            >
              <div className="text-primary mb-[8px]"><Zap size={24} /></div>
              <h3 className="text-[14px] leading-[20px] font-medium tracking-[0.01em] text-on-surface">Instant Matching</h3>
              <p className="text-[14px] leading-[20px] text-on-surface-variant">AI-driven job curation based on your stack.</p>
            </div>
            <div
              className=" backdrop-blur-md border border-outline-variant p-[16px] rounded-xl"
              style={{ boxShadow: 'var(--shadow-level-2)' }}
            >
              <div className="text-primary mb-[8px]"><Wallet size={24} /></div>
              <h3 className="text-[14px] leading-[20px] font-medium tracking-[0.01em] text-on-surface">Secure Escrow</h3>
              <p className="text-[14px] leading-[20px] text-on-surface-variant">Guaranteed payments for every milestone.</p>
            </div>
          </div>
        </section>

        {/* Right Column: Registration Form */}
        <section className="lg:col-span-7 w-full max-w-2xl mx-auto ">
          <div
            className="flex flex-col  backdrop-blur-md border border-outline-variant p-[32px] rounded-xl"
            style={{ boxShadow: 'var(--shadow-level-2)' }}
          >
            <div className="mb-[32px] text-center lg:text-left">
              <h2 className="text-[24px] leading-[32px] font-semibold text-on-surface">Create an account</h2>
              <p className="text-[16px] leading-[24px] text-on-surface-variant">Join 50k+ professionals globally</p>
            </div>

            <RegisterForm />

            <div className="relative flex items-center py-[16px]">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-[16px] text-on-surface-variant text-[12px] leading-[16px] font-semibold">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-1 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-outline-variant rounded-xl hover:bg-surface-container hover:border-outline transition-all focus:ring-2 focus:ring-outline-variant/30 outline-none">
                <GoogleIcon className="w-5 h-5" />
                <span className="text-sm font-medium text-on-surface">Google</span>
              </button>

            </div>

            <Link href={'/login'} className="block text-center text-[14px] leading-[20px] text-on-surface-variant mt-[32px]">
              Already have an account?{' '}
              <a href="#" className="text-primary font-bold hover:underline">Sign in to GigFlow</a>
            </Link>
          </div>
        </section>
      </main>

      {/* Visual Polish: Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary-container/10 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}