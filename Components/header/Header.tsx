import Link from "next/link"


function Header() {
  return (
    <header className="flex justify-between p-5 py-10 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
            <h1 className="text-4xl font-bold font-mono">M.Merola</h1>
                
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5 ">
                <h3 className="cursor-pinter">About</h3>
                <h3 className="cursor-pinter">Contact</h3>
                <h3 className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">Follow</h3>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-red-600">
            <h3 className="cursor-pointer">Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full border-red-600 cursor-pointer"> Get Started</h3>
        </div>
    </header>
  )
}

export default Header