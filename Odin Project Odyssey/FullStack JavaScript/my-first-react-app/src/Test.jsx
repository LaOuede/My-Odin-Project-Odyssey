import React, { useState } from "react";

const Example = () => {
	const [change, setChange] = useState(true);
	return (
		<div>
			<button onClick={ () => setChange(!change) }>
				Click Here!
			</button>
			{ change ? (
				<h1>Kawabonga!</h1>
			) : (
				<h1>Bangerang Peter!</h1>
			)}
		</div>
	);
};

export default Example;