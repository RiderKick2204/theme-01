'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { getHotTours } from "@/data/tours";

export default function HotToursSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const tours = getHotTours();

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            (prev + slidesPerView) >= tours.length ? 0 : prev + slidesPerView
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            (prev - slidesPerView) < 0 ? Math.max(tours.length - slidesPerView, 0) : prev - slidesPerView
        );
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}>
                    {tours.map((tour) => (
                        <div key={tour.id}
                            className={`flex-shrink-0 px-4 
                                w-full sm:w-1/2 lg:w-1/3`}>
                            <div className="border rounded-lg overflow-hidden shadow-lg">
                                <div className="relative h-48">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                                    <p className="text-gray-600 mb-2">{tour.destination}</p>
                                    <p className="text-blue-500 font-bold">${tour.price}</p>
                                    <p className="text-sm text-gray-500">{tour.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {tours.length > slidesPerView && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                    >
                        →
                    </button>
                </>
            )}
        </div>
    );
}
