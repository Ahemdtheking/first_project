import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom'
import logo from './logo PNG.png';
import './Nevber.css';

const Nevber = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <div className='n-list'>
      <h3 className='logo'><Link to="/"><li><img src={logo} width={240} height={70}  /></li></Link></h3>
      <ul className= {Mobile? "MMI" : 'n-links'} onClick={() => setMobile(false)}>
        <Link to="/"><li>Home</li></Link>
        <Link to="clients"><li>Clients</li></Link>
        <Link to="services"><li>Services</li></Link>
        <Link to="Sup-Palastain"><li>Sup-Palastain</li></Link>
        <Link to="about"><li>About</li></Link>
        <Link className='conb' to="contact"><li>Contact</li></Link>
      </ul>
      <button className='MMI' onClick={() => setMobile(!Mobile)}>
        {Mobile? <ImCross /> : <FaBars />}
      </button>
      </div>
  )
}

export default Nevber