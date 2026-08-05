import Footer from '@/components/layout/freelancer/footer/Footer'
import Navbar from '@/components/layout/freelancer/navbar/Navbar'
import React from 'react'

function layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="min-h-screen bg-background text-on-surface font-['Inter']">
            <Navbar />
            <main className="wrapper py-8 space-y-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout