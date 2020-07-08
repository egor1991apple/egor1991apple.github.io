import React from 'react';
import { Button } from 'react-bootstrap';
export default function mapDialog() {
	return (
		<div>
			<Button className="btn-clear rounded overflow-hidden" style={{ height: 'auto' }}>
				<img src="map.png" alt="map" className="img-fluid" />
			</Button>
		</div>
	);
}
