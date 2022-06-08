import React, { ReactNode } from "react"

const Stack: React.FC<StackProps> = ({ children }) => (
	<div className="flex flex-col gap-y-5">
		{children}
	</div>
)

export interface StackProps {
	children: ReactNode
}

export default Stack;