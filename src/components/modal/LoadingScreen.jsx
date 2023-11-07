import React from "react";
import { motion, useAnimation } from "framer-motion";

function LoadingScreen() {
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start({
      rotate: 360,        // Угол вращения
      transition: {
        duration: 1,      // Длительность анимации в секундах
        ease: "linear",   // Тип анимации (linear, ease, ease-in, ease-out, ease-in-out и др.)
        repeat: Infinity, // Бесконечное повторение
      },
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--background-color)",
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "100",
      }}
    >
        <motion.div animate={controls}>
          <img
            src={`${process.env.PUBLIC_URL}/icon.svg`}
            alt="loading"
            width={"100px"}
          />
        </motion.div>
    </div>
  );
}

export default LoadingScreen;
