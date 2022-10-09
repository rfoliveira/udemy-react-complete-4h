import { useEffect, useRef, useState } from "react";

// Obs.: o erro não foi gerado, simplesmente é executado o 
// setTimout, mas o setCount não incrementa.
// Acredito que nessa versão do react não precise fazer o tratamento
// informado pelo instrutor.
// Inclusive não funciona o timeout da forma explicada no vídeo.

const Component = () => {
    const [count, setCount] = useState(0)
    
    // Para controlar a referência ao componente, a fim de 
    // evitar erros no unmount do mesmo
    const componentRef = useRef(true)

    useEffect(() => {
        return () => {
            componentRef.current = false
        }
    }, [])

    // simula a cada 1s o incremento do contador
    const fakeFetch = () => {
        setTimeout(() => {
            // Dessa forma, se previne o erro de atualização de componente
            // que não está mais no DOM (unmounted)
            // console.log('componentRef.current', componentRef.current)
            if (componentRef.current)
            // console.log("Executou o setTimeout")
                setCount(count + 1)
        }, 2000);
    }

    return (
        <div>
            <h1>Component Couter: {count}</h1>
            <button onClick={fakeFetch}>Fake fetch</button>
        </div>
    )
}

export default Component