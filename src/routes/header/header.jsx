import './header.scss'
const Header=()=>{
    return(
        <div className='header-part'>
        <div className='title'>Abdelrhman Nabil Awad</div>
        <div className='sub-title'>Front End Developer</div>
        <div className='header-links'>
        <div className='frist-link'>
        <i class="fab fa fa-envelope" aria-hidden="true"> </i>
        <text className='email-text'>aen_2012@live.com</text>
        </div>
       <div className='second-link'>
       <i class="fab fa fa-phone"></i>
       <text className='email-text1'>01019627390</text>
       </div>
        <div className='thired-link'>
        <i class="fab1 fa fa-map-marker" aria-hidden="true"></i>
         <text className='fab2'>Kafr El-Sheikh, Egypt</text></div>
         </div>
        </div>
    )
}
export default Header

