import {
    ImagePlus,
    CheckCircle2,
    Crop,
    Sun,
    Type,
    Info,
    Lock,
} from "lucide-react";

const REQUIREMENTS = [
    {
        icon: CheckCircle2,
        title: "Must be valid & unexpired",
        description: "Check the expiration date before uploading.",
    },
    {
        icon: Crop,
        title: "All four corners visible",
        description: "Do not crop the edges of the passport page.",
    },
    {
        icon: Sun,
        title: "No glare or shadows",
        description: "Ensure even lighting, especially over the hologram or laminate.",
    },
    {
        icon: Type,
        title: "Text must be perfectly readable",
        description: "Blurry images will be automatically rejected.",
    },
];


export default function UploadPassport() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 ">
            <div className="card flex flex-col gap-6 h-fit">
                <div className="max-w-160">
                    <h1 className="text-headline-md text-on-surface">
                        Upload Your Passport
                    </h1>
                    <p className="text-body-md text-on-surface-variant mt-2">
                        Please provide a clear, full-page photo of your passport&apos;s
                        information page. This ensures secure and verified access to the
                        ecosystem.
                    </p>
                </div>
                <label className="relative flex flex-col items-center justify-center gap-3 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low hover:bg-surface-container-highest py-20 cursor-pointer hover:border-primary transition-colors overflow-hidden">
                    <input type="file" accept="image/*,.pdf" className="hidden" />
                    <span className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                        <ImagePlus size={26} />
                    </span>
                    <span className="text-headline-md text-[20px]! leading-7! text-on-surface">
                        Drag &amp; drop your passport photo
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                        or{" "}
                        <span className="text-primary font-medium">
                            browse files
                        </span>{" "}
                        to upload
                    </span>
                    <span className="text-label-sm uppercase tracking-wide text-on-surface-variant mt-2">
                        Supports JPG, PNG, PDF (Max 10MB)
                    </span>
                </label>
            </div>

            <aside className="flex flex-col gap-6">
                <section className="bg-surface-container-low rounded-lg p-6">
                    <span className="flex items-center gap-2 text-headline-md text-[20px]! leading-7! text-on-surface">
                        <Info size={20} className="text-primary" />
                        Passport Requirements
                    </span>
                    <p className="text-body-sm text-on-surface-variant mt-2">
                        To avoid delays in verification, ensure your document meets
                        these strict criteria:
                    </p>

                    <div className="flex flex-col gap-4 mt-5">
                        {REQUIREMENTS.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon size={14} />
                                </span>
                                <div>
                                    <p className="text-body-md font-medium text-on-surface">
                                        {title}
                                    </p>
                                    <p className="text-body-sm text-on-surface-variant mt-0.5">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex gap-3 bg-surface-container-low rounded-lg p-5">
                    <Lock size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        Your data is encrypted in transit and at rest. We only use
                        this information to verify your identity per KYC regulations.
                    </p>
                </section>
            </aside>
        </div>
    );
}