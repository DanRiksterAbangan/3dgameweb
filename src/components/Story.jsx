import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const playNow = [
    { href: 'https://exodus-rising.com/login' },
];

const Story = () => {
    const frameRef = useRef('null');

    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut',
        })
    }

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
        })
    }

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className="font-general text-sm uppercase md:text-[10px]">
                The Multiversal Rohan World
            </p>

            <div className="relative size-full">
                <AnimatedTitle 
                title="Start Your <br />Journey Here"
                sectionId="#story"
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-center justify-center"
                />

                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img src="/img/IMAGESCANUSED/293305189_365289825772651_1105030258159310653_n.jpg"
                                 alt="Rohan Wallpaper"
                                 className="object-contain"
                                 ref={frameRef}
                                 onMouseLeave={handleMouseLeave}
                                 onMouseUp={handleMouseLeave}
                                 onMouseEnter={handleMouseLeave}
                                 onMouseMove={handleMouseMove}
                            />
                        </div>
                    </div>

                    <RoundedCorners />
                </div>
            </div>

            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start z-10">
                        Where realms converge, lies Exodus Rising and the boundless pillar. Discover its secrets
                        and shape your fate amidst infinite opportunities.
                    </p>

                    <a href={playNow[0].href} target='_blank' rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-blue-600 text-sm">
                        <Button id="playNow-button" title="Play Now" containerClass="mt-5" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story