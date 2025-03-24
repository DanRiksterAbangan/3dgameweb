import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            });

            titleAnimation.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.02,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Split the title while ensuring HTML tags (like <b>) remain intact
    const splitTitle = title.split(/(<b>.*?<\/b>)/g); // Split keeping <b> tags intact

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {splitTitle.map((segment, index) => {
                // Only apply `animated-word` class to individual words or characters
                const isBold = segment.startsWith('<b>') && segment.endsWith('</b>');
                return (
                    <span
                        key={index}
                        className={`animated-word ${isBold ? 'font-bold' : ''}`}
                        dangerouslySetInnerHTML={{ __html: segment }} // Allow <b> tags to render properly
                    />
                );
            })}
        </div>
    );
};

export default AnimatedTitle;