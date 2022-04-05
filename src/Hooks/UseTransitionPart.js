import { useEffect, useTransition, useState } from "react";

/****************
 *  useTransition() returns the transition state and a function to start the transition.
 * React state updates are classified into two categories:
 * Urgent updates — They reflect direct interaction, such as typing, clicking, pressing, dragging, etc.
 * Transition updates — They transition the UI from one view to another.*/
/**************** */
const SlowUI = ({ value }) => (
	<>
		{Array(value).fill(1)
			.map((_, index) => (
				<span key={index}>{value - index}</span>
			))}
	</>
)

const UseTransitionPart = () => {
	const [isPending, startTransition] = useTransition();
	const [value, setValue] = useState(0);
	const [value2, setValue2] = useState(50000);

	const handleClick = (e) => {
		e.preventDefault();
		setValue(value + 1);
		startTransition(() => setValue2(value2 + 1))
	}

	/****RESULT :
	 * value is urgent update, goes instantly
	 * value2 takes more time, while "isPending" the span is grey, and become black when transition is done
	 * If you do not need to show special UI for isPending, startTransition can be imported from 'react'.
	 * => import { startTransition } from 'react';
	 */

	return (
		<>
			<h2>USE TRANSITION</h2>
			<button onClick={handleClick}>{value}</button>
			<div style={{ opacity: isPending ? 0.5 : 1, width: "80%" }}>
				{/* <SlowUI value={value2} /> */}
			</div>
		</>
	);
};

export default UseTransitionPart;