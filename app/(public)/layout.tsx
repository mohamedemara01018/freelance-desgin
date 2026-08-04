import Navbar from '@/components/layout/public/navbar/Navbar'
import React from 'react'

function layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar />
            <main className='pt-20'>
                {children}
            </main>
        </div>
    )
}

export default layout