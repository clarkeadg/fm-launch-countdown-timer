import { FaFacebookSquare , FaPinterest, FaInstagram } from 'react-icons/fa'
import './SocialIcons.css'

const SocialIcons = () => { 
  return (
    <div className="social-icons flex justify-center text-3xl gap-5">  
      <a href="#" className="inline-block rounded-full p-2">
        <FaFacebookSquare/>
      </a>
      <a href="#" className="inline-block rounded-full p-2">
        <FaPinterest/>
      </a>
      <a href="#" className="inline-block rounded-full p-2">
        <FaInstagram/>
      </a>
    </div>
  )
}

export default SocialIcons
