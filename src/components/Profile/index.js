import './profile.css';
import profile from './../../assets/img/profile.jpg'
import react from './../../assets/img/reactjs.jpg'
import angular from './../../assets/img/angular.png'
import spring from './../../assets/img/spring.png'

export const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-description'>
                <h1 className='profile-title'>Johan Quijano</h1>
                <h2 className='profile-subtitle'>Ingeniero de Sistemas, SCRUM Master</h2>
                <img className='profile-image' src={profile} alt='Profile'/> 
                <p className='profile-description'>Cuento con más de 12 años de experiencia trabajando en proyectos de tecnología me han permitido conocer todo tipo de sectores como: Comercio electrónico, empresarial, editorial, impresiones, comunicaciones, logístico y el sector público</p>
                <span className='profile-icons'>Iconos</span>
            </div>
            
            <div className='images'>
                <img className='img' src={react} alt='React JS Logo'/> 
                <img className='img' src={angular} alt='Angular JS Logo'/> 
                <img className='img-spring'  src={spring} alt='Spring Boot JS Logo'/> 
                </div>
            
        </div>
    )
}