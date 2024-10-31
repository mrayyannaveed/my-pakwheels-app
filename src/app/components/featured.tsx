// import Image from "next/image"
import Link from "next/link"
// import corolla from "../images/cars/corolla.jpg"
// import alto from "../images/cars/alto.jpg"
// import city from "../images/cars/city.jpg"
// import civic from "../images/cars/civic.jpg"

export default function Featured(){
    return(
        <div className="bg-slate-200">
            <div className="w-[70vw] mt-20 mb-10 m-auto pb-10 ">
                <h1 className="text-[20px] mb-4 text-blue-800">Featured New Cars</h1>
                <div>
                    <ul className="flex gap-8 my-4">
                        <li className="hover:border-b-4 border-blue-500 pb-4 cursor-pointer">Popular</li>
                        <li className="hover:border-b-4 border-blue-500 pb-4 cursor-pointer">Upcoming</li>
                        <li className="hover:border-b-4 border-blue-500 pb-4 cursor-pointer">Newly Launched</li>
                    </ul>
                </div>
                <div className="flex justify-between">
                    <Link href="../Toyota-Corolla">
                    <div className="w-52 h-64 hover:bg-slate-300 border-2 bg-white">
                        <img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="corolla" />
                        <h3 className="text-[18px] text-center text-blue-800">Toyota Corolla</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR59.7 - 75.5lacs</h3>
                    </div>
                    </Link>
                    <Link href="../Suzuki-Alto">
                    <div className="w-52 h-64 hover:bg-slate-300 border-2 bg-white">
                        <img src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100" alt="alto" />
                        <h3 className="text-[18px] text-center text-blue-800">Suzuki Alto</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR23.7 - 30.2lacs</h3>
                    </div>
                    </Link>
                    <Link href="../Honda-City">
                    <div className="w-52 h-64 hover:bg-slate-300 border-2 bg-white">
                        <img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945" alt="city" />
                        <h3 className="text-[18px] text-center text-blue-800">Honda City</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR48.5 - 58.5lacs</h3>
                    </div>
                    </Link>
                    <Link href="../Honda-Civic">
                    <div className="w-52 h-64 hover:bg-slate-300 border-2 bg-white">      
                        <img src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254" alt="civic" />
                        <h3 className="text-[18px] text-center text-blue-800">Honda Civic</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR59.6 - 99.0lacs</h3>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}