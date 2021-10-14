import Link from 'next/link'
function Footer() {
    const handleClick = () => {
        window.open("https://github.com/amotiv");
    }
    return (
        <footer>
            <div className="flex">
                <div className="h-auto my-auto sm:h-full w-screen bg-gray-400">
                    <div className="flex flex-grow bg-cover bg-face-img rounded-full my-12 mx-4 lg:mx-96 w-24 sm:w-24 h-1/2">
                    <div className="flex flex-col h-1/2 w-1/4 mx-40 sm:mx-72 -my-4 text-black text-sm sm:text-lg leading-10">
                        <p className="flex text-lg sm:text-xl text-black font-semibold">Navigation</p>
                        <div className="flex flex-col text-lg sm:text-xl text-black">
                        <Link href="/">Home </Link>
                        <button onClick={handleClick}>Github</button>
                        </div>
                    </div>
                    <div className="flex flex-col my-4 -mx-72 cursor-pointer text-black text-xl leading-10">
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
