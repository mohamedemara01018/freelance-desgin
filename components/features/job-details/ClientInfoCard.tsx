import { ShieldCheck, Star, StarHalf } from "lucide-react";

function ClientInfoCard() {
    return (
        <section className="card">
            <h3 className="text-headline-md !text-[16px] !leading-6 text-(--color-on-surface) pb-3 border-b border-(--color-outline-variant)">
                About the Client
            </h3>

            <div className="flex flex-col gap-4 mt-4">
                <span className="flex items-center gap-2 text-body-md text-(--color-primary) font-medium">
                    <ShieldCheck size={18} />
                    Payment Verified
                </span>

                <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                        <Star
                            key={i}
                            size={16}
                            className="text-(--color-primary) fill-(--color-primary)"
                        />
                    ))}
                    <StarHalf size={16} className="text-(--color-primary) fill-(--color-primary)" />
                    <span className="text-body-sm text-(--color-on-surface-variant) ml-1">
                        4.8 of 12 reviews
                    </span>
                </div>

                <div>
                    <p className="text-body-md text-(--color-on-surface) font-medium">
                        United Kingdom
                    </p>
                    <p className="text-body-sm text-(--color-on-surface-variant)">
                        London, 10:42 AM local time
                    </p>
                </div>

                <div>
                    <p className="text-body-md text-(--color-on-surface) font-medium">
                        24 Jobs Posted
                    </p>
                    <p className="text-body-sm text-(--color-on-surface-variant)">
                        80% hire rate, 2 open jobs
                    </p>
                </div>

                <p className="text-body-sm text-(--color-on-surface-variant) italic">
                    Member since Jan 2021
                </p>
            </div>
        </section>
    );
}

export default ClientInfoCard