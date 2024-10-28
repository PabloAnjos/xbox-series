import './Acordeao.scss'
import imgArrow from '../../assets/images/arrow.svg'
import { useState } from 'react';

export function Acordeao({ pergunta }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };

    return (
        <>
            <div className='acordeon-perguntas' style={{width: isExpanded ? "1152px" : "1152px", height: isExpanded ? "163px" : "100px", transition: "width 0.3s, height 0.3s"}}>
                    <h3>{pergunta}</h3>
                    <img src={imgArrow} alt="Imagem Seta" onClick={toggleExpand} style={{width: isExpanded ? "30px" : "30px"}}/>
            </div>
        </>
    )
}