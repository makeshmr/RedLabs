import { useEffect } from "react"; //4.2k (gzipped:1.8k)

export const Navbar = ({menuOpen,setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""

    },[menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="className=relative flex justify-center items-center h-16">
                    <a 
                        href="#home" 
                        className="absolute left-1/10 -translate-x-1/2 font-mono text-xl font-bold text-white"
                    >
                    Red<span className="text-blue-500">.labs</span>
                </a>
                <div className="absolute right-1/5 w-10 h-10 flex items-center justify-center text-2xl text-white cursor-pointer z-50 md:hidden" 
                onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>

                <div className="hidden md:flex  items-center space-x-8">
                    <a 
                        href="#home" 
                        className="text-gray-300 hover:text-white transition-colors"
                    >
    
                        Home
                    </a>
                     <a 
                        href="#about" 
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        
                        About
                    </a>
                     <a 
                        href="#projects" 
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        
                        Projects
                    </a>
                     <a 
                        href="#contact" 
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        
                        Contact
                    </a>
                    <a 
                        href="#certifications" 
                        className="text-gray-300 hover:text-white transition-colors">
                        
                        Certifications
                    </a>

                                        
                </div>
            </div>
        </div>
    </nav>
    );
};
