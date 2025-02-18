"use client"

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import { Trash2, PlusIcon } from 'lucide-react'

const Todo = () => {
	return (
		<div className='w-full flex border-black/20 border items-center justify-between px-10 py-3 rounded-lg'>
			<div className="position">
				<p>1</p>
			</div>

			<div className="title-desc w-10/12">
				<h1 className='text-lg font-medium line-clamp-1'>Title</h1>
				<p className='text-sm font-light line-clamp-1'>Description</p>
			</div>

			<div className='buttons flex gap-2'>
				<Button size="icon"><Edit /></Button>
				<Button variant="destructive"> <Trash2 />Delete </Button>
			</div>
		</div>
	)
}

function TodoList() {
	const [todos, setTodos] = useState([
		{ id: 1, text: 'Learn React' },
		{ id: 2, text: 'Learn Next.js' },
		{ id: 3, text: 'Build something awesome' },
	])
	return (
		<div>
			<div className='mt-8'>
				<Todo />
			</div>

			<div className="flex items-center justify-center mt-5">
				<Button variant="outline" className="text-green-500 hover:text-green-600/85 border-green-400"><PlusIcon size={20} />Add More</Button>
			</div>
		</div>
	)
}

export default TodoList