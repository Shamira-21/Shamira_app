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

      <section
        id="contact"
        className="min-h-[250px] py-16 bg-gray-800 text-white mt-16 mb-16 w-full max-w-screen-lg mx-auto px-4 sm:px-6 md:px-12 rounded-2xl flex flex-col items-center shadow-black "
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h2>
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
        </section>

        


    );
  }
  
  export default Services;