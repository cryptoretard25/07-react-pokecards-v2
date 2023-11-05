import React, {useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

function Card({ rotate, handleClick, name, imageSrc }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [notBlocked, setNotBlocked] = useState(false);

  const variants = {
    faceUp: { rotateY: 0 },
    faceDown: { rotateY: 180 },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFlipped(rotate);
      setNotBlocked(rotate);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [rotate]);

  return (
    <AnimatePresence>
      <motion.div
        whileHover={notBlocked ? { scale: 1.05, y: -10, zIndex: 5 } : {}}
        variants={variants}
        initial="faceDown"
        transition={{ duration: 1, ease: "easeInOut" }}
        animate={rotate ? "faceUp" : "faceDown"}
        className={`card ${isFlipped ? "face-up" : "face-down"}`}
        onClick={notBlocked ? handleClick : null}
      >
        {isFlipped && (
          <>
            <img src={imageSrc} />
            <p>{name}</p>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Card;
