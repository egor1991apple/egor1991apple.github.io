import React from "react"
import { useSpring, animated } from "react-spring"

export default function SlideLeft({ children, classes = {}, open = false }) {
  const maxWidthStyle = useSpring({
    from: { maxWidth: 0, display: "none" },
    to: async (next, cancel) => {
      await next({ display: "flex" })
      await next({ maxWidth: open ? 320 : 0 })
    },
    config: {
      duration: 300,
    },
  })

  return (
    <animated.div style={maxWidthStyle} className={classes}>
      {children}
    </animated.div>
  )
}
