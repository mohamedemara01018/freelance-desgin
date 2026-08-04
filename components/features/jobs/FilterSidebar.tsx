'use client'
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { onClose, selectToggleSidebar } from "@/store/slices/toggleSidebarSlice";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterSidebar() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    console.log(isMobile)
    return (
        <>
            {isMobile ?
                <MobileFilterSiderbar isMobile={isMobile} />
                : <aside className="card h-fit flex flex-col gap-6">
                    <FilterItems isMobile={isMobile} />
                </aside>
            }
        </>

    );
}

export default FilterSidebar


function MobileFilterSiderbar({ isMobile }: { isMobile: boolean }) {
    const isOpen = useSelector(selectToggleSidebar).isOpen
    const dispatch = useDispatch()

    return <>
        {
            isOpen && <>
                <div className="fixed inset-0 z-10  bg-surface/10 backdrop-blur-sm"></div>
                <aside className="card rounded-none fixed top-12 bottom-0 left-0 z-20 overflow-auto w-70">
                    <div className="h-fit flex flex-col justify-start gap-6">
                        <FilterItems isMobile={isMobile} onClose={() => dispatch(onClose())} />
                    </div>
                </aside>
            </>
        }

    </>
}
function FilterItems({ isMobile, onClose }: { isMobile: boolean, onClose?: () => void }) {

    const [jobTypes, setJobTypes] = useState({ fixed: true, hourly: true });
    const [experience, setExperience] = useState<"entry" | "intermediate" | "expert">(
        "expert"
    );
    const [paymentVerified, setPaymentVerified] = useState(false);
    return <>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-on-surface">
                {
                    !isMobile ? <SlidersHorizontal size={20} /> : ''
                }

                <h2 className="text-headline-md">Filters</h2>
            </div>
            {isMobile &&
                <div
                    onClick={onClose}
                    className="bg-surface-container-highest w-fit p-2 rounded-sm text-on-surface cursor-pointer">
                    <SlidersHorizontal size={20} />
                </div>
            }
        </div>

        <div>
            <label className="text-label-md text-(--color-on-surface-variant) block mb-2">
                Category
            </label>
            <div className="relative">
                <select className="w-full appearance-none bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-(--radius-md) px-4 py-2.5 text-body-md text-(--color-on-surface) pr-10">
                    <option>All Categories</option>
                    <option>Development</option>
                    <option>Design</option>
                    <option>Marketing</option>
                </select>
                <ChevronDown
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-on-surface-variant) pointer-events-none"
                />
            </div>
        </div>

        <div>
            <p className="text-label-md text-(--color-on-surface-variant) mb-2">
                Job Type
            </p>
            <div className="flex flex-col gap-2.5">
                {(["fixed", "hourly"] as const).map((key) => (
                    <label
                        key={key}
                        className="flex items-center gap-2.5 text-body-md text-(--color-on-surface) cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={jobTypes[key]}
                            onChange={(e) =>
                                setJobTypes((prev) => ({ ...prev, [key]: e.target.checked }))
                            }
                            className="h-4 w-4 rounded accent-(--color-primary)"
                        />
                        {key === "fixed" ? "Fixed Price" : "Hourly Rate"}
                    </label>
                ))}
            </div>
        </div>

        <div>
            <p className="text-label-md text-(--color-on-surface-variant) mb-2">
                Experience Level
            </p>
            <div className="flex flex-col gap-2.5">
                {(["entry", "intermediate", "expert"] as const).map((level) => (
                    <label
                        key={level}
                        className="flex items-center gap-2.5 text-body-md text-(--color-on-surface) cursor-pointer capitalize"
                    >
                        <input
                            type="radio"
                            name="experience"
                            checked={experience === level}
                            onChange={() => setExperience(level)}
                            className="h-4 w-4 accent-(--color-primary)"
                        />
                        {level === "entry" ? "Entry Level" : level}
                    </label>
                ))}
            </div>
        </div>

        <div>
            <p className="text-label-md text-(--color-on-surface-variant) mb-2">
                Budget Range ($)
            </p>
            <div className="flex items-center gap-2">
                <input
                    type="number"
                    placeholder="Min"
                    className="w-full bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-(--radius-md) px-3 py-2.5 text-body-sm text-(--color-on-surface) placeholder:text-(--color-on-surface-variant)"
                />
                <input
                    type="number"
                    placeholder="Max"
                    className="w-full bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-(--radius-md) px-3 py-2.5 text-body-sm text-(--color-on-surface) placeholder:text-(--color-on-surface-variant)"
                />
            </div>
        </div>

        <div>
            <p className="text-label-md text-(--color-on-surface-variant) mb-2">
                Client History
            </p>
            <label className="flex items-center gap-2.5 text-body-md text-(--color-on-surface) cursor-pointer">
                <input
                    type="checkbox"
                    checked={paymentVerified}
                    onChange={(e) => setPaymentVerified(e.target.checked)}
                    className="h-4 w-4 rounded accent-(--color-primary)"
                />
                Payment Verified
            </label>
        </div>

        <button
            type="button"
            className="bg-(--color-primary) text-(--color-on-primary) text-label-md rounded-(--radius-md) py-3 mt-1 hover:opacity-90 transition-opacity"
        >
            Apply Filters
        </button>

        <div className="bg-(--color-inverse-surface) text-(--color-inverse-on-surface) rounded-(--radius-lg) p-5">
            <h3 className="text-headline-md !text-[16px] !leading-6">
                Weekly Pulse
            </h3>
            <p className="text-body-sm mt-2 opacity-80">
                Tech jobs increased by 14% this week. Refresh for more.
            </p>
        </div>
    </>
}