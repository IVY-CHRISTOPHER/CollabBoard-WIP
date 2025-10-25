import { createContext, useState } from "react"

export const userContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const [allProjects, setAllProjects] = useState({})
    const [project, setProject ] = useState({})
    const [milestones, setMilestones] = useState({})
    const [milestone, setMilestone] = useState({})
    const [tasks, setTasks] = useState({})
    const [task, setTask] = useState({})

    return (
        <userContext.Provider
            value ={{
                user, setUser,
                allProjects, setAllProjects,
                project, setProject,
                milestones, setMilestones,
                milestone, setMilestone,
                tasks, setTasks,
                task, setTask,
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}

