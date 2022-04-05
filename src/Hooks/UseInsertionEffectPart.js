import { useInsertionEffect, useLayoutEffect, useEffect } from "react";

/**
 * useInsertionEffect is the hook to be used 
 * if we want it to fire before all DOM mutations. 
 * However, useInsertionEffect is intended for CSS-in-JS libraries. 
 * For normal application developers, useEffect or useLayoutEffect are used more commonly.
 * 
 * These effects are called in the following order:
 *** useInsertionEffect child is called.
 *** useInsertionEffect app is called.
 *** useLayoutEffect child is called.
 *** useLayoutEffect app is called.
 *** useEffect child is called.
 *** useEffect app is called.
 *** useLayoutEffect child is called.
 *** useLayoutEffect app is called.
 *** useEffect child is called.
 *** useEffect app is called.
 *
 * in dev StrictMode, they are called twice, except for useInsertionEffect.
 */
const Child = () => {
	useEffect(() => {
		console.log('useEffect child is called');
	});
	useLayoutEffect(() => {
		console.log('useLayoutEffect child is called');
	});
	useInsertionEffect(() => {
		console.log('useInsertionEffect child is called');
	});
};


const UseInsertionEffectPart = () => {
	useEffect(() => {
		console.log('useEffect app is called');
	});
	useLayoutEffect(() => {
		console.log('useLayoutEffect app is called');
	});
	useInsertionEffect(() => {
		console.log('useInsertionEffect app is called');
	});
	return (
		<div className="App">
			<Child />
			<p>Random Text</p>
		</div>
	);
};

export default UseInsertionEffectPart;