import type { NextPage } from 'next'
import { useState, ChangeEvent } from 'react'
import Head from 'next/head'
import { TodoTask } from '../components/TodoTask'

const Home: NextPage = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todolist, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  interface ITask {
    taskName: string
    deadline: number
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todolist, newTask])
    setTask('')
    setDeadline(0)
    console.log(todolist)
  }

  const completedTask = (taskNameToDelete: string): void => {
    setTodoList(todolist.filter((task) => task.taskName !== taskNameToDelete))
  }

  return (
    <div className="flex h-screen min-w-full flex-col justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="flex h-1/4 w-full items-center justify-center bg-sky-600">
        <div className="flex">
          <div className="flex flex-col">
            <input
              className="rounded-l-lg border p-3 outline-none"
              type="text"
              placeholder="Task..."
              name="task"
              value={task}
              onChange={handleChange}
            />
            <input
              className="rounded-l-lg border p-3 outline-none"
              type="number"
              min="1"
              placeholder="Deadline (in Days)..."
              name="deadline"
              value={deadline}
              onChange={handleChange}
            />{' '}
          </div>
          <button
            onClick={addTask}
            className="rounded-r-lg border bg-gray-200 p-3 font-semibold hover:bg-gray-300"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Todolist */}
      <div className="h-3/4 bg-slate-400">
        {todolist.map((task: ITask, key: number) => {
          return (
            <TodoTask key={key} task={task} completedTask={completedTask} />
          )
        })}
      </div>
    </div>
  )
}

export default Home
