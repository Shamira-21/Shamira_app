import {Outlet } from "react-router";


function MainLayout() {
    return (
        <div className="h-screen">
        <header className="py-5 bg-gray-800 text-white">
            <div className="flex justify-between container mx-auto text-center">
                <h2 className="ml-3 text-3xl font-bold">Portfolio</h2>
                <ul className="flex flex-wrap items-center justify-center md:justify-center space-x-6 text-white text-lg">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/reviews">Reviews</a>
                    </li>
                </ul>
            </div>
        </header>

        <main>
            <Outlet />
        </main>




      <footer className="bg-stone-800 text-white pt-1 mt-1 flex flex-col justify-between w-full">
        <div className="container mx-auto px-2 flex flex-col md:flex-row justify-between items-center flex-grow">
          <div className="mb-1 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Miarash Aisha</h3>
            <p className="text-gray-300">Your go-to portfolio for web development and design.</p>
          </div>
  
          <div className="mb-3 md:mb-0 flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              Twitter
            </a>
          </div>
  
          
        </div>

        <div className="text-center mt-auto py-3">
           <p className="text-gray-400 text-sm">&copy; 2024 Miarash Aisha. All rights reserved.</p>
        </div>

  
        </footer>
        </div>
    );
}

export default MainLayout;
