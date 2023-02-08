import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "../interfaces/TaskInterface";

interface Props {
	addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
	title: "",
	description: "",
};

export default function TaskForm({ addANewTask }: Props) {
	const [task, setTask] = useState(initialState);
	const inputTitle = useRef<HTMLInputElement>(null);

	const handleInputChange = ({
		target: { name, value },
	}: HandleInputChange) => {
		setTask({ ...task, [name]: value });
	};

	const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addANewTask(task);
		setTask(initialState);
		inputTitle.current?.focus();
	};

	return (
		<div className="my-5">
			<h1 className="my-5">Add Task</h1>
			<form onSubmit={handleNewTask} className="flex gap-3 flex-col">
				<input
					type="text"
					placeholder="Escribe una tarea"
					name="title"
					onChange={handleInputChange}
					value={task.title}
					autoFocus
					ref={inputTitle}
				/>
				<textarea
					rows={2}
					name="description"
					placeholder="Escribe una descripción"
					onChange={handleInputChange}
					value={task.description}
				></textarea>

				<button
					type="submit"
					className="py-2 px-4 flex justify-center items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
				>
					<AiOutlinePlus />
					Add Task
				</button>
			</form>
		</div>
	);
}
