function JobDescription({ RESPONSIBILITIES, SKILLS }) {
    return (
        <section className="card">
            <h2 className="text-headline-md text-(--color-on-surface)">
                Job Description
            </h2>

            <div className="flex flex-col gap-4 mt-4 text-body-md text-(--color-on-surface-variant) leading-relaxed">
                <p>
                    We are seeking a highly skilled Senior Full-stack Engineer to lead
                    the expansion of our flagship fintech dashboard. Our platform
                    processes millions of transactions daily, and we are currently
                    migrating our legacy components to a more performant React-based
                    architecture with a Node.js microservices backend.
                </p>
                <p>
                    The ideal candidate will have extensive experience in
                    high-performance web applications, real-time data visualization
                    (using D3.js or similar), and a deep understanding of secure
                    financial API integrations. You will be working directly with our
                    CTO and Lead Designer to implement high-fidelity UI components that
                    prioritize clarity and speed.
                </p>
            </div>

            <h3 className="text-body-md font-semibold text-(--color-on-surface) mt-6">
                Key Responsibilities:
            </h3>
            <ul className="flex flex-col gap-2 mt-3">
                {RESPONSIBILITIES.map((item) => (
                    <li
                        key={item}
                        className="flex gap-2 text-body-md text-(--color-on-surface-variant) leading-relaxed"
                    >
                        <span className="text-(--color-primary) mt-2">•</span>
                        {item}
                    </li>
                ))}
            </ul>

            <p className="text-body-md text-(--color-on-surface-variant) leading-relaxed mt-6">
                This is a long-term project with the potential for ongoing
                maintenance and further feature development over the next 6-12
                months. We value clear communication and a proactive approach to
                problem-solving.
            </p>

            <h3 className="text-body-md font-semibold text-(--color-on-surface) mt-6">
                Required Skills
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
                {SKILLS.map((skill) => (
                    <span
                        key={skill}
                        className="bg-(--color-surface-container-high) text-(--color-on-surface-variant) text-label-md px-3 py-1 rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default JobDescription