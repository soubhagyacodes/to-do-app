"use client"

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Edit, Trash2, PlusIcon, Terminal } from 'lucide-react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const Todo = ({ todo, i, deletefunc, edit, add }) => {


	const [title, setTitle] = useState(todo.title)
	const [desc, setDesc] = useState(todo.description)

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
				<Dialog>
					<DialogTrigger asChild><Button size="icon" onClick={() => {}}><Edit /></Button></DialogTrigger>
					<DialogContent className="w-4/12">
						<DialogHeader>
							<DialogTitle>Edit</DialogTitle>
							<DialogDescription>
								Edit the desired fields and press confirm
							</DialogDescription>
						</DialogHeader>

						<div className='mt-3 w-full'>
							<form onSubmit={(e) => {
								e.preventDefault();
								edit(todo.id, title, desc)
							}}>
								<Label className="font-base ">Title</Label>
								<Input type="text" id="" placeholder="Title" className="mt-2" value={title} onChange={(e) => setTitle(e.target.value)} />

								<Label className="font-base">Description</Label>
								<Input type="textbox" id="" placeholder="Description" className="mt-2" value={desc} onChange={(e) => setDesc(e.target.value)} />
								<DialogClose asChild><Button type="submit">Submit</Button></DialogClose>
							</form>
						</div>
					</DialogContent>
				</Dialog>
				<Button variant="destructive" onClick={() => deletefunc(todo.id)}> <Trash2 />Delete </Button>

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

	function handleAdd() {
	}

	function handleDelete(todoID) {
		setTodos(todos.filter(todo => todo.id !== todoID))
	}

	function handleEdit(TodoID, nextTitle, nextDesc) {
		setTodos(todos.map((todo) => {
			if(todo.id === TodoID){
				return {
					...todo,
					title: nextTitle,
					description: nextDesc
				}
			}
			return todo
		}))
	}

	return (
		<div>
			{todos.length > 0 &&
				(<>
					<div className='mt-8 relative flex flex-col gap-3'>
						{todos.map((todo, index) => {
							return <Todo key={todo.id} todo={todo} i={index} deletefunc={handleDelete} edit={handleEdit} add={handleAdd} />
						}
						)}
					</div>

					<div className="flex items-center justify-center mt-5">
						<Dialog>
							<DialogTrigger asChild><Button variant="outline" className="text-green-500 hover:text-green-600/85 border-green-400"><PlusIcon />Add</Button></DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Add</DialogTitle>
									<DialogDescription>
										This action cannot be undone. This will permanently delete your account
										and remove your data from our servers.
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</div>
				</>
				)}

			{todos.length == 0 && (
				<div className='flex relative flex-col justify-center items-center mt-44 gap-4'>
					<p className='text-3xl font-light'>Add Your First To-Do</p>
					<Dialog>
						<DialogTrigger asChild><Button variant="outline" className="text-green-500 hover:text-green-600/85 border-green-400"><PlusIcon />Add</Button></DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Add</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete your account
									and remove your data from our servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
			)}
		</div>
	)
}

export default TodoList