import UseInput from "../customhook/useInput"

const FormHooked = () => {
    const [name, bindName, clearName] = UseInput('')
    const [email, bindEmail, clearEmail] = UseInput('', 'email')
    const [password, bindPassword, clearPassword] = UseInput('', 'password')

    const submitHandler = (e) => {
        e.preventDefault()
        alert('Name: ' + name + ', Email: ' + email + ', Password: ' + password)
        clearName()
        clearEmail()
        clearPassword()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input {...bindName} />
                </div>
                <div>
                    <label>Email</label>
                    <input {...bindEmail} />
                </div>
                <div>
                    <label>Password</label>
                    <input {...bindPassword} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormHooked