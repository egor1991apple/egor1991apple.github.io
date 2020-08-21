import React from 'react';
import { Button } from 'react-bootstrap';
export default function mapDialog() {
	return (
		<div>
			<Button className="btn-clear rounded overflow-hidden mb-3" style={{ height: 'auto', maxHeight:300 }}>
				<img src="/img/map.png" alt="map" className="img-fluid " />
			</Button>
		</div>
	);
}
