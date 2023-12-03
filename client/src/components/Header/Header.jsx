import './Header.css'
import logo from '../../../public/logo.png'
import { useState } from 'react';
// import { Contract, ethers } from "ethers";

    

function Header() {
    const [button, setMiButton] = useState('Log in');

    async function requestAccount() {
        
        if (window.ethereum) {
            try {
                const  accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                }); 
                setMiButton(accounts[0].substring(0, 6));
            } catch (error) {
                console.log("error connecting");
            }
        } else {
            alert("Metamask no detected");
        }
    }

    return (
        <>
        <div className='navbar'>
            <div className='logosimbol'>
                <img className='logo' src={logo} alt=""/>
                <a href="/Home">DAgro Celo</a>
            </div>
            <div className='tabs'>
                <a href="/Vendedor">Vendedor Nuevo</a>
                <a href="/Vendedor_exis">Vendedor Existente</a>
                <button onClick={requestAccount} className='button'>{button}</button>
            </div>
        </div>
        </>
    )
}
export default Header