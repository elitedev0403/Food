import React, { ReactNode } from "react";

const Button: React.FC<ButtonProps> = ({ children }) => (
	<button className="sm:w-fit w-full font-sans-semibold text-button border-b border-custom-red border-solid">
		{children}
	</button>
)

export interface ButtonProps {
	children: ReactNode
}

export default Button