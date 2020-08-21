import { useEffect, useState } from "react"
import { throttle } from "lodash"

export default function useMedia(bp) {
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (typeof window != "undefined" || typeof window != null) {
      setMobile(window.innerWidth <= bp)

      window.addEventListener(
        "resize",
        throttle(() => setMobile(window.innerWidth <= bp))
      )
    }
  }, [])

  return isMobile
}
