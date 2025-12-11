import { FaWhatsapp } from 'react-icons/fa'

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/254799472453"
      target="_blank"
      className="fixed bottom-5 right-3 text-white text-2xl bg-green-500 p-3 rounded-full cursor-pointer z-50 flex items-center justify-center"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsappButton
