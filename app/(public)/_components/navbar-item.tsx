"use client"

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface NavBarItemProps {
    label: string
    href: string
}

export function NavBarItem({
    label,
    href
}: NavBarItemProps) {
    const pathname = usePathname();
    const router = useRouter();
    
    const isActive = 
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center justify-center gap-x-4 px-4 text-white rounded-lg bg-slate-500/20 min-w-[100px] hover:bg-slate-500/30",
                isActive && "bg-sky-200/20 hover:bg-sky-200/20"
            )}
        >
            <div className="py-3">
                {label}
            </div>
        </button>
    )
}