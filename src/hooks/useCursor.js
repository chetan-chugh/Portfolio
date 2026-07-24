import { useEffect, useRef } from 'react'

export default function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let cx = 0, cy = 0, rx = 0, ry = 0, raf

    const onMove = (e) => { cx = e.clientX; cy = e.clientY }
    document.addEventListener('mousemove', onMove)

    const onEnter = () => {
      cursorRef.current?.classList.add('scale-[2]')
      ringRef.current?.classList.add('scale-150', '!border-accent/60')
    }
    const onLeave = () => {
      cursorRef.current?.classList.remove('scale-[2]')
      ringRef.current?.classList.remove('scale-150', '!border-accent/60')
    }

    const addListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addListeners()

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = cx + 'px'
        cursorRef.current.style.top = cy + 'px'
      }
      rx += (cx - rx) * 0.12
      ry += (cy - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { cursorRef, ringRef }
}
