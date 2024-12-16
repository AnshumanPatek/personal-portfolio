import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Profile(){
    return (
        <div>
            <h2>Anshuman Patek</h2>
            <h3>I am a Backend and DevOps Developer </h3>
            <h3>Happy to contribute to your code base</h3>
            <img src="https://media.licdn.com/dms/image/v2/C5603AQHAfQ2NGZJ6gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639371424948?e=1740009600&v=beta&t=G-Ll2rpn9_pRMSP-psfH46vS95qIQ74IrBfZI9XOMb0" alt="Anshuman Patek" /> 
           
           
            <div className="flex space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/anshuman-patek-4999021a8/" className="text-gray-400 hover:text-gray-600">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/Anshuman_Patek" className="text-gray-400 hover:text-gray-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/AnshumanPatek" className="text-gray-400 hover:text-gray-600">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/arihantjain" className="text-gray-400 hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
        </div>
            <button>Hire me</button>
            </div>
    )
}