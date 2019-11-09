import React from "react";

export default function LocationCard(props) {
   const { name, type, dimension, residents } = props;
	return (
		<div>
			<p>{name}</p>
      <p>{type} - {dimension}</p>
      <p>{residents}</p>
		</div>
	)
;
}
