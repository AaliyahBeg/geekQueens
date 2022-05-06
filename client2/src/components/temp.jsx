import React from 'react'

import ele from '../assets/elephant.png'
import monkey from '../assets/monkey.png'
const temp = (prop) => {
  return (
    <div className={prop.p_class}>
        <div class={`wrapper antialiased text-gray-900`}>
            <div>
                <div className={prop.p2_class}>    
                    <img 
                    src={prop.src} 
                    alt="animal" 
                    class={`centered py-10 object-cover object-center ${prop.classes}`}/>    
                </div>              
                <div class="relative px-4 -mt-16  ">
                    <div class="bg-white p-6 rounded-lg">
                        <div class="flex items-baseline mb-3">
                            <span 
                            class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full 
                            uppercase font-semibold tracking-wide">
                                {prop.tag}
                            </span>
                            {/* <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            Endangered  &bull; Wildlife
                            </div>   */}
                        </div>
                    
                        <h4 class="mt-1 text-lg font-semibold uppercase leading-tight truncate whitespace-pre">
                            {prop.title}
                        </h4>

                        <div class="mt-1 text-xs font-semibold leading-tight truncate whitespace-pre">
                            {prop.text}
                        </div>

                        <div class="mt-4">
                            <button
                            className="leafy text-sandy rounded-lg p-3 font-semibold shadow-lg 
                            hover:bg-sandy hover:text-[#033f03]">
                                Comment
                            </button>
                        </div>  
                    </div>
                </div>
                    
            </div>
        </div>
        
    </div>
  )
}

export default temp;