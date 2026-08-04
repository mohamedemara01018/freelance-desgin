function ApplyCard() {
    return (
        <section className="card flex flex-col gap-3">
            <button className="w-full bg-(--color-primary) text-(--color-on-primary) text-label-md rounded-(--radius-md) py-3 hover:opacity-90 transition-opacity">
                Apply Now
            </button>
            <button className="w-full bg-(--color-surface) border border-(--color-outline-variant) text-(--color-on-surface) text-label-md rounded-(--radius-md) py-3 hover:bg-(--color-surface-container-low) transition-colors">
                Save Job
            </button>
            <p className="text-body-sm text-(--color-on-surface-variant) text-center mt-1">
                Pro Tip: Highlight your Fintech experience in your proposal.
            </p>
        </section>
    );
}

export default ApplyCard