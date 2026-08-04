/* eslint-disable @next/next/no-img-element */

'use client'
import Logo from '@/components/ui/Logo'
import ToggleTheme from '@/components/ui/ToggleTheme'
import { Bell, Search, Settings, TextAlignJustify, X } from 'lucide-react'
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-surface border-b border-outline-variant shadow-sm docked w-full top-0 sticky z-50">
                <div className="flex justify-between items-center wrapper w-full px-6  mx-auto h-16">
                    <div className="flex items-center gap-8">
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-surface-container-low transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <X />
                            ) : (
                                <TextAlignJustify />
                            )}
                        </button>
                        <Logo />
                        <div className="hidden md:flex gap-6 items-center">
                            <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/jobs">Browse</Link>
                            <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">My Jobs</Link>
                            <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Messages</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                                <Search size={20} />
                            </span>
                            <input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-[14px] leading-5 font-['Inter'] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 transition-all" placeholder="Search jobs..." type="text" />
                        </div>
                        <ToggleTheme />
                        <button className="text-on-surface-variant hover:text-primary transition-colors"><Bell size={22} /></button>
                        <button className="text-on-surface-variant hover:text-primary transition-colors"><Settings size={22} /></button>
                        <div className="h-8 w-8 rounded-full bg-outline-variant overflow-hidden border border-outline cursor-pointer hover:opacity-80 transition-opacity">
                            <img className="w-full h-full object-cover" alt="Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNAxXMzDLRgfdELYk1mXwnoY4DSq5Axa07KRgsc1ozexKMe2SCixe4Y43dhn2FJmiCP7_xDbj_iYDvTRWV-GZvMsVT8cy550EBwTHfELQxU_DpgP0TdxjVZGLeDwPourJT5n7b7qVV9kkUy6fVmCq4toT_o_cj1kFRdv4xPuM0Cd48m4ubbtXgxU523BodPGp-L39cZXKesr6WZtyyBaekpsVaR0Qi8P_EinbAWYlkSRRafKOs55TCMWxyKxY8KUvmfcRxVaxImq4" />
                        </div>
                    </div>
                </div>
            </nav>
            {
                menuOpen && (
                    <div className=" md:hidden bg-surface px-6 pb-4 pt-6 flex flex-col gap-2 fixed left-0 right-0 top-10 z-30 shadow-xl border border-b-outline">
                        {[
                            { label: 'Browse', href: '/jobs' },
                            { label: 'My Jobs', href: 'myjobs' },
                            { label: 'Messages', href: 'messages' },
                        ].map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="py-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default Navbar
