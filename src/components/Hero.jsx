import React, { useEffect, useRef, useState } from "react";
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const playNow = [
    { href: 'https://exodus-rising.com/login' },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1; 

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if(loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    useGSAP(() => {
        if(hasClicked) {
            gsap.set('#next-video', {visibility: 'visible', opacity: 1});  // Ensure it's visible and fully opaque
    
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            });
    
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }
    }, {dependencies:[currentIndex], revertOnUpdate: true});    

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(20% 0, 20% 48%, 20% 100%, 73% 100%, 73% 83%, 42% 83%, 42% 61%, 68% 61%, 68% 42%, 43% 42%, 43% 17%, 73% 17%, 73% 0)',
            borderRadius: '0 0 40% 10%',
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0)',
            // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    const getVideoSource = (index) => `videos/hero-${index}.mp4`;

    return (
        <div id="home" className="relative h-dvh w-screen overflow-x-hidden">

            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
        <div
            id="video-frame"
            className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
            <div>
            <div className="mask-clip-path absolute z-50 size-64 cursor-pointer 
            overflow-hidden rounded-lg 
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div 
                    onClick={handleMiniVdClick} 
                    className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                    <video 
                        ref={nextVideoRef} 
                        src={getVideoSource(upcomingVideoIndex)}
                        loop
                        muted
                        id="current-video"
                        className="size-64 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>
            </div>

            <video 
                ref={nextVideoRef}
                src={getVideoSource(currentIndex)}
                loop
                muted
                id="next-video"
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 size-64 object-cover object-center opacity-0"
                onLoadedData={handleVideoLoad}
            />

            <video 
                src={getVideoSource(currentIndex === totalVideos - 1 ?  1 : currentIndex)}
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
            />
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
                <a href={playNow[0].href} target='_blank' rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-blue-600 text-2xl">
                    <Button 
                        id="playNow-button" 
                        title="Play Now" 
                        leftIcon={<TiLocationArrow />} 
                        containerClass="!bg-yellow-300 flex-center gap-1"
                    />     
                </a>
                Exodus Rising
            </h1>

            <div className="absolute left-0 top-0 z-10 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="special-font hero-heading text-blue-100">
                        Rohan
                    </h1>

                    <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                        The Latest Server in 2025.
                    </p>
                </div>
            </div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
            <a href={playNow[0].href} target='_blank' rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-blue-600 text-2xl">
                <Button 
                    id="playNow-button" 
                    title="Play Now" 
                    leftIcon={<TiLocationArrow />} 
                    containerClass="!bg-yellow-300 flex-center gap-1"
                />     
            </a>
            Exodus Rising
        </h1>
        

        <div className="absolute left-0 top-0 size-full">
            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-black">
                    Rohan
                </h1>

                <p className="mb-5 max-w-64 font-robert-regular text-black">
                    The Latest Server in 2025.
                </p>
            </div>
        </div>

        </div>
    );
};

export default Hero;