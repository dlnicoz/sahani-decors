import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import '../css/navbar.css'
function Navbar () {
  return (
        <>
            <div id="navbtns">
                <a href="#home">
                 <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>   <i className="fa-solid fa-house"></i> <span id="itemreveal">Home</span></a>
                <a href="#services"><FontAwesomeIcon icon={faGear}></FontAwesomeIcon><i className="fa-solid fa-gears"></i> <span id="itemreveal">Services</span></a>
                <a href="#contact"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon><i className="fa-solid fa-address-book"></i> <span id="itemreveal">Contact</span></a>
            </div>
        </>
  )
}
export default Navbar
