"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

export function MoviesSlide({
    movies
}: {
    movies: {
        image: string
    }[]
}) {

      return (
        <Carousel plugins={[Autoplay({delay: 4000})]} className="w-full">
          <CarouselContent className="">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="p-0 flex-0 basis-auto">
                <div>
                  <div className="h-[23vh] w-[16vh] bg-[url(/img/mock-luan.png)] bg-center bg-cover">

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )    
}