import React, { useState } from 'react'

const SingleMilestoneCard = ({ milestone }) => {
    const [flipped, setFlipped] = useState(false)

    const handleHover = () => {
        setFlipped(!flipped)
    }

    return (
        <div 
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={`w-[200px] flex-shrink-0 rounded-md bg-iceberg ml-4 relative perspective-[100px] cursor-pointer transition-transform duration-700 ease-in-out transform-style-preserve-3d ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
            <div className={` w-full h-full `}>

                {/* Front Face */}
                <div className={`absolute w-full h-full ${flipped ? 'opacity-0' : 'opacity-100'}`}>
                    <h2 className='font-bold'>{milestone.milestoneName}</h2>

                    <div>
                        {milestone.tasks.map(task => (
                            <div key={task.id}>
                                <input type="checkbox" name="task" id="task" className='appearance-none rounded-full border border-black w-3 h-3 checked:bg-midnightBlu' />
                                <label htmlFor="task">{task.task}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back Face */}
                <div className={`absolute w-full h-full [transform:rotateY(180deg)] ${flipped ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className='font-bold'>{milestone.milestoneName}</h2>
                    <p>{milestone.description}</p>
                </div>

            </div>
        </div>
    )
}

export default SingleMilestoneCard