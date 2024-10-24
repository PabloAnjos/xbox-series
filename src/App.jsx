import './App.css'
import { Header } from './components/Header/Header'
import imgXbox from './assets/images/xbox.png'
import imgControleXbox from './assets/images/controle-xbox.png'
import video from './assets/images/video-desktop.mp4'


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
        <section className='section-controle-xbox'>
                  <div className='container-controle-xbox'>
                        <div className='content-controle'>
                            <h1>Desempenho</h1>
                            <h2>aperfeiçoado</h2>
                            <p>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</p>
                        </div>
                        <img src={imgControleXbox} alt="Imagem controle Xbox" />
                  </div>
        </section>

        {/* SECTION LISTA DE JOGOS */}
        <section className='lista-de-jogos'>
                  <video autoPlay loop>
                        <source src={video}/>
                        Seu navegador não suporta a tag de vídeo.
                  </video>
        </section>
    </>
  )
}

export default App
