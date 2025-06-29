import Link from "next/link";

export default function Navbar() {
   return(
      <nav className="bg-white shadow-md py-4 px-7">
         <div className="container mx-auto flex justify-between">
            <Link href="/" className="font-bold text-xl text-gray-500">BlogKu</Link>
            <div className="space-x-4">
               <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
               <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
               <Link href="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
            </div>
         </div>
      </nav>
   )
}