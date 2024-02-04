import { motion } from "framer-motion";
import { useState } from "react";

import pricingCardsDatas from "./pricingCardsDatas";

const itemWidth = 140; // Adjust width as needed
const totalWidth = pricingCardsDatas.length * (itemWidth * 1.5);
const dragElastic = 0.5;
const dragConstraints = { left: -totalWidth + window.innerWidth, right: 0 };
const transition = { type: "tween", duration: 0.5 };

export default function AboutTeamMotion() {
  const [dragX, setDragX] = useState(0);

  const handleDragEnd = (_, { offset: { x } }) => {
    let newDragX = dragX + x;
    const maxDragX = -totalWidth + window.innerWidth;
    newDragX = newDragX % totalWidth;
    setDragX(Math.min(Math.max(newDragX, maxDragX), 0));
  };

  return (
    <div className="overflow-x-hidden" style={{ width: "60vw" }}>
      <motion.div
        style={{ x: dragX }}
        drag="x"
        dragElastic={dragElastic}
        dragConstraints={dragConstraints}
        transition={transition}
        onDragEnd={handleDragEnd}
        className="flex flex-nowrap"
      >
        {pricingCardsDatas.map(({ name, title, description, src }, index) => (
          <motion.div
            key={index}
            className="mr-4 rounded-2xl overflow-hidden"
            style={{ minWidth: `${itemWidth}px` }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="backdrop-blur-sm bg-gray bg-opacity-10 shadow-md rounded-2xl p-3 flex flex-col items-center gap-3">
              <motion.img
                src={src}
                alt="Avatar"
                className="w-36 h-36 rounded-2xl"
                whileHover={{
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 },
                }}
              />
              <div className="flex flex-col content-center pl-3 pr-3">
                <h3 className="text-color6 text-sm font-semibold">{name}</h3>
                <h3 className="text-xs text-color2 mt-1">{title}</h3>
                <p className="text-xs leading-5 mt-2 text-color7">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
