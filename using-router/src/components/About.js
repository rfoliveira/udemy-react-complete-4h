import { faker } from '@faker-js/faker'
// import Colorful from '../hoc/Colorful'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>{`${faker.lorem.paragraph()}`}</p>
        </div>
    )
}

export default About
// Dessa forma, a cada vez que entrar na tela
// o compomente terá uma cor diferente
// export default Colorful(About)