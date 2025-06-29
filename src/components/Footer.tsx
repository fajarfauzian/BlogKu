export default function Footer() {
   return (
      <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 mt-16">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
               <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-gray-700 font-semibold">BlogKu</span>
               </div>
               
               <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a>
               </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
               <p className="text-sm text-gray-500">
                  &copy; {new Date().getFullYear()} BlogKu. Made with ❤️ for sharing knowledge.
               </p>
            </div>
         </div>
      </footer>
   )
}