import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        // Create the animation timeline with ScrollTrigger for both zoom and mask animation
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip', // Element to trigger the animation
                start: 'top center', // Trigger when the top of the element reaches the center of the viewport
                end: '+=800 center', // End animation after 800px scroll
                scrub: 1, // Set scrub to 1 for smoother animation
                pin: true, // Pin the element while scrolling
                pinSpacing: true, // Allow for pin spacing (leave space for the element while it's pinned)
                ease: 'power2.out', // Easing function for smooth transition
            }
        });

        // Zoom in the image (scale up)
        clipAnimation
            .to('.mask-clip-path', {
                width: '100vw', // Animation effect (expanding width)
                height: '100vh', // Animation effect (expanding height)
                borderRadius: 0, // Animation effect (border-radius set to 0)
                ease: 'power2.out', // Easing function for smooth transition
            })
            .to('.about-image', {
                scale: 1.2, // Zoom in (scale up the image)
                ease: 'power2.out', // Easing function for smooth transition
            }, 0); // Apply this animation at the same time as the mask animation

        // Cleanup ScrollTrigger when the component unmounts
        return () => {
            // Proper way to kill all scroll triggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="special-font text-sm uppercase md:text-[10px]">
                    Welcome to
                </h2>

                <AnimatedTitle title="Ex<b>o</b>dus <b>R</b>ising" containerClass="special-font hero-heading z-20 mt-5 !text-black text-center" />

                <div className="about-subtext">
                    <p>
                        The Latest Server in 2025.
                    </p>

                    <p className="justify-center text-center">
                        Play Now.
                    </p>
                </div>
            </div>

            <div className="h-[100vh] w-screen relative" id="clip">
                <div className="mask-clip-path about-image">
                    <img src="img/IMAGESCANUSED/bg-visual.jpg" alt="Rohan Wallpaper" className="absolute left-0 top-0 size-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;