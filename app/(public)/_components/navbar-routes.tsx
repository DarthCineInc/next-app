import { NavBarItem } from "./navbar-item"

const publicRoutes = [
    {
        label: "Cartaz",
        href: "/movies"
    },
    {
        label: "Em Breve",
        href: "/#"
    },
    {
        label: "Cinemas",
        href: "/#"
    },
    {
        label: "Contato",
        href: "/#"
    }
]

export function NavBarRoutes() {
    return (
        <div className="flex gap-x-6 ml-auto mr-10">
            {publicRoutes.map(({label, href}, index)=><NavBarItem key={index} label={label} href={href} />)}
        </div>
    )
}