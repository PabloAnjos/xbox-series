import './Acordeao.scss'
import imgArrow from '../../assets/images/arrow.svg'


export function Acordeao({ pergunta }) {
    return (
        <>
            <div className='acordeon-perguntas'>
                    <h3>{pergunta}</h3>
                    <img src={imgArrow} alt="Imagem Seta" />
            </div>
        </>
    )
}