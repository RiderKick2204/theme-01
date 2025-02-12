export default function VisaServices() {
    const services = [
        {
            type: "Tourist Visa",
            processing: "5-7 working days",
            price: "$150",
            description: "Standard tourist visa processing for most countries"
        },
        {
            type: "Business Visa",
            processing: "3-5 working days",
            price: "$250",
            description: "Expedited business visa processing with additional documentation support"
        },
        {
            type: "Student Visa",
            processing: "10-15 working days",
            price: "$200",
            description: "Complete student visa processing including documentation guidance"
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Visa Services</h1>
                <div className="space-y-8">
                    {services.map((service) => (
                        <div key={service.type} className="border rounded-lg p-6 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">{service.type}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold">Processing Time:</p>
                                    <p className="text-gray-600">{service.processing}</p>
                                    <p className="font-semibold mt-2">Price:</p>
                                    <p className="text-blue-500 font-bold">{service.price}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">Description:</p>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </div>
                            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
