import Logo from '@/components/ui/Logo'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-surface-container-lowest border-t border-outline-variant mt-[32px]">
            <div className="max-w-[1280px] mx-auto px-[24px] py-[32px] flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <Logo />
                    <p className="text-on-surface-variant text-[14px] leading-[20px] font-['Inter'] mt-2">© 2024 GigFlow Global Inc. All rights reserved.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {["Sitemap", "Privacy Policy", "Terms of Service", "Cookie Settings"].map(link => (
                        <a key={link} className="text-on-surface-variant hover:text-primary transition-colors text-[12px] leading-[16px] font-['Geist'] font-semibold uppercase tracking-wide" href="#">
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer