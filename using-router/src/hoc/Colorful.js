// Higher Order Component example

const Colorful = (WrappedComponent) => {
    const colors = [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "light",
        "dark"
    ]

    // Sorteando uma cor
    const color = "text-" + colors[Math.floor(Math.random() * (colors.length - 1))]

    return (props) => {
        return (
            <div className={color}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Colorful