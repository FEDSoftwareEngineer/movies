import React from "react";
import useProgressiveImg from "../Hooks/useProgressive";
export default function Background({ lqImage, image, title, bgClass }) {
  const [src, { blur }] = useProgressiveImg(lqImage, image);
  return (
    <div className={bgClass}>
      <img
        style={{
          filter: blur ? "blur(20px)" : "none",
          transition: blur ? "none" : "0.2s ease-out",
        }}
        src={src}
        alt={title}
      />
    </div>
  );
}
