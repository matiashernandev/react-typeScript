import Task from "../interfaces/TaskInterface";

interface Props {
	task: Task;
	deleteATask: (id: number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
	return (
		<div className="flex flex-col gap-4 items-center">
			<h2 className="my-3">{task.title}</h2>
			<p>{task.description}</p>

			<button
				onClick={() => task.id && deleteATask(task.id)}
				type="button"
				className="py-2 px-4   bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-72 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
			>
				Delete
			</button>
		</div>
	);
}
