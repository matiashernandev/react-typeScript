import { useState } from "react";
import TaskList from "./components/TaskList";
import logo from "./assets/react.svg";
import Task from "./interfaces/TaskInterface";
import TaskForm from "./components/TaskForm";

interface Props {
	title: string;
}

function App({ title }: Props) {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 1,
			title: "Es un título",
			description: "Esto es una descripción",
			completed: false,
		},
		{
			id: 2,
			title: "Es un título",
			description: "Esto es una descripción",
			completed: false,
		},
	]);

	return (
		<div className=" bg-slate-700  container mx-auto text-5xl">
			<nav className="bg-white dark:bg-gray-800  p-5">
				<a className="flex gap-2 justify-center items-center  " href="/">
					<img src={logo} alt="Logo React" />
					<h1>{title}</h1>
				</a>
			</nav>

			<main className="container p-4">
				<TaskForm />
				<TaskList tasks={tasks} />
			</main>
		</div>
	);
}

export default App;
