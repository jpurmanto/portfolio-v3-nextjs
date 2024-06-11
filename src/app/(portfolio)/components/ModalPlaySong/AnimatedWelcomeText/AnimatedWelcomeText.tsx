import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
const AnimatedTextWord = ({
  text,
  ...props
}: {
  text: string;
  [key: string]: any;
}) => {
  const MotionText = motion(Text);

  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number) => (
        <MotionText
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          {...props}
        >
          {word}
        </MotionText>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
