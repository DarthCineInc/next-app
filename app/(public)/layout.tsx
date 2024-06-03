import NavBar from "./_components/navbar"

export default function PublicLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full bg-black">
            <div className="h-[80px] fixed inset-y-0 w-full z-50">
                <NavBar />
            </div>
            <main className="pt-[80px] h-full">
                {children}
            </main>
        </div>
    )
}