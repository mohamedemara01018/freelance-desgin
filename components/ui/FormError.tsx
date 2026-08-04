import { TriangleAlert } from 'lucide-react'
import React from 'react'

function FormError({ error }: { error: string }) {
    return (
        <>
            {
                error && (
                    <div
                        className=" w-full flex items-center gap-3 rounded-lg border border-error-container bg-error-container p-4 text-on-error-container"
                    >
                        <TriangleAlert />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                )
            }
        </>
    )
}

export default FormError