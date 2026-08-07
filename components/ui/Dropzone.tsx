import { ImagePlus } from "lucide-react";

function Dropzone({ label, hint }: { label: string; hint: string }) {
    return (
        <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low hover:bg-surface-container-highest py-16 cursor-pointer hover:border-primary transition-colors ">
            <input type="file" accept="image/*" className="hidden" />
            <span className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                <ImagePlus size={22} />
            </span>
            <span className="text-body-md font-medium text-on-surface">
                {label}
            </span>
            <span className="text-body-sm text-on-surface-variant">
                Drag and drop or click to browse
            </span>
            <span className="text-label-sm text-on-surface-variant mt-4">
                {hint}
            </span>
        </label>
    );
}

export default Dropzone