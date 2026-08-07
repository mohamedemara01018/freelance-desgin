'use client'
import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import DocumentTypePage from "@/views/DocumentTypePage";
import StepIndicator from "@/components/features/verify-identity/StepIndicator";
import UploadDocumentPage from "@/views/UploadDocumentPage";
import { DocumentType } from "@/utils/enums.utils";



export default function VerifyIdentityPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const stp = searchParams.get('step');
    const docType = searchParams.get('document-type');
    const [selected, setSelected] = useState<string>(docType || DocumentType.PASSPORT);
    const [step, setStep] = useState(Number(stp) || 1);

    return (
        <main className=" bg-surface min-h-screen py-12">
            <div className="text-center max-w-160 mx-auto">
                <h1 className="text-display-lg text-on-surface">
                    Verify Your Identity
                </h1>
                <p className="text-body-lg text-on-surface-variant mt-4">
                    To ensure trust and security on GigFlow, we need to verify your
                    identity. This process usually takes less than 2 minutes.
                </p>
            </div>

            <StepIndicator current={step} />

            {
                step == 1 && <DocumentTypePage selected={selected} setSelected={setSelected} />
            }

            {
                step == 2 && <UploadDocumentPage selected={selected} />
            }

            <div className="max-w-160 m-auto py-10 relative ">
                {step > 1 && <button
                    onClick={() => {
                        setStep(step - 1)
                        router.push(`/verify-identity?step=${step - 1}&document-type=${selected}`)
                    }}
                    className="absolute left-0 flex items-center gap-2 bg-surface-variant text-on-surface-variant text-label-md rounded-md px-6 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    <ArrowLeft size={18} />
                    Back
                </button>}
                {step < 3 && <button
                    onClick={() => {
                        setStep(step + 1)
                        router.push(`/verify-identity?step=${step + 1}&document-type=${selected}`)
                    }}
                    className="absolute right-0 flex items-center gap-2 bg-primary text-on-primary text-label-md rounded-md px-6 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Continue
                    <ArrowRight size={18} />
                </button>}
                {step == 3 && <button
                    className="absolute right-0 flex items-center gap-2 bg-primary text-on-primary text-label-md rounded-md px-6 py-3 hover:opacity-90 transition-opacity cursor-pointer">
                    Verify
                    <ArrowRight size={18} />
                </button>}
            </div>
        </main >
    );
}