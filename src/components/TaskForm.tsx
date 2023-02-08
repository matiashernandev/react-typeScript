import { AiOutlinePlus } from "react-icons/ai";

export default function TaskForm() {
	return (
		<div className="my-5">
			<h1 className="my-5">Add Task</h1>
			<form className="flex gap-3 flex-col">
				<input type="text" placeholder="Escribe una tarea" name="title" />
				<textarea
					rows={2}
					name="description"
					placeholder="Escribe una descripción"
				></textarea>
				{/* 	<button className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
					Save
					<AiOutlinePlus />
				</button> */}

				<button
					type="button"
					className="py-2 px-4 flex justify-center items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
				>
					{/* 	<svg
						width="20"
						height="20"
						fill="currentColor"
						className="mr-2"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
						>
						<path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
					</svg> */}
					<AiOutlinePlus />
					Add Task
				</button>
			</form>
		</div>
	);
}
