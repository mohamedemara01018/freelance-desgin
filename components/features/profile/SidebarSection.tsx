'use client'
import { Globe, Pencil, Share2, Terminal, Users } from 'lucide-react';
import { useState } from 'react'

function SidebarSection() {
    const [isHiring, setIsHiring] = useState(false);
    const [isMessaging, setIsMessaging] = useState(false);

    return (
        <aside className="w-full lg:w-[320px] space-y-[32px]">
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-shadow" style={{ boxShadow: 'var(--shadow-level-2)' }}>
                <h3 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface mb-2">$85.00/hr</h3>
                <p className="text-on-surface-variant text-[14px] leading-[20px] font-['Inter'] mb-6">Expert level rate for senior consulting and development.</p>
                <div className="space-y-3">
                    <button
                        className="w-full text-on-primary py-3 rounded-lg font-bold transition-all hover:opacity-90 active:scale-95 flex justify-center items-center h-12"
                        style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)' }}
                        onClick={() => { setIsHiring(true); setTimeout(() => setIsHiring(false), 1000); }}
                    >
                        {isHiring ? <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" /> : "Hire Me"}
                    </button>
                    <button
                        className="w-full bg-surface-container-high hover:bg-surface-container-highest transition-all py-3 rounded-lg font-bold text-on-surface active:scale-95 flex justify-center items-center h-12"
                        onClick={() => { setIsMessaging(true); setTimeout(() => setIsMessaging(false), 1000); }}
                    >
                        {isMessaging ? <div className="w-5 h-5 border-2 border-on-surface/30 border-t-on-surface rounded-full animate-spin" /> : "Send Message"}
                    </button>
                </div>
            </section>

            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6" style={{ boxShadow: 'var(--shadow-level-2)' }}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface">Skills</h3>
                    <button className="text-on-surface-variant hover:text-primary transition-colors"><Pencil size={18} /></button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "AWS"].map(skill => (
                        <span key={skill} className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[12px] leading-[16px] font-['Geist'] font-medium hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 cursor-default transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6" style={{ boxShadow: 'var(--shadow-level-2)' }}>
                <h3 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface mb-4">Languages</h3>
                <div className="space-y-3">
                    {[
                        { lang: "English", level: "Native", highlight: true },
                        { lang: "Spanish", level: "Bilingual", highlight: true },
                        { lang: "German", level: "Basic", highlight: false }
                    ].map(l => (
                        <div key={l.lang} className="flex justify-between items-center group cursor-default hover:bg-primary/5 p-1 -mx-1 rounded transition-colors">
                            <span className="text-on-surface-variant text-[14px] leading-[20px] font-['Inter'] group-hover:text-on-surface">{l.lang}</span>
                            <span className={`text-[12px] leading-[16px] font-['Geist'] ${l.highlight ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                                {l.level}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6" style={{ boxShadow: 'var(--shadow-level-2)' }}>
                <h3 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface mb-4">On the Web</h3>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { label: "Portfolio", icon: <Globe size={20} /> },
                        { label: "GitHub", icon: <Terminal size={20} /> },
                        { label: "LinkedIn", icon: <Users size={20} /> },
                        { label: "Dribbble", icon: <Share2 size={20} /> }
                    ].map(link => (
                        <a key={link.label} className="flex items-center gap-2 p-2 rounded-lg border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group active:scale-95" href="#">
                            <span className="text-on-surface-variant group-hover:text-primary transition-colors">{link.icon}</span>
                            <span className="text-[12px] leading-[16px] font-['Geist'] font-bold text-on-surface">{link.label}</span>
                        </a>
                    ))}
                </div>
            </section>
        </aside>
    );
}

export default SidebarSection