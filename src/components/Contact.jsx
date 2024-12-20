function Contact() {
    return (
        <section id="contact" className="min-h-[250px] py-16 bg-gray-800 text-white mt-16 mb-5 w-[1000px] rounded-sm">
            <div className="container mx-auto text-center px-6 md:px-12">
                <h2 className="text-xl sm:text-3xl font-bold mb-4">Contact Me</h2>
                <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
                    Feel free to reach out if you have any questions or if you’d like to work together!
                </p>
                <a 
                    href="mailto:miarash.aisha@example.com" 
                    className="text-white bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-full text-l font-semibold shadow-lg transition duration-300"
                >
                    Send an Email
                </a>
            </div>
        </section>
    );
}

export default Contact;
