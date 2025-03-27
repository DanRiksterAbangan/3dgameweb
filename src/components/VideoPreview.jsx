import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

export const VideoPreview = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null); // Reference for the container section

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full overflow-hidden cursor-pointer"
      style={{
        transformStyle: "preserve-3d", // preserve 3D transformations
        transition: "transform 0.3s ease-out", // add smooth transition
      }}
    >
      <div
        className={`transition-all duration-300 ${isHovering ? "scale-110 opacity-100" : "scale-100 opacity-50"}`}
        style={{
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
