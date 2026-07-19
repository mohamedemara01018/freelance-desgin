'use client'
import {
    ArrowRight,
    Loader2,
    CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';
import { InputField } from './InputFeild';
import SelectFeild from './SelectFeild';

function RegisterForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (status !== 'idle') return;

        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
            }, 2000);
        }, 1500);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Names Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="first_name" className="text-[14px] font-medium text-on-surface">First Name</label>
                    <InputField id="first_name" name='firstName' type="text" label="First Name" placeholder="e.g. John" required />
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="last_name" className="text-[14px] font-medium text-on-surface">Last Name</label>
                    <InputField id="last_name" name='lastName' type="text" label="Last Name" placeholder="e.g. Doe" required />
                </div>
            </div>

            {/* Identity Row */}
            <div className="flex flex-col items-start gap-1.5 w-full">
                <label htmlFor="email" className="text-[14px] font-medium text-on-surface">Email Address</label>
                <InputField id="email" name='email' type="email" label="Email Address" placeholder="alex@example.com" required />
            </div>

            {/* Location Row */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="country" className="text-[14px] font-medium text-on-surface">Country</label>
                    <div className="relative group w-full">
                        <SelectFeild name='country' id='country' options={[{ label: 'kjfd', value: 'kdjf' }]} />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="city" className="text-[14px] font-medium text-on-surface">City</label>
                    <div className="relative group w-full">
                        <SelectFeild name='city' id='city' options={[{ label: 'kjfd', value: 'kdjf' }]} />
                    </div>
                </div>
            </div>

            {/* Passwords Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="password" className="text-[14px] font-medium text-on-surface">Password</label>
                    <InputField id="password" name='password' isPassword label="Password" placeholder="Minimum 8 characters" required minLength={8} />
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="confirm_password" className="text-[14px] font-medium text-on-surface">Confirm Password</label>
                    <InputField id="confirm_password" isPassword label="Confirm Password" placeholder="Repeat your password" required minLength={8} />
                </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 py-1">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        required
                        className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary-fixed-dim"
                    />
                </div>
                <label htmlFor="terms" className="text-[14px] leading-5 text-on-surface-variant">
                    I accept the <a href="#" className="text-primary font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-medium hover:underline">Privacy Policy</a>.
                </label>
            </div>

            {/* Actions */}
            <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full text-on-primary text-[14px] leading-5 font-medium tracking-[0.01em] py-4 rounded-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2
                    ${status === 'loading' ? 'opacity-80' : 'opacity-100'}
                `}
                style={{
                    background: status === 'success'
                        ? 'var(--color-primary)'
                        : 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-inverse-primary) 100%)',
                }}
            >
                {status === 'idle' && (
                    <>
                        <span>Register</span>
                        <ArrowRight size={18} />
                    </>
                )}
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'success' && (
                    <>
                        <CheckCircle2 size={18} />
                        <span>Account Created</span>
                    </>
                )}
            </button>
        </form>
    );
}

export default RegisterForm;