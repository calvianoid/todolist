import React from 'react'

interface ITask {
  taskName: string
  deadline: number
}

interface Props {
  task: ITask
  completedTask(taskNameToDoList: string): void
}

export const TodoTask = ({ task, completedTask }: Props) => {
  return (
    <div className="my-5 flex justify-center">
      <div className="flex w-1/2 rounded-lg border">
        <div className="flex h-20 w-5/6 rounded-l-lg bg-white">
          <div className="flex h-full w-1/2 items-center justify-center rounded-l-lg border bg-blue-500">
            <p className="text-lg font-semibold text-white">{task.taskName}</p>
          </div>
          <div className="flex h-full w-1/2 items-center justify-center border bg-blue-500">
            <p className="text-lg font-semibold text-white">{task.deadline}</p>
          </div>
        </div>
        <button
          onClick={() => completedTask(task.taskName)}
          className="h-20 w-1/6 rounded-r-lg border bg-red-500 text-lg font-semibold text-white hover:bg-red-600"
        >
          X
        </button>
      </div>
    </div>
  )
}
