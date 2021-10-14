function Thumbnail() {
    return (
        <div className="flex flex-wrap bg-cover h-screen bg-code-img">
            <div className="flex flex-grow flex-wrap w-screen">
                <div className="flex flex-col object-center w-5/6 my-12 mx-12 bg-gray-400 h-3/4 sm:mx-auto md:w-1/2 ">
                    <div className="flex w-full h-1/5 lg:h-48 bg-blue-500">       
                        <div className="flex bg-cover bg-face-img rounded-full mx-3 w-2/6 sm:w-1/6 h-full"></div>
                        <div className="flex flex-row my-auto font-bold">
                        <p className="text-gray-100 text-3xl md:text-5xl text mx-6">Adam Thomas</p>
                    </div>
                    </div>
                    <div className="flex flex-col h-full w-full">
                        <li className="text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-3xl mx-auto my-2 sm:my-10 list-none">About Me</li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg mx-auto px-10 leading-1 sm:leading-3 lg:leading-7">Hello, my name is Adam Thomas, a Junior at Mississippi State University majoring in Software Engineering with an expected graduation date of May 2023. I am a full stack developer with the knowledge of many languages: </li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg px-10 leading-1 sm:leading-3 lg:leading-7">* HTML(front end)  </li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg px-10 leading-1 sm:leading-3 lg:leading-7">* CSS(front end)  </li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg px-10 leading-1 sm:leading-3 lg:leading-7">* Javascript(front end/back end)  </li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg px-10 leading-1 sm:leading-3 lg:leading-7">* Python(back end)  </li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg px-10 leading-1 sm:leading-3 lg:leading-7">* C++(back end)  </li>
                        <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg mx-auto px-10 leading-1 sm:leading-3 lg:leading-7">I also have some experience with databases such as SQL and MySQL. I am currently working on websites and applications using ReactJS with NextJS,TailwindCSS,Redux and FireBase frameworks.</li>
                         <li className="flex flex-wrap text-gray-800 text- text-xs sm:text-sm md:text-sm lg:text-lg mx-auto px-10 leading-1 sm:leading-3 lg:leading-7">In my free time, I play sports and hang out with friends.</li>
                    
                        
                        <p className="flex flex-grow flex-wrap text-gray-800 text-xs sm:text-sm md:text-md lg:text-xl mx-auto md:p-1 leading-1 lg:leading-2">
                        Phone: 256-763-6154
                        </p>
                        <p className="flex flex-grow flex-wrap text-gray-800 text-xs sm:text-sm md:text-md lg:text-xl mx-auto md:p-1 leading-1">
                        Email:dearadamthomas@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;
