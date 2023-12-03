import './Home.css'
import background from '../../assets/viejito.jpg'
import papa from '../../assets/Papa.jpeg'
import yuca from '../../assets/Yuca.jpeg'
import zanahoria from '../../assets/Zanahoria.jpeg'

function Home () {
    return (
        <>
        <div className='home'>
            <img className='background-home' src={background} alt="" />
            <div className='filtro'></div>
            <div className='bienv'>
                <p>Bienvenidos</p>
            </div>
            <div className='text'>
                <input className='input' type="text" name="busquedad" id="" placeholder='Busca el servicio que necesitas' />
                <button className='button-buscar'>Buscar</button>
            </div>
            <div className='title-cards'>Productos Populares</div>
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
        
        
        </>
    )
}
export default Home