import Link from "next/link"
import pak from "../images/pakwheels.svg"
import Image from "next/image"
import logo2 from "../images/logo2.jpg"


export default function Navbar(){
    return(
        <div>
            <nav className="bg-black">
                <div className=" text-white w-[88%] m-auto flex justify-between mb-4 pb-4 border-b-2 border-slate-400">
                    <div className="flex">
                        <img className="mr-1" src="/phone.svg" alt="phone" />
                        <span>Download App via SMS</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-red-600">اردو</span>
                        <span className="before:content-['|'] before:mr-3 text-white">Signup</span>
                        <span className="before:content-['|'] before:mr-3 text-white">Signin</span>
                    </div>
                </div>
                <div className="flex items-center justify-evenly pt-2 pb-8 px-4">
                <div>
                    <img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" height={150} width={150} alt="pak" />
                </div>
                <div className="text-white">
                    <ul className="flex gap-8">
                        <li className="flex  hover:bg-green-300 rounded-md"><Link className=" p-1 hover:text-black" href="">Used Cars</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">New Cars</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">Bikes</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">Autostore</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">Videos</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">Forums</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">Blog</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                        <li className="flex hover:bg-green-300 rounded-md"><Link className=" p-1  hover:text-black" href="">More</Link>
                        <img src="/dropdown.svg" alt="dropdown" />
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-red-400 flex hover:bg-red-600 text-white py-2 px-4 rounded-sm text-[14px] font-bold">Post An Add <img className="ml-2" src="/dropdown.svg" alt="dropdown" /></button>
                </div>
                </div>
            </nav>
        </div>
    )
}