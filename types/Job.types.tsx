export type CategoryTone = "primary" | "tertiary" | "secondary";


export interface Job {
    id: string;
    category: string;
    tone: CategoryTone;
    title: string;
    postedAgo: string;
    payType: "hourly" | "fixed";
    payLabel: string;
    level: string;
    paymentVerified: boolean;
    description: string;
    tags: string[];
}