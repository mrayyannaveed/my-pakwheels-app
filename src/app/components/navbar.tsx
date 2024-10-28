import Link from "next/link"

import Image from "next/image"
import logo2 from "../images/logo2.jpg"

export default function Navbar(){
    return(
        <div>
            <nav className="bg-black flex items-center justify-evenly p-2">
                <div>
                    <Image 
                    src={logo2} alt="pakwheels"
                    height={150} width={150}></Image>
                </div>
                <div className="text-white">
                    <ul className="flex gap-8">
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">Used Cars</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">New Cars</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">Bikes</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">Autostore</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">Videos</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">Forums</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">Blog</Link></li>
                        <li><Link className="rounded-md p-1 hover:bg-green-300 hover:text-black" href="">More</Link></li>
                    </ul>
                </div>
                <div>
                    <button className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded-sm text-[14px] font-bold">Post An Add</button>
                </div>
            </nav>
        </div>
    )
}