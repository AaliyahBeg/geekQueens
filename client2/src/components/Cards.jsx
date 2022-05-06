import React from 'react'
import ele from '../assets/elephant2.png'

import monkey from '../assets/monkey2.png'
import SingleCard from './temp'


const Cards = () => {
    const images = [
        {
            name: ele,
            title: "MAJESTIC ELEPHANTS",
            img_classes: "w-5/6 h-5/6",
            p_class: "max-w-min",
        },
        {
            name: monkey,
            title: "MISCHEVIOUS MONKEYS",
            img_classes: "w-3/4 h-3/4",
            p_class: "max-w-min",
        },
        {
            name: "https://i.pinimg.com/originals/cb/c5/2f/cbc52fbb808b0774e7e83d52d53da0e1.png",
            title: "CUTE KOALAS",
            img_classes: "w-3/4 h-3/4",
            p_class: "max-w-min",
        },
        
    ];
  return (
    <div>
        <div className="flex justify-items-center gap-6 m-6">
            {images.map((image) => (
                <div className="">
                    <SingleCard 
                    src={image.name} 
                    classes={image.img_classes} 
                    title={image.title}
                    p_class={image.p_class}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards