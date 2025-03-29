/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, UseFormRegister } from "react-hook-form";

type TInputProps = {
	label?: string;
	type?: string;
	step?: string;
	id: string;
	register: UseFormRegister<any>;
	error: FieldError | undefined;
}

export default function Input({ label, type = "text", step,  id, register, error }: TInputProps) {
	return (
		<div className="flex flex-col mb-4">
			{label && <label htmlFor={id} className="mb-2 font-semibold">
				{label}
			</label>}
			<input
				id={id}
				type={type}
				step={step} // This will only be used if type is "number"
				{...register(id)}
				className={`border ${error ? "border-red-500" : "border-gray-300"} rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
			/>
			{error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
		</div>
	);
}