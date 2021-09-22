function Footer() {
    return (
        <footer>
            <div className="flex">
                <div className="h-48 sm:h-72 w-screen bg-gray-400">
                    <div className="flex bg-cover bg-face-img rounded-full my-12 mx-4 lg:mx-96 w-24 sm:w-36 h-1/2">
                    <div className="flex flex-col h-1/2 w-1/4 mx-72 -my-4">
                        <p className="flex text-xl text-black font-semibold">Navigation</p>
                        <p className="flex text-xl text-blue-500 font-semibold my-2">-></p>
                        <p className="flex text-xl text-blue-500 font-semibold my-2">-></p> 
                    </div>
                    <div className="flex flex-col my-3 -mx-72 cursor-pointer">
                        <a href="#" className="flex text-lg text-black my-2">Home</a>
                        <a href="#" className="flex text-lg text-black my-2">GitHub</a>
                        </div>
                        <div className="flex mx-48">

                    </div>

                    </div>
                </div>    
            </div>
        </footer>

    )
}

export default Footer;
