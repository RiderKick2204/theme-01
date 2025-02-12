import Image from "next/image";
import { getAllTours } from "@/data/tours";

export default function ToursPage() {
    const tours = getAllTours();

    return (
        <div className="min-h-screen py-20 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">All Tours</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tours.map((tour) => (
                    <div key={tour.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-48">
                            <Image
                                src={tour.image}
                                alt={tour.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{tour.title}</h2>
                            <p className="text-gray-600 mb-2">{tour.destination}</p>
                            <p className="text-blue-500 font-bold mb-2">${tour.price}</p>
                            <p className="text-sm text-gray-500 mb-4">{tour.duration}</p>
                            <p className="text-gray-600 mb-4">{tour.description}</p>
                            <ul className="list-disc list-inside text-sm text-gray-500">
                                {tour.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
