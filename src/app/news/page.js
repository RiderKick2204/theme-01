import Image from "next/image";
import { getAllNews } from "@/data/news";

export default function NewsPage() {
    const news = getAllNews();

    return (
        <div className="min-h-screen py-20 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Travel News</h1>
            <div className="max-w-4xl mx-auto space-y-8">
                {news.map((article) => (
                    <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 768px"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-blue-500 font-semibold">{article.category}</span>
                                <time className="text-gray-500">{new Date(article.date).toLocaleDateString()}</time>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                            <p className="text-gray-600 mb-4">{article.summary}</p>
                            <p className="text-gray-700">{article.content}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
