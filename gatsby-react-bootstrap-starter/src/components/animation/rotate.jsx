import React from "react"
import { useSpring, animated } from "react-spring"

export default function Rotate({ children, classes = {}, open = false }) {
  const rotateStyle = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: open ? "rotate(0deg)" : "rotate(180deg)" },
    config: {
      duration: 300,
    },
  })

  return (
    <animated.div style={rotateStyle} className={classes}>
      {children}
    </animated.div>
  )
}
