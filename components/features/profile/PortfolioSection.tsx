
function PortfolioSection() {
    return (
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface">Portfolio</h2>
                <button className="bg-primary/5 text-primary px-4 py-1.5 rounded-lg text-[14px] leading-[20px] font-['Geist'] font-medium hover:bg-primary/10 transition-colors">Add Project</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: "FinTech Analytics Platform", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC006dP7cCPU9xYkTLke4v50WeOREbReSY13ify8Bbjf7mO9Nbbwkc0d0Up94-5wxsEKGZsYsrqTKy1MjOaezFlgW8hIwNpgHihigOFd4tZcDbmQqBWSEa12jBSkcZEC1JgyYZlkI2omFaaWV4qJ8WRbS0-EJbrn-Z50CHem-Wj-wWFXuO3E3HGo8aWaMyKlI5UkPw1UzgqdyoYqpm7q-wXLVyqWsd1ltnRgAHr1Jo5C_P7M2gCQuA9G_yc9z8lT2qHMltn4sVNJw", tags: ["React", "Node.js", "AWS"] },
                    { title: "Luxury E-commerce Suite", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8thgLc7EPtSMDF4_n4JgmloQ4gIwKGdQR_Hf057uD3I6byoU4NmgoxEZjfbPU_IZ3-xGZf5xHeZXJI94-FGWPaxC2erAclSgAhSEV4dc7KbId4Rr5kQnrlVTER7nql1ddlzNvYJreQbP6ipSzNTMo4axvUKytldElcMVUkF4ssp1ECU-fH-XsIVnxRTcrdfh16fK6VXv69H-vv04R1WEMWpqOK6AgUP_94XEvl6F69olMwWY5oiZdT51GbBYQ06QwUfsCDoIPt9w", tags: ["Next.js", "Shopify", "Tailwind"] }
                ].map((p, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 border border-outline-variant relative">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={p.title} src={p.img} />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-surface text-on-surface px-4 py-2 rounded-lg text-[14px] leading-[20px] font-['Geist'] font-medium">View Details</span>
                            </div>
                        </div>
                        <h4 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface group-hover:text-primary transition-colors">{p.title}</h4>
                        <div className="flex gap-2 mt-2">
                            {p.tags.map(tag => (
                                <span key={tag} className="bg-surface-container-high px-2 py-0.5 rounded text-[12px] text-on-surface-variant font-['Inter']">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PortfolioSection