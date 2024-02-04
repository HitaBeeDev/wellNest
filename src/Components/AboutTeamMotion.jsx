import { motion } from "framer-motion";
import { useState } from "react";

import teamMembers from "./teamMemberDatas";

const itemHeight = 130;
const totalHeight = teamMembers.length * (itemHeight * 1.5);
const dragElastic = 0.5;
const dragConstraints = { top: -totalHeight + window.innerHeight, bottom: 0 };
const transition = { type: "tween", duration: 0.5 };

export default function AboutTeamMotion() {
  const [dragY, setDragY] = useState(0);

  const handleDragEnd = (_, { offset: { y } }) => {
    let newDragY = dragY + y;
    const maxDragY = -totalHeight + window.innerHeight;
    newDragY = newDragY % totalHeight;
    setDragY(Math.min(Math.max(newDragY, maxDragY), 0));
  };

  return (
    <div
      className="hidden lg:flex flex-col overflow-y-hidden overflow-x-hidden"
      style={{ height: "85vh" }}
    >
      <motion.div
        style={{ y: dragY }}
        drag="y"
        dragElastic={dragElastic}
        dragConstraints={dragConstraints}
        transition={transition}
        onDragEnd={handleDragEnd}
      >
        {teamMembers.map(({ name, title, description, src }, index) => (
          <motion.div
            key={index}
            className="mb-4 rounded-2xl overflow-hidden"
            style={{ minHeight: `${itemHeight}px` }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="backdrop-blur-sm bg-gray bg-opacity-10 shadow-md rounded-2xl p-3 flex lg:flex-row flex-col items-center gap-3">
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
