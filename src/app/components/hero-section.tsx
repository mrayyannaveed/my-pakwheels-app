export default function Hero(){
    return(
        <div>
            <div className="border-2 w-[70vw] m-auto mt-10">
                <h1 className="text-2xl text-center m-20">Sell Your Car on PakWheels and Get the Best Price</h1>
                <div className="flex justify-around pb-10 px-4">
                    <div>
                        <h2 className="text-[20px] mb-4 text-blue-800">Post Your Ad on PakWheels</h2>
                        <ul>
                            <li className="list-disc">Post your Add for Free in 3 Easy Steps</li>
                            <li className="list-disc">Get Genuine offers from Verified Buyers</li>
                            <li className="list-disc">Get the Best Price for Your Car</li>
                        </ul>
                        <button className="bg-red-400 w-48 hover:bg-red-600 text-white py-3 px-8 rounded-lg text-[14px] font-bold mt-6 m-4">Post An Add</button>
                    </div>
                    <div className="flex items-center text-xl text-blue-500 font-bold">
                        <p>OR</p>
                    </div>
                    <div>
                        <h2 className="text-[20px] mb-4 text-blue-800">Try Pak Wheels Sell It For Me</h2>
                        <ul>
                            <li className="list-disc">Dedicated Sales Expert to Sell your Car</li>
                            <li className="list-disc">We Bargain for you and share the best offer</li>
                            <li className="list-disc">We ensure safe & Secure Transaction</li>
                        </ul>
                        <button className="bg-blue-400 w-48 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-[14px] font-bold mt-6 m-4">Register Your Car</button>
                    </div>
                </div>
            </div>

        </div>
    )
}