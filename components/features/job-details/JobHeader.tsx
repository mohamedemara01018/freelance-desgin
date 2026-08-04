import { Clock, Heart, MapPin, Network } from "lucide-react";

function JobHeader() {
    return (
        <section className="card">
            <div className="flex items-start justify-between gap-4">
                <h1 className="text-headline-lg text-(--color-on-surface)">
                    Senior Full-stack Engineer for Fintech Dashboard Expansion
                </h1>
                <button
                    type="button"
                    aria-label="Save job"
                    className="shrink-0 w-11 h-11 rounded-full border border-(--color-outline-variant) flex items-center justify-center text-(--color-on-surface-variant) hover:text-(--color-tertiary) hover:border-(--color-tertiary) transition-colors"
                >
                    <Heart size={20} />
                </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-(--color-on-surface-variant)">
                <span className="flex items-center gap-1.5 text-body-sm">
                    <Network size={16} />
                    Web Development
                </span>
                <span className="flex items-center gap-1.5 text-body-sm">
                    <MapPin size={16} />
                    London, United Kingdom
                </span>
                <span className="flex items-center gap-1.5 text-body-sm">
                    <Clock size={16} />
                    Posted 2 hours ago
                </span>
            </div>
        </section>
    );
}

export default JobHeader