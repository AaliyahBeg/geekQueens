import React from 'react'

import ele from '../assets/elephant.png'
import monkey from '../assets/monkey.png'
const temp = (prop) => {
  return (
    <div className={prop.p_class}>
        <div class={`wrapper antialiased text-gray-900`}>
            <div>
                    
                <img 
                src={prop.src} 
                alt="animal" 
                class={`object-cover object-center rounded-lg ${prop.classes}`}/>    
                                
                <div class="relative px-4 -mt-16  ">
                    <div class="bg-white p-6 rounded-lg">
                        <div class="flex items-baseline">
                            <span 
                            class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full 
                            uppercase font-semibold tracking-wide">
                                Fact
                            </span>
                            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            Endangered  &bull; Wildlife
                            </div>  
                        </div>
                    
                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                            {prop.title}
                        </h4>

                        <div class="mt-1 text-sm font-semibold leading-tight truncate">
                            <h1>They're the world's largest land animal.</h1>

                            <h1>You can tell the two species apart by their ears</h1>

                            <h1>Their trunks have mad skills</h1>

                            <h1>Their tusks are actually teeth</h1>

                            <h1>They've got thick skin</h1>

                            <h1>Elephants are constantly eating</h1>

                            <h1>They communicate through vibrations</h1>

                            <h1>Calves can stand within 20 minutes of birth.</h1>
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