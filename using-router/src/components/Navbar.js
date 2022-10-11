import { useEffect } from "react"
// Apenas na versão 5.2.0..
// import { NavLink, withRouter } from "react-router-dom"
// Versão 6+
import { NavLink, useNavigate } from "react-router-dom"

// withRouter foi removido na versão 6 do react-router
// Para resolver, precisa instalar a versão 5.2
// npm install react-router-dom@5.2.0 react-router@5.2.0
// Na versão 6, é "useNavigate" ao invés de "withRouter"

const Navbar = (props) => {
    // Returns an imperative method for changing the location. 
    // Used by s, but may also be used by other elements to change the location.
    const navigate = useNavigate()

    // Para redirecionar depois de 2s
    useEffect(() => {
        setTimeout(() => {
            navigate('/about')
        }, 2000);
    }, [])

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Obs.: a primeira aba não está desmacando como ativa quando 
                o conteúdo não é mais dela. */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="nav nav-tabs">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>    
                        <NavLink className="nav-item nav-link" to="/about">About</NavLink>    
                        <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>    
                    </div>
                    {/* Outra forma seria usando <Link /> da mesma forma, mas não ficaria como abas e não marcaria o atual */}
                </div>
            </div>
        </nav>
    )
}

// Apenas na versão 5.2.0..
// export default withRouter(Navbar)
export default Navbar