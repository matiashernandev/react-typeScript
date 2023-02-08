import Task from "../interfaces/TaskInterface";
import TaskCard from "./TaskCard";

interface Props {
	tasks: Task[];
	deleteATask: (id: number) => void;
}

export default function TaskList({ tasks, deleteATask }: Props) {
	return (
		<>
			{tasks.map((task) => (
				<div key={task.id}>
					<TaskCard task={task} deleteATask={deleteATask} />
				</div>
			))}
		</>
	);
}
