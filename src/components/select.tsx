/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldError, UseFormRegister } from "react-hook-form";

type TOption = {
	id: string; // This should match the id of the option in the options array
	value: string; // This is the display value for the option
}

type TSelectProps = {
	label?: string;
	id: string;
	options: TOption[];
	register: UseFormRegister<any>;
	error: FieldError | undefined;
}

export default function Select({ label, id, options, register, error }: TSelectProps) {
	return (
		<div className="flex flex-col mb-4">
			{label && <label htmlFor={id} className="mb-2 font-semibold">
				{label}
			</label>}
			<select
				id={id}
				{...register(id)}
				className={`border ${error ? "border-red-500" : "border-gray-300"} rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
			>
				<option value="">Select an option</option>
				{options.map((option: TOption) => (
					<option key={option.id} value={option.id}>
						{option.value}
					</option>
				))}
			</select>
			{error?.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
		</div>
	);
}