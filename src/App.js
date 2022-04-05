import './App.css';
import UseTransitionPart from './Hooks/UseTransitionPart';
import UseDeferredPart from './Hooks/UseDeferredPart';
import UseIdPart from './Hooks/UseIdPart';
import UseSyncExternalStore from './Hooks/UseSyncExternalStorePart';

function App() {
	return (
		<div className="App">
			<UseTransitionPart />
			<UseDeferredPart />
			<UseIdPart />
			<UseSyncExternalStore />


		</div>
	);
}

export default App;
