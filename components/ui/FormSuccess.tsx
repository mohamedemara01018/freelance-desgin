import { StickyNoteCheck } from 'lucide-react'

function FormSuccess({ success }: { success: string }) {
    return (
        <>
            {
                success && (
                    <div
                        className=" w-full flex items-center gap-3 rounded-lg border border-primary-container bg-primary-container p-4 text-on-primary-container"
                    >
                        <StickyNoteCheck />
                        <p className="text-sm font-medium">{success}</p>
                    </div>
                )
            }
        </>
    )
}

export default FormSuccess