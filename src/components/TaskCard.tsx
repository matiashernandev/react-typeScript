import Task from "../interfaces/TaskInterface";

interface Props {
	task: Task;
}

export default function TaskCard({ task }: Props) {
	return (
		<div className="flex flex-col gap-4 items-center" key={task.id}>
			<h2 className="my-3">{task.title}</h2>
			<p>{task.description}</p>
			<p>{task.completed ? "Completado" : "Incompleto"}</p>
			<button
				type="button"
				className="py-2 px-4   bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-72 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
			>
				Delete
			</button>
		</div>
	);
}
