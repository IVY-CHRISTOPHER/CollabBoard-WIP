import { createContext, useState } from "react"

export const userContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const [allProjects, setAllProjects] = useState([])
    const [project, setProject ] = useState([])
    const [milestones, setMilestones] = useState([])

    return (
        <userContext.Provider
            value ={{
                user, setUser,
                allProjects, setAllProjects,
                project, setProject,
                milestones, setMilestones,
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}

