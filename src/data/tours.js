export const tours = [
    {
        id: 1,
        title: "European Discovery",
        price: 3499,
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
        destination: "Paris, Rome, Amsterdam",
        description: "Experience the best of Europe's most iconic cities. Visit the Eiffel Tower, Colosseum, and canal districts.",
        highlights: ["Eiffel Tower tour", "Venice gondola ride", "Amsterdam bike tour"],
        isHot: true
    },
    {
        id: 2,
        title: "Asian Adventure",
        price: 2999,
        duration: "12 days",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
        destination: "Tokyo, Bangkok, Singapore",
        description: "Immerse yourself in the vibrant cultures of Asia's most dynamic cities.",
        highlights: ["Tokyo night tour", "Thai cooking class", "Marina Bay visit"],
        isHot: true
    },
    {
        id: 3,
        title: "African Safari",
        price: 4299,
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
        destination: "Kenya, Tanzania, Uganda",
        description: "Witness the majesty of African wildlife in their natural habitat.",
        highlights: ["Serengeti safari", "Masai village visit", "Gorilla trekking"],
        isHot: true
    },
    {
        id: 4,
        title: "Mediterranean Cruise",
        price: 3799,
        duration: "14 days",
        image: "https://images.unsplash.com/photo-1514922664-11407c82df5d",
        destination: "Greece, Italy, Spain",
        description: "Sail through the beautiful Mediterranean Sea visiting historic ports.",
        highlights: ["Santorini sunset", "Roman ruins", "Barcelona food tour"],
        isHot: false
    },
    {
        id: 5,
        title: "Iceland Adventure",
        price: 4899,
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae",
        destination: "Reykjavik, Golden Circle, South Coast",
        description: "Experience the land of fire and ice with stunning waterfalls and northern lights.",
        highlights: ["Northern Lights tour", "Blue Lagoon visit", "Glacier hiking"],
        isHot: true
    },
    {
        id: 6,
        title: "Moroccan Magic",
        price: 2499,
        duration: "9 days",
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae",
        destination: "Marrakech, Sahara Desert, Fes",
        description: "Journey through ancient medinas and sleep under desert stars.",
        highlights: ["Desert camel trek", "Medina exploration", "Atlas Mountains visit"],
        isHot: false
    },
    {
        id: 7,
        title: "Vietnam Heritage",
        price: 2799,
        duration: "11 days",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592",
        destination: "Hanoi, Ha Long Bay, Ho Chi Minh",
        description: "Discover the rich culture and natural beauty of Vietnam.",
        highlights: ["Ha Long Bay cruise", "Cu Chi Tunnels", "Mekong Delta tour"],
        isHot: true
    },
    {
        id: 8,
        title: "Australian Outback",
        price: 5299,
        duration: "13 days",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
        destination: "Sydney, Uluru, Great Barrier Reef",
        description: "Experience the diverse landscapes of the Australian continent.",
        highlights: ["Uluru sunset", "Reef snorkeling", "Sydney Opera House tour"],
        isHot: false
    },
    {
        id: 9,
        title: "Canadian Rockies",
        price: 3899,
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1469053913977-1d2f009670d9",
        destination: "Banff, Jasper, Lake Louise",
        description: "Explore the majestic mountains and pristine lakes of Canada.",
        highlights: ["Lake Louise canoeing", "Glacier walk", "Wildlife spotting"],
        isHot: true
    },
    {
        id: 10,
        title: "Portuguese Charm",
        price: 2999,
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
        destination: "Lisbon, Porto, Algarve",
        description: "Experience the best of Portugal's culture, food, and coastline.",
        highlights: ["Port wine tasting", "Fado music night", "Coastal hiking"],
        isHot: false
    },
    {
        id: 11,
        title: "Thai Island Hopping",
        price: 2599,
        duration: "12 days",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
        destination: "Phuket, Phi Phi, Koh Samui",
        description: "Paradise-hop through Thailand's most beautiful islands.",
        highlights: ["Snorkeling trips", "Beach yoga", "Island parties"],
        isHot: true
    },
    {
        id: 12,
        title: "New Zealand Explorer",
        price: 4799,
        duration: "15 days",
        image: "https://images.unsplash.com/photo-1469521669194-babb45599def",
        destination: "Auckland, Queenstown, Rotorua",
        description: "Adventure through Middle Earth with stunning landscapes.",
        highlights: ["Hobbiton visit", "Bungee jumping", "Maori cultural show"],
        isHot: false
    },
    {
        id: 13,
        title: "Costa Rican Paradise",
        price: 2899,
        duration: "9 days",
        image: "https://images.unsplash.com/photo-1519819286236-0b3c6506e475",
        destination: "San Jose, Arenal, Manuel Antonio",
        description: "Experience the pure life in Costa Rica's rainforests and beaches.",
        highlights: ["Zip-lining", "Volcano hike", "Wildlife watching"],
        isHot: true
    },
    {
        id: 14,
        title: "Indian Golden Triangle",
        price: 2399,
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
        destination: "Delhi, Agra, Jaipur",
        description: "Discover the rich history and culture of Northern India.",
        highlights: ["Taj Mahal sunrise", "Palace visits", "Local market tours"],
        isHot: false
    }
];

export const getHotTours = () => tours.filter(tour => tour.isHot);
export const getAllTours = () => tours;
