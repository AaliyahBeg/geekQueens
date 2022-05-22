import React from 'react'

const CardsSm = (prop) => {
  return (
    <>
        <div className="my-10">
                <div className={prop.p2_class}>    
                    <img 
                    src={prop.src} 
                    alt="animal" 
                    class={`centered py-10 object-cover object-center rounded-lg ${prop.classes}`}/>    
                </div>              
                <div class="relative px-4 -mt-16  ">
                    <div class="bg-white p-6 rounded-lg w-4/6 centered">
                        <div class="flex items-baseline mb-3">
                            <span 
                            class="bg-teal-200 text-teal-800 text-lg px-2 inline-block rounded-full 
                            uppercase font-semibold tracking-wide">
                                {prop.tag}
                            </span>
                            {/* <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            Endangered  &bull; Wildlife
                            </div>   */}
                        </div>
                    
                        <h4 class="mt-1 text-2xl font-semibold uppercase leading-tight truncate whitespace-pre flex justify-evenly">
                            {prop.title}
                        </h4>

                        <div class="mt-1 text-xl font-semibold leading-tight truncate whitespace-pre flex justify-evenly">
                            {prop.text}
                        </div>

                        <div class="mt-4">
                            <button
                            className="centered leafy text-sandy rounded-lg p-3 font-semibold shadow-lg 
                            hover:bg-sandy hover:text-[#033f03]">
                                Comment
                            </button>
                        </div>  
                    </div>
                </div>
                    
            </div>
    </>
  )
}

export default CardsSm
