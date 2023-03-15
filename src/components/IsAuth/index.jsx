

const IsAuth = ({ children }) => {

    const getUser = () => {
        return "admin"
    }
    if (getUser() === 'admin')
        return children

    return false
}

export default IsAuth