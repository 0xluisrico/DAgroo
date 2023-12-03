import './Vendedor.css'
import papa from '../../assets/Papa.jpeg'
import yuca from '../../assets/Yuca.jpeg'
import zanahoria from '../../assets/Zanahoria.jpeg'

function Vendedor_exis() {
    return(
        <>
        <div className='perfil'>
            <div className='datos'>
                <div>
                    <h3>Nombre : </h3>
                    <p> Luis Carlos</p>
                </div>
                <div>
                    <br />
                    <h3>Ubication :</h3>
                    <p>lat: 55, long:22</p>
                </div>
                <div>
                    <br />
                    <h3>productos vendidos</h3>
                    <p>3213</p>
                </div>
                

                

                

            </div>
            <div className='productos'>
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


            </div>

        </div>
        </>
    )
}
export default Vendedor_exis