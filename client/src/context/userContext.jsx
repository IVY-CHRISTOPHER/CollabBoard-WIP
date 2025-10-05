import { createContext, useState } from "react"

export const userContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const [allProjects, setAllProjects] = useState([])

    return (
        <userContext.Provider
            value ={{
                user, setUser,
                allProjects, setAllProjects
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}

