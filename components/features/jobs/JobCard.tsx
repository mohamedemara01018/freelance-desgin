'use client'
import { Job } from "@/types/Job.types";
import {
    Bookmark,
    Clock,
    Banknote,
    TrendingUp,
    ShieldCheck,
    Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

type CategoryTone = "primary" | "tertiary" | "secondary";


const toneClasses: Record<CategoryTone, string> = {
    primary: "text-(--color-primary)",
    tertiary: "text-(--color-tertiary)",
    secondary: "text-(--color-secondary)",
};

function JobCard({ job }: { job: Job }) {
    const router = useRouter()
    return (
        <article className="card relative" >
            <button
                type="button"
                aria-label="Save job"
                className="absolute top-6 right-6 text-outline hover:text-primary transition-colors"
            >
                <Bookmark size={20} />
            </button>

            <span
                className={`text-label-sm uppercase tracking-wide ${toneClasses[job.tone]}`}
            >
                {job.category}
            </span>

            <h3 className="text-headline-md text-on-surface mt-1 hover:scale-102 duration-150 hover:text-primary cursor-pointer" onClick={() => router.push('/jobs/1')}>
                {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-on-surface-variant">
                <span className="flex items-center gap-1.5 text-body-sm">
                    <Clock size={16} />
                    {job.postedAgo}
                </span>
                <span className="flex items-center gap-1.5 text-body-sm font-medium text-on-surface">
                    <Banknote size={16} />
                    {job.payLabel}
                </span>
                <span className="flex items-center gap-1.5 text-body-sm">
                    {job.level === "Intermediate" ? (
                        <Star size={16} />
                    ) : (
                        <TrendingUp size={16} />
                    )}
                    {job.level}
                </span>
                {job.paymentVerified && (
                    <span className="flex items-center gap-1.5 text-body-sm text-primary font-medium">
                        <ShieldCheck size={16} />
                        Payment Verified
                    </span>
                )}
            </div>

            <p className="text-body-md text-on-surface-variant mt-4 leading-relaxed">
                {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
                {job.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-surface-container-high text-on-surface-variant text-label-md px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default JobCard