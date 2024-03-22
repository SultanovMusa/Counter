import { useState } from "react";
import scss from './Counter.module.scss'
const Counter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};
	const minus = () => {
		if (count === 0) {
			alert("Бутту ");
		} else {
			setCount(count - 1);
		}
	};
	return (
		<div className={scss.container}>
			<h1 className={scss.h1}>Counter</h1>
			<button className={scss.h1} onClick={plus}>+</button>
			<p className={scss.h1}>{count}</p>
			<button className={scss.h1} onClick={minus}>+</button>
		</div>
	);
};

export default Counter;
