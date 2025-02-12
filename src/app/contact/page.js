export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <span className="text-blue-500 mr-2">📍</span> 123 Travel Street, City
                            </p>
                            <p className="flex items-center">
                                <span className="text-blue-500 mr-2">📞</span> +1 234 567 890
                            </p>
                            <p className="flex items-center">
                                <span className="text-blue-500 mr-2">✉️</span> info@travelagency.com
                            </p>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border" required />
                        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border" required />
                        <input type="tel" placeholder="Phone" className="w-full p-3 rounded-lg border" required />
                        <select className="w-full p-3 rounded-lg border">
                            <option>General Inquiry</option>
                            <option>Tour Booking</option>
                            <option>Visa Services</option>
                        </select>
                        <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg border" required></textarea>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
