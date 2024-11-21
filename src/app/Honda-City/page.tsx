import Link from "next/link"

export default function HondaCity(){
    return(
        <div>
            <div className="w-[65%] m-auto">
            <h1 className="underline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            <div className="flex flex-col items-center">
            <img className="py-10" src="/City.jpg" height={350} width={350} alt="City" />
            <p className="text-center text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore necessitatibus voluptates rerum odio, placeat quasi unde, distinctio modi ipsam eaque eos sint ab rem quia sed quas excepturi. Dolore aliquam enim omnis atque veritatis, maiores adipisci dolores voluptas dolorem quae voluptatibus, laborum, doloribus quasi explicabo obcaecati beatae. Illo rem culpa dolor, ut mollitia eveniet maxime quam dignissimos reprehenderit. Eum explicabo error expedita obcaecati itaque libero dignissimos harum, inventore tempora iure nostrum qui? Nihil ex earum nemo non omnis! Eum, magni illo, corporis minus ratione id natus molestias ea inventore vitae distinctio doloremque quasi quae fugit commodi velit nemo doloribus.</p>
            </div>
            <h1 className="text-green-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center my-12 font-bold">PKR 58,00,000</h1>
            <div className="flex justify-center">
            <Link href="../Form">
            <button className="bg-blue-600 text-white p-4 text-sm sm:p-5 sm:text-base md:p-6 md:text-lg lg:text-xl xl:text-2xl rounded-md">Make Payment</button>
            </Link>
            </div>
            </div>
        </div>
    )
}