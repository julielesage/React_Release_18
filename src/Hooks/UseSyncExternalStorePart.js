import { useSyncExternalStore } from "react";

/**
 * 
 * useSyncExternalStore is a hook recommended for reading and subscribing from external data sources (stores).
 * This method accepts three arguments:
 *** subscribe: It is a function to register a callback that is called whenever the store changes.
 *** getSnapshot: It is function that returns the current value of the store.
 *** getServerSnapshot: It is function that returns the snapshot used during server rendering. This is an optional parameter.
 * This method returns the value of the store, state.
 */
const UseSyncExternalStorePart = () => {
	const width = useSyncExternalStore(
		// subscribe
		(listener) => {
			window.addEventListener('resize', listener);
			return () => {
				window.removeEventListener('resize', listener);
			};
		},
		// get snapshot
		() => window.innerWidth
		// get server rendering snapchot
		// () => -1,
	);
	return <p>Size: {width}</p>;
};

export default UseSyncExternalStorePart;