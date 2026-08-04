import {
    ChevronDown,
    ArrowRight,
} from "lucide-react";
import { Job } from "@/types/Job.types";
import JobCard from "@/components/features/jobs/JobCard";
import FilterSidebar from "@/components/features/jobs/FilterSidebar";
import ToggleSidbar from "@/components/features/jobs/ToggleSidbar";


const JOBS: Job[] = [
    {
        id: "1",
        category: "Development",
        tone: "primary",
        title: "Senior React Developer for Fintech Dashboard",
        postedAgo: "Posted 2 hours ago",
        payType: "hourly",
        payLabel: "$80 - $120 / hr",
        level: "Expert Level",
        paymentVerified: true,
        description:
            "We are looking for a high-performing React Developer to lead the front-end architecture of our next-gen fintech wealth management dashboard. Experience with D3.js and secure API integrations is required...",
        tags: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
    },
    {
        id: "2",
        category: "Design",
        tone: "tertiary",
        title: "Visual Identity & Branding for Sustainable Fashion Startup",
        postedAgo: "Posted 5 hours ago",
        payType: "fixed",
        payLabel: "$5,000 Fixed Price",
        level: "Intermediate",
        paymentVerified: false,
        description:
            "Seeking a creative brand designer to build a comprehensive visual identity for 'EcoWeave', a sustainable streetwear brand. Scope includes logo design, typography system, brand guidelines, and 5 social media templates...",
        tags: ["Branding", "Illustration", "Figma"],
    },
    {
        id: "3",
        category: "Marketing",
        tone: "secondary",
        title: "Growth Lead for AI SaaS Product Launch",
        postedAgo: "Posted 1 day ago",
        payType: "hourly",
        payLabel: "$60 - $90 / hr",
        level: "Expert Level",
        paymentVerified: true,
        description:
            "Help us scale a disruptive generative AI writing assistant. We need a strategist who can manage multi-channel campaigns across LinkedIn, Twitter, and specialized dev communities. Proven track record in B2B SaaS is...",
        tags: ["Growth Marketing", "SEO", "PPC"],
    },
];







export default function BrowseJobsPage() {
    return (
        <main className="bg-surface min-h-screen py-8">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start wrapper ">
                <FilterSidebar />
                <section className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <ToggleSidbar />
                            <h1 className="text-headline-lg text-on-surface">
                                Top Jobs for You
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 text-body-md text-on-surface-variant">
                            <span>Sort by:</span>
                            <button className="flex items-center gap-1 text-primary font-medium">
                                Newest First
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>

                    {JOBS.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}

                    <div className="flex justify-center py-4">
                        <button className="flex items-center gap-2 text-primary text-label-md hover:underline">
                            Load More Jobs
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}