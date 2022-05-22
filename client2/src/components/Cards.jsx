import React from 'react'
import sdg from '../assets/SDG-15.png'
import globe from '../assets/globe.png'
import SingleCard from './temp'


const Cards = () => {
    const images = [
{
name: sdg,
title: "Life on Land",
img_classes: "lg:w-1/2 lg:h-1/2",
p_class: "lg:max-w-lg lg:min-h-lg",
p2_class: "rounded-lg",
text: 
`The United Nations aims to achieve
the 17 Sustainable Development Goals set 
by it. We, at Wild Canopy strive to contribute 
towards achieving the SDG-15 Life on Land`,
tag: "SDG-15",
},
{
name: globe,
title: `Mapping Worst Affected 
Areas`,
img_classes: "lg:w-1/2 lg:h-1/2",
p_class: "lg:max-w-lg lg:min-h-lg",
p2_class: "",
text: 
`Areas worst affected by deforestation
and habitat loss are mapped using satellite
imaging and machine learning algorithms
to issue timely alerts to concerned 
authorities.`,
tag: "Satellite Mapping",
},
{
name: "https://i.pinimg.com/originals/cb/c5/2f/cbc52fbb808b0774e7e83d52d53da0e1.png",
title: "Your Helping Hands",
img_classes: "w-1/2 h-1/2",
p_class: "lg:max-w-lg lg:min-h-lg centered",
p2_class: "",
text:  
`Any act commited against the rights
of animals can be raised on this
platform in the form of petitions.
Let us all help the innocents raise
their voice.`,
tag: "raise petitions",
},
];

  return (
    <div>
        <div className="hidden lg:flex items-center justify-evenly gap-6 mx-6">
            {images.map((image) => (
                <div className="">
                    <SingleCard 
                    src={image.name} 
                    classes={image.img_classes} 
                    title={image.title}
                    p_class={image.p_class}
                    p2_class={image.p2_class}
                    text={image.text}
                    tag={image.tag}
                    />
                </div>
            ))}
        </div>
        <div className="lg:hidden mx-6">
            {images.map((image) => (
                <div className="">
                    <SingleCard 
                    src={image.name} 
                    classes={image.img_classes} 
                    title={image.title}
                    p_class={image.p_class}
                    p2_class={image.p2_class}
                    text={image.text}
                    tag={image.tag}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards