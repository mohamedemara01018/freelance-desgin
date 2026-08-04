import ApplyCard from "@/components/features/job-details/ApplyCard";
import ClientInfoCard from "@/components/features/job-details/ClientInfoCard";
import JobDescription from "@/components/features/job-details/JobDescription";
import JobDetailsCard from "@/components/features/job-details/JobDetailsCard";
import JobHeader from "@/components/features/job-details/JobHeader";
import {
    ArrowLeft,
    Banknote,
    Briefcase,
    TrendingUp,
    CalendarDays,
} from "lucide-react";

const SKILLS = ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Fintech"];

const RESPONSIBILITIES = [
    "Develop and maintain scalable front-end components using React, TypeScript, and Tailwind CSS.",
    "Optimize backend services for low-latency responses using Node.js and PostgreSQL.",
    "Collaborate on the architectural design of new feature sets including real-time fraud detection alerts.",
    "Write clean, documented, and testable code following industry best practices.",
];

const JOB_DETAILS = [
    { icon: Banknote, label: "Hourly Rate", value: "$85.00 - $120.00" },
    { icon: Briefcase, label: "Job Type", value: "Contract" },
    { icon: TrendingUp, label: "Experience Level", value: "Expert" },
    { icon: CalendarDays, label: "Duration", value: "1-3 Months" },
];


export default function JobDetailPage() {
    return (
        <main className="bg-surface py-8">
            <div className="wrapper">
                <button className="flex items-center gap-2 text-primary text-body-md font-medium mb-6 hover:underline">
                    <ArrowLeft size={18} />
                    Back to search
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
                    <div className="flex flex-col gap-6">
                        <JobHeader />
                        <JobDescription RESPONSIBILITIES={RESPONSIBILITIES} SKILLS={SKILLS} />
                    </div>

                    <aside className="flex flex-col gap-6">
                        <ApplyCard />
                        <JobDetailsCard JOB_DETAILS={JOB_DETAILS} />
                        <ClientInfoCard />
                    </aside>
                </div>
            </div>
        </main>
    );
}