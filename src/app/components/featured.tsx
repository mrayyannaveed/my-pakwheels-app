import Image from "next/image"
import corolla from "../images/cars/corolla.jpg"
import alto from "../images/cars/alto.jpg"
import city from "../images/cars/city.jpg"
import civic from "../images/cars/civic.jpg"

export default function Featured(){
    return(
        <div>
            <div className="w-[70vw] mt-20 mb-10 m-auto">
                <h1 className="text-[20px] mb-4 text-blue-800">Featured New Cars</h1>
                <div className="flex justify-between">
                    <div className="w-52 h-72 border-2">
                        <Image className="my-6 p-2" height={130} src={corolla} alt="Corolla"></Image>
                        <h3 className="text-[18px] text-center text-blue-800">Toyota Corolla</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR59.7 - 75.5lacs</h3>
                    </div>
                    <div className="w-52 h-72 border-2">
                        <Image className="my-6 p-2" height={130} src={alto} alt="Alto"></Image>
                        <h3 className="text-[18px] text-center text-blue-800">Suzuki Alto</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR23.7 - 30.2lacs</h3>
                    </div>
                    <div className="w-52 h-72 border-2">
                        <Image className="my-6 p-2" height={130} src={city} alt="City"></Image>
                        <h3 className="text-[18px] text-center text-blue-800">Honda City</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR48.5 - 58.5lacs</h3>
                    </div>
                    <div className="w-52 h-72 border-2">
                        <Image className="my-6 p-2" height={130} src={civic} alt="Civic"></Image>
                        <h3 className="text-[18px] text-center text-blue-800">Honda Civic</h3>
                        <h3 className="text-[18px] text-center text-green-500">PKR59.6 - 99.0lacs</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}