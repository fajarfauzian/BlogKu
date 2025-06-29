import Link from "next/link";

export default function Navbar() {
   return(
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-8">
         <nav className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg shadow-black/5">
            <div className="px-6 py-4">
               <div className="flex justify-between items-center">
                  <Link 
                     href="/" 
                     className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                     BlogKu
                  </Link>
                  
                  <div className="hidden md:flex items-center space-x-6">
                     <Link 
                        href="/" 
                        className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 group px-3 py-2 rounded-lg hover:bg-gray-50"
                     >
                        Home
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-4 transition-all duration-300"></span>
                     </Link>
                     <Link 
                        href="/about" 
                        className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 group px-3 py-2 rounded-lg hover:bg-gray-50"
                     >
                        About
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-4 transition-all duration-300"></span>
                     </Link>
                     <Link 
                        href="/blog" 
                        className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 group px-3 py-2 rounded-lg hover:bg-gray-50"
                     >
                        Blog
                        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-4 transition-all duration-300"></span>
                     </Link>
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden">
                     <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   )
}