import React from 'react';

const Component2 = (props) => {
	return (
		<div className={props.name}>
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
};

export default Component2;
