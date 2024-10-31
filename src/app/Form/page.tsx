import Link from "next/link";

const Form = () => {
    return(
        <div>
            <h1 className="text-4xl font-bold text-center mt-20">Enter Your Details</h1>
            <form className="flex justify-center items-center m-10 flex-col py-14">
                <input className="border border-slate-900 w-96 h-10 rounded-md p-2 m-4" type="text" placeholder="Enter Your Name" required/>
                <input className="border border-slate-900 w-96 h-10 rounded-md p-2 m-4" type="email" placeholder="Enter Your Email" required/>
                <input className="border border-slate-900 w-96 h-10 rounded-md p-2 m-4" type="number" placeholder="Card No" required/>
                <input className="border border-slate-900 w-96 h-10 rounded-md p-2 m-4" type="text" placeholder="Address" required/>
                <Link href="../Thank-you">
                <button className="border bg-blue-500 hover:bg-green-400 rounded-md px-6 py-4 m-6 text-white">Place Your Order</button>
                </Link>
            </form>
        </div>
    )
}

export default Form;