import React from 'react';

export const OutLink = () => (
	<a
		className={`qualtrics-link qualtrics-link__`}
		href=''
		target="_blank"
		rel="noopener noreferrer"
	>{props.children}
	</a>
);