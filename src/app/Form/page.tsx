import Link from "next/link";

const Form = () => {
    return(
        <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center mt-20">Enter Your Details</h1>
            <form className="flex justify-center items-center m-10 flex-col py-10">
                <input className="border border-slate-900 w-60 h-10 sm:w-70 sm:h-12 md:w-80 lg:w-96 xl:w-[450px] rounded-md p-2 m-4" type="text" placeholder="Enter Your Name" required/>
                <input className="border border-slate-900 w-60 h-10 sm:w-70 sm:h-12 md:w-80 lg:w-96 xl:w-[450px] rounded-md p-2 m-4" type="email" placeholder="Enter Your Email" required/>
                <input className="border border-slate-900 w-60 h-10 sm:w-70 sm:h-12 md:w-80 lg:w-96 xl:w-[450px] rounded-md p-2 m-4" type="number" placeholder="Card No" required/>
                <input className="border border-slate-900 w-60 h-10 sm:w-70 sm:h-12 md:w-80 lg:w-96 xl:w-[450px] rounded-md p-2 m-4" type="text" placeholder="Address" required/>
                <Link href="../Thank-you">
                <button className="border bg-blue-500 hover:bg-green-400 rounded-md p-4 m-6 sm:p-5 sm:m-8 md:p-6 md:m-10 md:text-base lg:p-8 lg:text-lg xl:text-xl text-white">Place Your Order</button>
                </Link>
            </form>
        </div>
    )
}

export default Form;