function Services() {
    return (
        <section id="services" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p>Building modern and responsive websites with clean code and best practices.</p>
                    </div>
                    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p>Creating intuitive and beautiful user interfaces that enhance user experience.</p>
                    </div>
                    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                        <p>Providing expert advice and guidance on web development and technology solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
