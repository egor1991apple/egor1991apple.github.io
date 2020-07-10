import React from 'react';
import { Col } from 'react-bootstrap';
import MainSearchForm from '../../../components/forms/mainSearchForm';

export default function formOffers() {
	return (
		<Col lg="12" className="pt-3 zIndex">
			<MainSearchForm type="hor" />
		</Col>
	);
}
