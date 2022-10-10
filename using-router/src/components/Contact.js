import { faker } from '@faker-js/faker'

const Contact = () => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>{`${faker.lorem.paragraph()}`}</p>
        </div>
    )
}

export default Contact