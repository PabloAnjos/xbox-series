import './App.css'
import { Header } from './components/Header/Header'
import imgXbox from './assets/images/xbox.png'
import imgControleXbox from './assets/images/controle-xbox.png'
import { Acordeao } from './components/Acordeao/Acordeao'
import imgListaDeJogos from './assets/images/lista-de-jogos.png'
import logoXbox from './assets/images/logo-xbox.png'


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
                  <img src={imgListaDeJogos} alt="Imagem Lista de Jogos" />
        </section>

        {/* SECTION PERGUNTAS FREQUENTES */}
        <section className='perguntas-frequentes'>
                  <div className='container-perguntas-frequentes'>
                        <h1><span>Perguntas</span> frequentes</h1>

                        <div className='acordeao'>
                              <Acordeao pergunta={"Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?"}/>
                              <Acordeao pergunta={"O que está incluído no Xbox Series X?"}/>
                              <Acordeao pergunta={"Como sei se minha TV é compatível com 4K?"}/>
                        </div>
                  </div>  
        </section>

        {/* FOOTER */}
        <footer>
                <div className='container-footer'>
                      <img src={logoXbox} alt="Logo Xbox" />
                      
                      <div className='content-footer'>
                          <h5>© Microsoft 2022</h5>
                          <h6>Todos os direitos reservados</h6>
                      </div>
                </div>
        </footer>
    </>
  )
}

export default App
