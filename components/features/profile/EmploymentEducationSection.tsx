import { Award, GraduationCap } from 'lucide-react'


function EmploymentEducationSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
                <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface mb-6">Employment History</h2>
                <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant">
                    <div className="pl-8 relative hover:-translate-y-1 transition-transform cursor-default">
                        <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-surface"></div>
                        <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">Lead Developer | InnovateX</h4>
                        <p className="text-[12px] leading-[16px] font-['Geist'] font-semibold text-on-surface-variant">2020 — Present</p>
                        <p className="text-[14px] leading-[20px] font-['Inter'] mt-2 text-on-surface-variant">Leading a team of 12 developers in building a cloud-native SaaS platform.</p>
                    </div>
                    <div className="pl-8 relative hover:-translate-y-1 transition-transform cursor-default">
                        <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-outline border-2 border-surface"></div>
                        <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">Senior Web Engineer | Flux Media</h4>
                        <p className="text-[12px] leading-[16px] font-['Geist'] font-semibold text-on-surface-variant">2017 — 2020</p>
                    </div>
                </div>
            </section>
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
                <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface mb-6">Education</h2>
                <div className="space-y-6">
                    <div className="flex gap-4 hover:-translate-y-1 transition-transform cursor-default">
                        <span className="text-primary"><GraduationCap size={24} /></span>
                        <div>
                            <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">BSc Computer Science</h4>
                            <p className="text-[14px] leading-[20px] font-['Inter'] text-on-surface-variant">University College London</p>
                            <p className="text-[12px] leading-[16px] font-['Geist'] font-semibold text-on-surface-variant">2012 — 2016</p>
                        </div>
                    </div>
                    <div className="flex gap-4 hover:-translate-y-1 transition-transform cursor-default">
                        <span className="text-primary"><Award size={24} /></span>
                        <div>
                            <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">AWS Certified Solutions Architect</h4>
                            <p className="text-[14px] leading-[20px] font-['Inter'] text-on-surface-variant">Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EmploymentEducationSection