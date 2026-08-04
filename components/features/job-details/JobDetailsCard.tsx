function JobDetailsCard({ JOB_DETAILS }) {
    return (
        <section className="card">
            <h3 className="text-headline-md !text-[16px] !leading-6 text-(--color-on-surface) pb-3 border-b border-(--color-outline-variant)">
                Job Details
            </h3>
            <div className="flex flex-col gap-4 mt-4">
                {JOB_DETAILS.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                        <span className="text-(--color-primary)">
                            <Icon size={20} />
                        </span>
                        <div>
                            <p className="text-body-md text-(--color-on-surface) font-medium">
                                {value}
                            </p>
                            <p className="text-body-sm text-(--color-on-surface-variant)">
                                {label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default JobDetailsCard