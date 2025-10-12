import { createContext, useState } from "react"

export const userContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const [allProjects, setAllProjects] = useState([])
    const [milestones, setMilestones] = useState([])

    return (
        <userContext.Provider
            value ={{
                user, setUser,
                allProjects, setAllProjects,
                milestones, setMilestones,
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}

