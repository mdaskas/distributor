import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	children: ReactNode;
	className?: string;
}

export default function Button({className, children,variant, size, ...props}: IButtonProps) {

	return (
		<button className={cn(buttonVariants({variant, size, className}))} {...props}>{children}</button>
	);
}

const buttonVariants = cva("rounded-md", {
	variants: {
		variant: {
			primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
			secondary: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
			danger: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200",
			ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
		},
		size: {
			sm: "px-2 py-1 text-sm",
			md: "px-4 py-2 text-md",
			lg: "px-6 py-3 text-lg",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});