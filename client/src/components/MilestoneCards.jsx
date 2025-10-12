import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/userContext'

const MilestoneCards = (props) => {
    const { milestones, setMilestones } = useContext(userContext)

    const allmilestones = [
        { 'id': '1', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '2', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '3', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '4', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '5', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '6', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '7', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '8', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '9', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '10', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '11', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '12', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '13', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
        { 'id': '14', 'milestoneName': 'Name', 'tasks': [{'id' : '1', 'task' : 'task1'}, {'id' : '2', 'task' : 'task1'}, {'id' : '3', 'task' : 'task1'}, {'id' : '4', 'task' : 'task1'}, {'id' : '5', 'task' : 'task1'}, {'id' : '6', 'task' : 'task1'}, {'id' : '7', 'task' : 'task1'}, {'id' : '8', 'task' : 'task'},{'id' : '9', 'task' : 'task9'}, {'id' : '10', 'task' : 'task10'}] },
    ]

    useEffect(() => {
        setMilestones(allmilestones)
    }, [])


    return (
        <div className='flex h-2/3 w-full overflow-hidden'>
            <div className=' flex overflow-x-scroll overscroll-x-contain'>

                {
                    milestones.map(milestone => (
                        <div className=' w-[200px] flex-shrink-0 rounded-md bg-iceberg ml-4' key={milestone.id}>
                            <h2 className='font-bold'>{milestone.milestoneName}</h2>

                            <div>
                                {milestone.tasks.map(task => (
                                    <div key={task.id}>
                                        <input type="checkbox" name="" id="" className='appearance-none rounded-full border border-black w-3 h-3 checked:bg-midnightBlu' />
                                        <label htmlFor="">{task.task}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MilestoneCards