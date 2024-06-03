import { MoviesSlide } from "./_components/movies-slide";

export default function Home() {
    return (
        <div className="h-[calc(100vh_-_80px)] bg-contain bg-no-repeat bg-[url(/img/darth-cine-bg.png)] flex flex-col justify-end">
            <div className="text-white">
                <MoviesSlide movies={[]} />
            </div>
        </div>
    )
}