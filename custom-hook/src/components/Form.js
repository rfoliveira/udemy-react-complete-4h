import { useState } from "react"

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert('Name: ' + name + ', E-mail: ' + email)
        setName('')
        setEmail('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form