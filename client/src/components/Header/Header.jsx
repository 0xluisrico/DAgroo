import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    
    return (
        <>
        <div className='navbar'>
            <div className='logosimbol'>
                <img className='logo' src={logo} alt=""/>
                <a href="/Home">DAgro Celo</a>
            </div>
            <div className='tabs'>
                <a href="">Vendedor</a>
                <button className='button'>Log in</button>
            </div>
        </div>
        </>
    )
    
}
export default Header