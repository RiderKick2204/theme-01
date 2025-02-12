export const news = [
    {
        id: 1,
        title: "New Direct Flights to Bali Announced",
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1558431382-27e303142255",
        summary: "Major airlines announce new direct routes to Bali starting summer 2024.",
        content: "Several major airlines have announced new direct flight routes to Bali, making it easier than ever to reach this tropical paradise. The new routes will begin operations in summer 2024, offering more convenient travel options for tourists.",
        category: "Transportation"
    },
    {
        id: 2,
        title: "Japan Introduces Digital Tourist Pass",
        date: "2024-02-10",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        summary: "New digital pass makes traveling in Japan more convenient for tourists.",
        content: "Japan has launched a new digital tourist pass that combines rail travel, temple admissions, and local experiences in one convenient smartphone app. This initiative aims to make traveling in Japan more accessible and efficient for international visitors.",
        category: "Technology"
    },
    {
        id: 3,
        title: "Venice Implements New Tourist Regulations",
        date: "2024-02-05",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        summary: "Venice introduces day-visitor fees and booking requirements.",
        content: "Starting from summer 2024, Venice will implement new regulations requiring day visitors to book their visits in advance and pay a nominal fee. These measures aim to manage overtourism and preserve the historic city.",
        category: "Regulations"
    },
    {
        id: 4,
        title: "Sustainable Tourism Awards 2024",
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1527824404775-dce343118ebc",
        summary: "Leading eco-friendly destinations and operators recognized.",
        content: "The annual Sustainable Tourism Awards have recognized outstanding achievements in eco-friendly travel initiatives. Winners include destinations and operators who have demonstrated exceptional commitment to environmental preservation and sustainable practices.",
        category: "Environment"
    },
    {
        id: 5,
        title: "New UNESCO World Heritage Sites Announced",
        date: "2024-01-28",
        image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140",
        summary: "Several new locations added to UNESCO World Heritage List.",
        content: "UNESCO has added several new sites to its World Heritage List, including ancient ruins, natural wonders, and cultural landmarks. These additions highlight the importance of preserving our global cultural and natural heritage.",
        category: "Culture"
    }
];

export const getLatestNews = () => news.sort((a, b) => new Date(b.date) - new Date(a.date));
export const getAllNews = () => news;
