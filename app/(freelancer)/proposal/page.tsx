'use client'
import { useState } from "react";
import {
    ShieldCheck,
    ExternalLink,
    ChevronDown,
    Lightbulb,
    UploadCloud,
    Star,
} from "lucide-react";

const DURATIONS = [
    "Less than 1 month",
    "1 to 3 months",
    "3 to 6 months",
    "More than 6 months",
];

function JobSummary() {
    return (
        <section className="card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                    <h1 className="text-headline-lg text-(--color-on-surface)">
                        Lead Full-Stack Developer for FinTech Dashboard
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {["FinTech", "React", "Node.js"].map((tag) => (
                            <span
                                key={tag}
                                className="bg-(--color-surface-container-high) text-(--color-on-surface-variant) text-label-md px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-left md:text-right shrink-0">
                    <p className="text-label-sm uppercase tracking-wide text-(--color-on-surface-variant)">
                        Budget
                    </p>
                    <p className="text-headline-md text-(--color-primary) mt-1">
                        $8,000 - $12,000
                    </p>
                </div>
            </div>

            <p className="text-body-md text-(--color-on-surface-variant) mt-4 leading-relaxed">
                We are seeking an experienced Full-Stack Developer to lead the
                architectural design and implementation of a new real-time
                analytics dashboard for our Series B FinTech platform. You will be
                responsible for building high-performance data visualizations and
                integrating with our proprietary wealth management APIs.
            </p>

            <button className="flex items-center gap-1.5 text-body-sm text-(--color-primary) font-medium mt-4 hover:underline">
                View full job description
                <ExternalLink size={16} />
            </button>
        </section>
    );
}

function ProposalTerms() {
    const [bid, setBid] = useState("");
    const [duration, setDuration] = useState(DURATIONS[0]);

    return (
        <section className="card">
            <h2 className="text-headline-md text-(--color-on-surface)">
                Proposal Terms
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-5">
                <div>
                    <label className="text-body-sm text-(--color-on-surface) block mb-2">
                        What is the full amount you&apos;d like to bid for this job?
                    </label>
                    <div className="flex items-center bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-(--radius-md) px-4">
                        <span className="text-body-md text-(--color-on-surface-variant)">$</span>
                        <input
                            type="number"
                            placeholder="0.00"
                            value={bid}
                            onChange={(e) => setBid(e.target.value)}
                            className="w-full bg-transparent py-2.5 pl-2 text-body-md text-(--color-on-surface) outline-none"
                        />
                    </div>
                    <p className="text-body-sm text-(--color-on-surface-variant) mt-2">
                        Includes GigFlow service fee (5%)
                    </p>
                </div>

                <div>
                    <label className="text-body-sm text-(--color-on-surface) block mb-2">
                        How long will this project take?
                    </label>
                    <div className="relative">
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full appearance-none bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-(--radius-md) px-4 py-2.5 text-body-md text-(--color-on-surface) pr-10"
                        >
                            {DURATIONS.map((d) => (
                                <option key={d}>{d}</option>
                            ))}
                        </select>
                        <ChevronDown
                            size={18}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-on-surface-variant) pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CoverLetter() {
    const [text, setText] = useState("");
    const max = 5000;

    return (
        <section className="card">
            <div className="flex items-center justify-between">
                <h2 className="text-headline-md text-(--color-on-surface)">
                    Cover Letter
                </h2>
                <span className="text-body-sm text-(--color-on-surface-variant)">
                    {text.length} / {max}
                </span>
            </div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, max))}
                placeholder="Introduce yourself and explain why you're a strong candidate for this job..."
                rows={8}
                className="w-full mt-4 bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-(--radius-md) p-4 text-body-md text-(--color-on-surface) placeholder:text-(--color-on-surface-variant) outline-none focus:border-(--color-primary) resize-none"
            />

            <p className="flex items-center gap-1.5 text-body-sm text-(--color-on-surface-variant) mt-3">
                <Lightbulb size={16} />
                Tip: Mention similar FinTech projects you&apos;ve worked on recently.
            </p>
        </section>
    );
}

function Attachments() {
    return (
        <section className="card">
            <h2 className="text-headline-md text-(--color-on-surface)">
                Attachments
            </h2>

            <label className="mt-4 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-(--color-outline-variant) rounded-(--radius-lg) bg-(--color-surface-container-low) py-10 cursor-pointer hover:border-(--color-primary) transition-colors">
                <input type="file" multiple className="hidden" />
                <span className="bg-(--color-primary)/10 text-(--color-primary) w-11 h-11 rounded-full flex items-center justify-center">
                    <UploadCloud size={22} />
                </span>
                <span className="text-body-md text-(--color-on-surface)">
                    Drag and drop or{" "}
                    <span className="text-(--color-primary) font-medium">browse files</span>
                </span>
                <span className="text-body-sm text-(--color-on-surface-variant)">
                    PDF, DOCX, ZIP, or PNG (Max 25MB)
                </span>
            </label>
        </section>
    );
}

function ClientInfoCard() {
    return (
        <section className="card">
            <div className="flex items-center gap-2 text-(--color-on-surface)">
                <ShieldCheck size={18} className="text-(--color-primary)" />
                <h3 className="text-headline-md !text-[16px] !leading-6">
                    Client Information
                </h3>
            </div>

            <dl className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between text-body-sm">
                    <dt className="text-(--color-on-surface-variant)">Payment Status</dt>
                    <dd className="text-(--color-primary) font-medium">Verified</dd>
                </div>
                <div className="flex items-center justify-between text-body-sm">
                    <dt className="text-(--color-on-surface-variant)">Rating</dt>
                    <dd className="flex items-center gap-1 text-(--color-on-surface) font-medium">
                        4.9 <Star size={14} className="text-(--color-primary)" />
                    </dd>
                </div>
                <div className="flex items-center justify-between text-body-sm">
                    <dt className="text-(--color-on-surface-variant)">Hire Rate</dt>
                    <dd className="text-(--color-on-surface) font-medium">82%</dd>
                </div>
            </dl>
        </section>
    );
}

function SimilarJobsCard() {
    const jobs = [
        { title: "Senior React Architect", pay: "$50 - $90 / hr" },
        { title: "UI Developer for Crypto App", pay: "Fixed Price $4,000" },
    ];

    return (
        <section className="card">
            <h3 className="text-headline-md !text-[16px] !leading-6 text-(--color-on-surface)">
                Similar Jobs
            </h3>
            <div className="flex flex-col gap-3 mt-4">
                {jobs.map((job) => (
                    <button key={job.title} className="text-left">
                        <p className="text-body-md text-(--color-primary) font-medium hover:underline">
                            {job.title}
                        </p>
                        <p className="text-body-sm text-(--color-on-surface-variant)">
                            {job.pay}
                        </p>
                    </button>
                ))}
            </div>
        </section>
    );
}

function FreelancerCard() {
    return (
        <section className="card overflow-hidden !p-0">
            <div
                className="h-24 w-full"
                style={{
                    background:
                        "linear-gradient(135deg, var(--color-inverse-surface) 0%, var(--color-primary) 150%)",
                }}
            />
            <div className="flex flex-col items-center text-center px-5 -mt-8 pb-5">
                <div className="w-16 h-16 rounded-full border-4 border-(--color-surface-container-lowest) overflow-hidden bg-(--color-surface-container-high)">
                    <img
                        className="w-full h-full object-cover"
                        alt="Alex Rivera"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQJOVzDpn4HRUQ995oDK8vNKEldnD0Vb_ZKIOFY-5251x_rTcJi3UMcPejacZ6ha9vAvgsnoW77j0mfzWS5-A5LkmhDKDHbynaLIPourfV2xS9bn2CdCZhFvwV91CcMAGbQKV_iMxq_9UcSMXqIxCcxf7jZu-SuWIc0KLd2FJu2cJHwd3uFonwt8Gzqizy9w9tBiuwlyef-4kXv_YtQ1tfeh2W2NmQHcRVZSyMXA3HtxRDHWznYSvknNbzV5N6aol7B-Ghwdf82c"
                    />
                </div>
                <p className="text-headline-md !text-[16px] !leading-6 text-(--color-on-surface) mt-3">
                    Alex Rivera
                </p>
                <p className="text-body-sm text-(--color-on-surface-variant)">
                    Full-stack Developer
                </p>
                <button className="w-full mt-4 border border-(--color-primary) text-(--color-primary) text-label-md rounded-(--radius-md) py-2 hover:bg-(--color-primary)/10 transition-colors">
                    View Public Profile
                </button>
            </div>
        </section>
    );
}

export default function ProposalPage() {
    const [agreed, setAgreed] = useState(false);

    return (
        <main className="bg-(--color-surface) min-h-screen py-8 pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 wrapper">
                <div className="flex flex-col gap-6">
                    <JobSummary />
                    <ProposalTerms />
                    <CoverLetter />
                    <Attachments />
                </div>

                <aside className="flex flex-col gap-6">
                    <ClientInfoCard />
                    <SimilarJobsCard />
                    <FreelancerCard />
                </aside>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-(--color-surface-container-lowest) border-t border-(--color-outline-variant) px-6 md:px-10 py-4">
                <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <label className="flex items-center gap-2.5 text-body-sm text-(--color-on-surface-variant)">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="h-4 w-4 rounded accent-(--color-primary)"
                        />
                        I agree to the{" "}
                        <a href="#" className="text-(--color-primary) hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-(--color-primary) hover:underline">
                            Community Guidelines
                        </a>
                        .
                    </label>

                    <div className="flex gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none bg-(--color-surface) border border-(--color-outline-variant) text-(--color-on-surface) text-label-md rounded-(--radius-md) px-6 py-2.5 hover:bg-(--color-surface-container-low) transition-colors">
                            Save Draft
                        </button>
                        <button
                            disabled={!agreed}
                            className={`flex-1 sm:flex-none text-label-md rounded-(--radius-md) px-6 py-2.5 transition-colors ${agreed
                                ? "bg-(--color-primary) text-(--color-on-primary) hover:opacity-90"
                                : "bg-(--color-primary)/50 text-(--color-on-primary) cursor-not-allowed"
                                }`}
                        >
                            Submit Proposal
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}