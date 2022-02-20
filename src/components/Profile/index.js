import './profile.css';
import profile from './../../assets/img/profile.jpg'
import react from './../../assets/img/reactjs.jpg'
import angular from './../../assets/img/angular.png'
import spring from './../../assets/img/spring.png'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";


export const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-description'>
                <h1 className='profile-title'>Johan <br></br>Quijano</h1>
                <h3 className='profile-subtitle'>Ingeniero de Sistemas<br></br> SCRUM Master</h3>
                <div className='profile-image'><img  src={profile} alt='Profile'/></div> 
                <p className='profile-description' align="justify">Cuento con más de 12 años de experiencia trabajando en proyectos de tecnología me han permitido conocer todo tipo de sectores como: Comercio electrónico, empresarial, editorial, impresiones, comunicaciones, logístico y el sector público</p>
                <span className='profile-icons'>
                <BsLinkedin /> <BsGithub /><MdOutlineEmail />
                </span>
               
            </div>
            
            <div className='images'>
                <img className='img' src={react} alt='React JS Logo'/> 
                <img className='img' src={angular} alt='Angular JS Logo'/> 
                <img className='img-spring'  src={spring} alt='Spring Boot JS Logo'/> 
                </div>
            
        </div>
    )
}