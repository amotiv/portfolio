import Image from 'next/image';
import Link from 'next/link'
function Header() {
    const handleClick = () => {
        window.open("https://github.com/amotiv");
    }
    return (
        <header>        
            <div className="flex flex-row justify-between item-center text-blue-400">
                <div className="flex flex-grow justify-evenly max-w-2xl m-3">
                    <Link href="/">Home </Link>
                </div>
                <div className="flex w-24 sm:w-12 h-16 rounded-full bg-cover bg-face-img">
                    <a href="#" className="invisible">Face </a>
                </div>
                <div className="flex flex-grow justify-evenly max-w-2xl m-3">
                <button onClick={handleClick}>Github</button>
                </div>
            </div>  
        </header>
    )
}

export default Header;
