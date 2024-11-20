export default function Hero(){
    return(
        <div>
            <div className="borde-2 w-[70vw] m-auto mt-10">
                <fieldset className="border-2">
                    <legend className="text-2xl text-center my-20">
                        Sell Your Car on PakWheels and Get the Best Price
                </legend>
                <div className="flex justify-around pb-10 px-4">
                    <div>
                        <h2 className="text-[20px] mb-4 text-blue-800">Post Your Ad on PakWheels</h2>
                        <ul>
                            <div className="flex text-xs sm:text-sm md:text-base">
                            <img className="mr-2" src="/tick.svg" alt="" />
                            <li className="">Post your Add for Free in 3 Easy Steps</li>
                            </div>
                            <div className="flex text-xs sm:text-sm md:text-base">
                            <img className="mr-2" src="/tick.svg" alt="" />
                            <li className="">Get Genuine offers from Verified Buyers</li>
                            </div>
                            <div className="flex text-xs sm:text-sm md:text-base">
                            <img className="mr-2" src="/tick.svg" alt="" />
                            <li className="">Get the Best Price for Your Car</li>
                            </div>
                        </ul>
                        <button className="bg-red-400 w-40 hover:bg-red-600 text-white py-3 px-8 rounded-lg text-[11px] sm:text-sm md:text-base sm:px-2 font-bold mt-6 m-4">Post An Add</button>
                    </div>
                    <div className="flex items-center text-xl sm:text-2xl text-blue-500 font-bold">
                        <p>OR</p>
                    </div>
                    <div>
                        <h2 className="text-[20px] mb-4 text-blue-800">Try Pak Wheels Sell It For Me</h2>
                        <ul>
                            <div className="flex text-xs sm:text-sm md:text-base">
                            <img className="mr-2" src="/tick.svg" alt="" />
                            <li className="">Dedicated Sales Expert to Sell your Car</li>
                            </div>
                            <div className="flex text-xs sm:text-sm md:text-base">
                            <img className="mr-2" src="/tick.svg" alt="" />
                            <li className="">We Bargain for you and share best offer</li>
                            </div>
                            <div className="flex text-xs sm:text-sm md:text-base">
                            <img className="mr-2" src="/tick.svg" alt="" />
                            <li className="">We ensure safe & Secure Transaction</li>
                            </div>
                        </ul>
                        <button className="bg-blue-400 w-40 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-[11px] sm:text-sm sm:px-2 md:text-base font-bold mt-6 m-4">Register Your Car</button>
                    </div>
                </div>
                </fieldset>
            </div>

        </div>
    )
}