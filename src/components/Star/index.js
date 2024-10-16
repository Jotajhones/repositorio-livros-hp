import styles from "./star.module.css";
import { useState } from "react";
import { EstrelasContext, useEstrelasContextContext } from "../../context/estrelas"

function Star({ starCount, id, darNota }) {
    const [nota, setNota] = useState();
    const [floatNota, setFloatNota] = useState(0);
    const { estrelasContext, addestrelasContext } = useEstrelasContextContext();
    const isStar = estrelasContext.some((est) => est.id === id);

    function darNota(i) {
        console.log(setNota(i + 1))
        return setNota(i + 1)
    }
    
    const stars = Array.from({ length: starCount }, (_, i) => <Estrela

        key={i}
        atribuirNota={() => { darNota(i); addestrelasContext({ id, i }) }}
        preencherEstrela={floatNota ? floatNota >= 1 + i : nota >= i + 1}
        floatNota={() => setFloatNota(i + 1)}
        resetFloatNota={() => setFloatNota(0)}
    />)

    return (
        <div className={styles.star}>
            {stars}
        </div>
    );
}



function Estrela({ atribuirNota, preencherEstrela, floatNota, resetFloatNota, darNota }) {


    return (
        <>
            <span onClick={atribuirNota} onMouseEnter={floatNota} onMouseLeave={resetFloatNota} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={preencherEstrela ? 'Orange' : 'White'}
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke="orange"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 
          2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 
          1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 
          00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            </span>
        </>
    )
}



export default Star;
