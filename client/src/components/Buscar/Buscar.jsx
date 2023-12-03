import './Buscar.css'
import papa from '../../../public/Papa.jpeg'
import yuca from '../../../public/Yuca.jpeg'
import zanahoria from '../../../public/Zanahoria.jpeg'

function Buscar() {
    return (
        <>
        <div className='buscar-buscar'>
            <input className='input' type="text" name="busquedad" id="" placeholder='Busca el servicio que necesitas' />
            <a href="/Buscar"><button  className='button-buscar' >Buscar</button></a>
        </div>
        <div className='cards'>
        <div className='card'>
          <div className='card-img'>
            <img src={papa} className='tarjet-profile'></img>
          </div>
            <h2>PAPA</h2>
            <h3>Numero de ventas realizadas</h3>
            <p className='num-ventas'>23782</p> 
        </div>
        <div className='card'>
          <div className='card-img'>
            <img src={yuca} className='tarjet-profile'></img>
          </div>
            <h2>YUCA</h2>
            <h3>Numero de ventas realizadas</h3>
            <p className='num-ventas'>23780</p>  
        </div>
        <div className='card'>
          <div className='card-img'>
            <img src={zanahoria} className='tarjet-profile'></img>
          </div>
            <h2>ZANAHORIA</h2>
            <h3>Numero de ventas realizadas</h3>
            <p className='num-ventas'>23770</p>  
        </div>
      </div>
        </>
    )
}
export default Buscar