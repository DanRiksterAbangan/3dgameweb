import React from 'react'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'

const playNow = [
    { href: 'https://exodus-rising.com/login' },
];

const ImageClipBox = ({src, clipClass}) => (
    <div className={clipClass}>
        <img 
            src={src}
        />
    </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                <ImageClipBox 
                    src="img/contact-1.webp"
                    clipClass="contact-clip-path-1"
                />

                <ImageClipBox 
                    src="img/contact-2.webp"
                    clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                />
            </div>

            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                <ImageClipBox 
                    src="img/swordman-partial.webp"
                    clipClass="absolute md:scale-125"
                />

                <ImageClipBox 
                    src="img/swordman.webp"
                    clipClass="sword-man-clip-path md:scale-125"
                />
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="font-general text-[10px] uppercase">
                    Join Exodus Rising
                </p>

                {/* <p className="special-font z-10 mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                    Let's Build the <br/> New Era of <br/> Gaming Together.
                </p> */}

                <AnimatedTitle 
                    title="Where Individuals <br /> Meet Greatness"
                    sectionId="#contact"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-center justify-center"
                />

                <a href={playNow[0].href} target='_blank' rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-blue-600 text-sm">
                    <Button id="playNow-button" title="contact us" containerClass="mt-10 cursor-pointer" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact