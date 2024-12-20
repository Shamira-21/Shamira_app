import { useState, useEffect } from "react";

export default function Navbar() {
  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Services', link: '#services' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  // State to track if the user is scrolling down
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setScrollingDown(true); // Scrolling down
      } else {
        setScrollingDown(false); // Scrolling up
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 bg-gray-800 bg-opacity-80 shadow-lg transition-transform duration-300 ease-in-out
        ${scrollingDown && window.innerWidth >= 1024 ? "-translate-y-full" : ""} 
        ${window.innerWidth < 1024 ? "translate-y-0" : ""}`}  // Hide navbar on scroll down for large screens (md+), always visible on small screens
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-3xl font-bold">Portfolio</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center md:justify-center space-x-6 text-white text-lg">
          {NavbarLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              {e.name}
            </a>
          ))}
        </nav>

        <div className="flex justify-center md:justify-start mt-4 md:mt-0">
          <button
            type="button"
            className="bg-white text-gray-800 hover:bg-blue-500 hover:text-white font-semibold rounded-full text-sm px-6 py-2 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
