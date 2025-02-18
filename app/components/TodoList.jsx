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

let ID = 0;


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
					<DialogTrigger asChild><Button size="icon" onClick={() => { }}><Edit /></Button></DialogTrigger>
					<DialogContent className="w-4/12">
						<DialogHeader>
							<DialogTitle>Edit</DialogTitle>
							<DialogDescription>
								Edit the desired fields and press submit or hit enter
							</DialogDescription>
						</DialogHeader>

						<div className='mt-3 w-full'>
							<form onSubmit={(e) => {
								e.preventDefault();
								edit(todo.id, title, desc)
							}}>
								<Label className="font-base ">Title</Label>
								<Input type="text" id="" placeholder="Title" className="mt-2 mb-4" value={title} onChange={(e) => setTitle(e.target.value)} />

								<Label className="font-base">Description</Label>
								<Input type="textbox" id="" placeholder="Description" className="mt-2" value={desc} onChange={(e) => setDesc(e.target.value)} />
								<DialogClose asChild><Button type="submit" className="mt-5 w-full">Submit</Button></DialogClose>
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
	const [atitle, setTitle] = useState("")
	const [adesc, setDesc] = useState("")

	const [todos, setTodos] = useState([
	]

	)

	function handleAdd(nextTitle, nextDesc) {
		setTodos([...todos, {id: ID++, title: nextTitle, description: nextDesc}])
	}

	function handleDelete(todoID) {
		setTodos(todos.filter(todo => todo.id !== todoID))
	}

	function handleEdit(TodoID, nextTitle, nextDesc) {
		setTodos(todos.map((todo) => {
			if (todo.id === TodoID) {
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
					<h1 className="text-6xl font-bold">Todos</h1>
					<div className='mt-8 relative flex flex-col gap-3'>
						{todos.map((todo, index) => {
							return <Todo key={todo.id} todo={todo} i={index} deletefunc={handleDelete} edit={handleEdit} add={handleAdd} />
						}
						)}
					</div>

					<div className="flex items-center justify-center mt-5">
						<Dialog>
							<DialogTrigger asChild><Button variant="outline" className="text-green-500 hover:text-green-600/85 border-green-400"><PlusIcon />Add</Button></DialogTrigger>
							<DialogContent className="w-4/12">
								<DialogHeader>
									<DialogTitle>Add</DialogTitle>
									<DialogDescription>
										Fill the desired fields and press submit or hit enter
									</DialogDescription>
								</DialogHeader>

								<div className='mt-3 w-full'>
									<form onSubmit={(e) => {
										e.preventDefault();
										handleAdd(atitle, adesc)
										setTitle("")
										setDesc("")
									}}>
										<Label className="font-base ">Title</Label>
										<Input type="text" id="" placeholder="Title" className="mt-2 mb-4" value={atitle} onChange={(e) => setTitle(e.target.value)} />

										<Label className="font-base">Description</Label>
										<Input type="textbox" id="" placeholder="Description" className="mt-2" value={adesc} onChange={(e) => setDesc(e.target.value)} />
										<DialogClose asChild><Button type="submit" className="mt-5 w-full">Submit</Button></DialogClose>
									</form>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</>
				)}

			{todos.length == 0 && (
				<div className='flex relative flex-col justify-center items-center mt-28 gap-4'>
					<h1 className='text-4xl font-bold'>Welcome to the To-Do Application</h1>
					<p className='text-sm text-gray-500'>Created by: Soubhagya Mishra</p>
					<p className='text-xl font-light mt-10'>Press the below button to add your first todo of the day</p>
					<Dialog>
							<DialogTrigger asChild><Button variant="" className=" bg-green-500 hover:bg-green-600"><PlusIcon />Add</Button></DialogTrigger>
							<DialogContent className="w-4/12">
								<DialogHeader>
									<DialogTitle>Add</DialogTitle>
									<DialogDescription>
										Fill the desired fields and press submit or hit enter
									</DialogDescription>
								</DialogHeader>

								<div className='mt-3 w-full'>
									<form onSubmit={(e) => {
										e.preventDefault();
										handleAdd(atitle, adesc)
									}}>
										<Label className="font-base ">Title</Label>
										<Input type="text" id="" placeholder="Title" className="mt-2 mb-4" value={atitle} onChange={(e) => setTitle(e.target.value)} />

										<Label className="font-base">Description</Label>
										<Input type="textbox" id="" placeholder="Description" className="mt-2" value={adesc} onChange={(e) => setDesc(e.target.value)} />
										<DialogClose asChild><Button type="submit" className="mt-5 w-full">Submit</Button></DialogClose>
									</form>
								</div>
							</DialogContent>
						</Dialog>
				</div>
			)}
		</div>
	)
}

export default TodoList