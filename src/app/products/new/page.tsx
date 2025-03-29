"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/input";
import Select from "@/components/select";
import { getProductCategoriesForSelect } from "@/app/actions/actions";
import { useEffect, useState } from "react";


const productSchema = z.object({
	code: z.string().nonempty("Product code is required"),
	description: z.string().nonempty("Description is required"),
	price: z.coerce.number().positive("Price must be greater than 0").default(0),
	cost: z.coerce.number().positive("Cost must be greater than 0").default(0),
	productCategoryId: z.string().nonempty("Product category is required"),
});

type TProductSchema = z.infer<typeof productSchema>;

export default function NewProduct() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm({ resolver: zodResolver(productSchema), defaultValues: { code: "", description: "", price: 0, cost: 0 } });

	const [options, setOptions] = useState<{id: string, value: string}[]>([]);

	const onSubmit = (data: TProductSchema) => {
		console.log("Form Data:", data);
	};

	useEffect(() => {

		const getCategorties = async () => {
			try {
				const data = await getProductCategoriesForSelect();
				setOptions(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		getCategorties();
	}, []);

  return (
	  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 m-auto max-w-2xl">

		<Input label="Code" id="code" register={register} error={errors.code} />
		<Input label="Description" id="description" register={register} error={errors.description} />
		<Input label="Price" id="price" type="number" step="0.01" register={register} error={errors.price} />
		<Input label="Cost" id="cost" type="number" step="0.01" register={register} error={errors.cost} />

		<Select label="Category" id="productCategoryId" options={options} register={register} error={errors.productCategoryId} />

		<button type="submit" disabled={isSubmitted} className="text-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
			Create Product
		</button>
    </form>
  );
}