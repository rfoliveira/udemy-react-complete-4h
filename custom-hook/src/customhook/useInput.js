import { useState } from "react"

const UseInput = (initialValue, type = 'text') => {
    const [value, setValue] = useState(initialValue)

    const clearText = () => {
        setValue(initialValue)
    }

    const bindForm = {
        value,
        onChange: e => setValue(e.target.value),
        type
    }

    return [value, bindForm, clearText, type]
}

export default UseInput