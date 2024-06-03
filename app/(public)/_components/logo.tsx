import Image from "next/image";
import logo from "@/public/img/darth-cine-logo.png";

export function Logo() {
    return (
        <Image
            height={55}
            width={200}
            priority={true}
            alt="logo"
            src={logo}
        />
    )
}