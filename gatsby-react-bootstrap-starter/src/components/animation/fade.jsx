import React from "react"
import { useSpring, animated } from "react-spring"

const Fade = ({ children, classes, open }) => {
  const opacityStyle = useSpring(
    open
      ? {
          from: { opacity: 0, display: "none" },
          to: async (next, cancel) => {
            await next({ display: "flex" })
            await next({ opacity: 1 })
          },
          config: {
            duration: 300,
          },
        }
      : {
          from: { opacity: 1, display: "flex" },
          to: async (next, cancel) => {
            await next({ opacity: 0 })
            await next({ display: "none" })
          },
          config: {
            duration: 300,
          },
        }
  )
  return (
    <animated.div style={opacityStyle} className={classes}>
      {children}
    </animated.div>
  )
}

export default Fade
