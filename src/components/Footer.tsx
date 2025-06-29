export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          {/* Logo and name */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-gray-700 font-semibold ml-3">BlogKu</span>
          </div>

          {/* Copyright text */}
          <p className="text-sm text-gray-500 order-last sm:order-none">
            &copy; {new Date().getFullYear()} BlogKu. Made with ❤️ for sharing knowledge.
          </p>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}