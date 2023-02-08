import Task from "../interfaces/TaskInterface";
import TaskCard from "./TaskCard";

interface Props {
	tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
	return (
		<div>
			{tasks.map((task) => (
				<TaskCard task={task} />
			))}
		</div>
	);
}
