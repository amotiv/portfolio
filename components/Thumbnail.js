function Thumbnail() {
    return (
        <div className="flex flex-wrap bg-cover h-screen bg-code-img">
            <div className="flex flex-grow flex-wrap w-screen">
                <div className="flex flex-col object-center w-5/6 my-12 mx-12 bg-gray-400 h-4/5 sm:mx-auto md:w-1/2 ">
                    <div className="flex w-full h-1/5 lg:h-48 bg-blue-500">       
                        <div className="flex bg-cover bg-face-img rounded-full mx-3 w-1/6 sm:w-1/6 h-full"></div>
                        <div className="flex flex-row my-auto font-bold">
                        <p className="text-gray-100 text-3xl md:text-5xl text mx-6">Adam Thomas</p>
                    </div>
                    </div>
                    <div className="flex flex-col h-full w-full">
                        <p className="text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-3xl mx-auto my-2 sm:my-10">About Me</p>
                        <p className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-xl mx-auto px-10 leading-2 sm:leading-5 lg:leading-10">Hello, my name is Adam Thomas and I am a junior at Mississippi state with the expected graduation date May 2023. I am a full stack developer with the knowledge of the many languages including HTML,CSS,Javascript for the front end and Python, and C++ for the backend. 
                        I also have some experience with databases such as SQL and MySQL. I am currently working on websites and applications using ReactJS with NextJS,TailwindCSS,Redux and FireBase frameworks. I also have some hobbies including sports and going to hangout with friends in my freetime.
                    
                        </p>
                        <p className="flex flex-grow flex-wrap text-gray-800 text-xs sm:text-sm md:text-md lg:text-xl mx-auto p-1 leading-2 lg:leading-2">
                        Phone: 256-763-6154
                        </p>
                        <p className="flex flex-grow flex-wrap text-gray-800 text-xs sm:text-sm md:text-md lg:text-xl mx-auto p-1 leading-2">
                        Email:dearadamthomas@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;
