import './Footer.css'
// import img from '../../assets/logo.png'

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='devs'>
                <h2>Desarrollado por: </h2>
                <div className='links'>
                    <a href="https://twitter.com/SrStovedove" target='blanck'>Alejandro Restrepo</a>
                    <a href="https://itsisaag.artstation.com/" target='blanck'>Ana Isabel</a>
                    <a href="https://www.linkedin.com/in/davidzapatao/" target='blanck'>David Zapata</a>
                    <a href="https://twitter.com/0xwispy" target='blanck'>Santiago Rojas</a>
                    <a href="https://twitter.com/chocoflowww" target='blanck'>Samuel Lopez</a>
                    <a href="https://www.linkedin.com/in/luisricox0/" target='blanck'>0xchimex</a>
                </div>
                
                
            </div>
            <div className='redes'>
                <h2>Sigue el proyecto</h2>
                <a href="https://twitter.com/dagrocelo">Twitter</a>
                         
            </div>
        </div>
        </>
    )
}
export default Footer