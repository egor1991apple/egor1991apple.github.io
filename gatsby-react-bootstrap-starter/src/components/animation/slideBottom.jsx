import React from "react"
import { useSpring, animated } from "react-spring"

export default function SlideBottom({ children, classes = {}, open = false }) {
  const maxHeightStyle = useSpring({
    from: { maxHeight: "0vh", display: "none" },
    to: async (next, cancel) => {
      await next({ display: "flex" })
      await next({ maxHeight: open ? "80vh" : "0vh" })
    },
    config: {
      duration: 300,
    },
  })

  return (
    <animated.div style={maxHeightStyle} className={classes}>
      {children}
    </animated.div>
  )
}
