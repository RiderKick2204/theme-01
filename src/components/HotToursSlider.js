'use client';
import Image from "next/image";
import { useState } from "react";
import { getHotTours } from "@/data/tours";

export default function HotToursSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const tours = getHotTours();

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 3) % tours.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 3 + tours.length) % tours.length);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
                    {tours.map((tour) => (
                        <div key={tour.id} className="w-1/3 flex-shrink-0 px-4">
                            <div className="border rounded-lg overflow-hidden shadow-lg">
                                <div className="relative h-48">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
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
        </div>
    );
}
