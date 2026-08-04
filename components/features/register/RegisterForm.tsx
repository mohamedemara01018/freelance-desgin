'use client'
import {
    ArrowRight,
    Loader2,
    CheckCircle2,
    TriangleAlert,
} from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { InputField } from './InputFeild';
import { authService } from '@/services/auth.service';
import { useRouter, useSearchParams } from 'next/navigation';
import FormError from '@/components/ui/FormError';


function RegisterForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const searchParams = useSearchParams();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        // role: "freelancer"
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const router = useRouter();

    const role = searchParams.get('role');

    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        if (!formData.password) {
            setConfirmPasswordError('must provide your password then confirm it')
            return
        }
        setConfirmPassword(e.target.value)
        if (!formData.password.includes(e.target.value)) {
            setConfirmPasswordError('confirm password not match your password')
        } else {
            setConfirmPasswordError('')
        }
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const validate = () => {
        if (!formData.firstName.trim()) return "First name is required";
        if (!formData.lastName.trim()) return "Last name is required";
        if (!formData.email.trim()) return "Email is required";
        if (!formData.password.trim()) return "Password is required";
        if (formData.password.length < 8)
            return "Password must be at least 8 characters";
        return "";
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const vaildateError = validate();
        if (vaildateError) {
            setError(vaildateError);
            return
        }

        setError("");
        setStatus('loading');

        try {
            if (!role) {
                setError('please select your role')
            }
            const data = await authService.register({ ...formData, role })
            console.log(data)
            setStatus('success')

            router.push('/verify-email')
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            })
            setConfirmPassword('')

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error.message)
        } finally {
            setStatus('idle')

        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <FormError error={error} />
            {/* Names Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="first_name" className="text-[14px] font-medium text-on-surface">First Name</label>
                    <InputField id="first_name" name='firstName' type="text" label="First Name" placeholder="e.g. John" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="last_name" className="text-[14px] font-medium text-on-surface">Last Name</label>
                    <InputField id="last_name" name='lastName' type="text" label="Last Name" placeholder="e.g. Doe" required value={formData.lastName} onChange={handleChange} />
                </div>
            </div>

            {/* Identity Row */}
            <div className="flex flex-col items-start gap-1.5 w-full">
                <label htmlFor="email" className="text-[14px] font-medium text-on-surface">Email Address</label>
                <InputField id="email" name='email' type="email" label="Email Address" placeholder="alex@example.com" required value={formData.email} onChange={handleChange} />
            </div>

            <FormError error={confirmPasswordError} />
            {/* Passwords Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="password" className="text-[14px] font-medium text-on-surface">Password</label>
                    <InputField id="password" name='password' isPassword label="Password" placeholder="Minimum 8 characters" required minLength={8} value={formData.password} onChange={handleChange} />
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                    <label htmlFor="confirm_password" className="text-[14px] font-medium text-on-surface">Confirm Password</label>
                    <InputField id="confirm_password" isPassword label="Confirm Password" placeholder="Repeat your password" required minLength={8} value={confirmPassword} onChange={handleChangeConfirmPassword} />
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
                disabled={status !== 'idle' || !role || (formData.password != confirmPassword)}
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