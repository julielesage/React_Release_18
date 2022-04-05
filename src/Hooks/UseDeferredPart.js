import { useDeferredValue, useState } from "react";

/**
 * 
 * useDeferredValue(value) is hook that accepts a value and returns a new copy of the value 
 * that will defer to more urgent updates. The previous value is kept until urgent updates have completed. 
 * Then, the new value is rendered. This hook is similar to using debouncing or throttling to defer updates.
 */
const SlowUI = () => (
	<>
		{Array(50000)
			.fill(1)
			.map((_, index) => (
				<span key={index}>{10000} </span>
			))}
	</>
);

const UseDeferredPart = () => {
	const [value, setValue] = useState(0);
	const deferredValue = useDeferredValue(value);

	const handleClick = (e) => {
		e.preventDefault();
		setValue(value + 1);
	}

	/****RESULT :
 * the UI increases the button number first, 
 * and the deferred value is updated after a nick of time.
 */

	return (
		<>
			<h2>USE DEFERRED</h2>
			<button onClick={handleClick}>{value}</button>
			<div>Deferred value : {deferredValue}</div>
			<div>
				{/* <SlowUI /> */}
			</div>
		</>
	);
};

export default UseDeferredPart;