
import { NavBarRoutes } from "./navbar-routes";
import { Logo } from "./logo";
import { UserRound } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="
            relative
        ">
            <div className="absolute w-[110%] top-0 z-[-1] shadow-[-10px_0px_35px_130px_rgba(0,0,0,01)]">
            </div>
            <div className="h-[80px] w-full flex justify-between">
                <div className="h-full flex items-center px-2">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="p-3 flex-1 h-full flex items-center ">
                    <NavBarRoutes />
                </div>
                <div className="h-full flex items-center px-8">
                    <div className="cursor-pointer hover:bg-slate-500/20 flex items-center gap-4 p-3 rounded-md">
                        <div className="rounded-full border-[3px] border-slate-500 h-10 w-10 flex items-center justify-center overflow-hidden">
                            <UserRound className="text-slate-500" size={40} />
                        </div>
                        <div className="text-white">
                            Fazer Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}