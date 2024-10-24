import './App.css'
import { Header } from './components/Header/Header'
import imgXbox from './assets/images/xbox.png'
import imgControleXbox from './assets/images/controle-xbox.png'

function App() {
  return (
    <>
        <Header />

        {/* SECTION XBOX SERIES X */}
        <section className='section-xbox-series-x'>
                  <div className='container-xbox-series-x'>
                        <h1>Xbox series X</h1>
                        <h2>PEDIDO ANTECIPADO</h2>
                        <img src={imgXbox} alt="Imagem Xbox" />
                  </div>
        </section>

        {/* SECTION CONTROLE XBOX */}
        <section className='controle-xbox'>
                  <div className='container-controle-xbox'>
                        <h1>Desempenho aperfeiçoado</h1>
                        <p>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
                        <img src={imgControleXbox} alt="Imagem controle Xbox" />
                  </div>
        </section>
    </>
  )
}

export default App
