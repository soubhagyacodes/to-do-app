"use client"

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Edit, Trash2, PlusIcon } from 'lucide-react'

function handleClick() {

}

const Todo = ({ todo, i }) => {
	console.log(i)
	return (
		<div className='w-full flex border-black/20 border items-center justify-between py-3 px-10 rounded-lg'>
			<div className="position">
				<p>{i + 1}</p>
			</div>

			<div className="title-desc w-10/12">
				<h1 className='text-lg font-medium line-clamp-1'>{todo.title}</h1>
				<p className='text-xs font-light line-clamp-1'>{todo.description}</p>
			</div>

			<div className='buttons flex gap-2'>
				<Button size="icon"><Edit /></Button>
				<Button variant="destructive" onClick={handleClick}> <Trash2 />Delete </Button>
			</div>
		</div>
	)
}

function TodoList() {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Learn React', description: 'Understand the fundamentals of React, including components, state, and props.' },
		{ id: 2, title: 'Learn Next.js', description: 'Explore Next.js for server-side rendering, static site generation, and API routes.' },
		{ id: 3, title: 'Build something awesome', description: 'Apply your knowledge by creating a project that solves a real-world problem.' }
	  ]
	  
	)
	return (
		<div>
			{todos.length > 0 &&
				(<>
					<div className='mt-8 flex flex-col gap-3'>
						{todos.map((todo, index) => {
							console.log(index)
							return <Todo key={todo.id} todo={todo} i={index} />
						}
						)}
					</div>

					<div className="flex items-center justify-center mt-5">
						<Button variant="outline" className="text-green-500 hover:text-green-600/85 border-green-400"><PlusIcon />Add</Button>
					</div>
				</>
				)}

			{todos.length == 0 && (
				<div className='flex flex-col justify-center items-center mt-44 gap-4'>
					<p className='text-3xl font-light'>Add Your First To-Do</p>
					<Button variant="outline" className="text-green-500 hover:text-green-600/85 border-green-400"><PlusIcon />Add</Button>
				</div>
			)}
		</div>
	)
}

export default TodoList