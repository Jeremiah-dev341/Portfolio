import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-18 right-3 w-12 h-12 bg-lime-500 text-black rounded-full flex items-center justify-center text-xl shadow-lg z-50 hover:bg-lime-600 transition"
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop
