import { useId } from "react";

/**
 * useId() is a hook that generates a unique id:
 * is stable across the server and client, which avoids hydration mismatches for server-side rendering.
 * This id can be appended with prefix and/or suffix to generate multiple unique ids 
 * that are used in a component.
 */
const Comp1 = () => {
	const id = useId();
	return <div>Comp1 id({id})</div>;
}

// the for attribute must be equal to the id attribute of the related element to bind them together.
const Comp2 = () => {
	const id = useId();
	return (
		<>
			<div>Comp2 id({id})</div>
			<label htmlFor={`${id}-1`}>Label 1</label>
			<div>
				<input id={`${id}-1`} type="text" />
			</div>
			<label htmlFor={`${id}-2`}>Label 2</label>
			<div>
				<input id={`${id}-2`} type="text" />
			</div>
		</>
	);
};

// the aria-labelledby attribute could take multiple ids.
const Comp3 = () => {
	const id = useId();
	return (
		<>
			<div>Comp3 id({id})</div>
			<div aria-labelledby={`${id}-a ${id}-b ${id}-c`}>I am Comp3</div>
		</>
	);
}

const UseIdPart = () => {
	return (
		<>
			<h2>USE ID</h2>
			<Comp1 />
			<Comp2 />
			<Comp3 />
		</>
	);
};

export default UseIdPart;