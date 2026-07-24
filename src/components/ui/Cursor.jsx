import useCursor from '../../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, ringRef } = useCursor()

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border border-accent/35 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      />
    </>
  )
}
