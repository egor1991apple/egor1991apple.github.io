import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../../store/context';
import { Col, Row, Button } from 'react-bootstrap';
import MapDialog from '../../../components/dialog/mapDialog';
import RoutePoints from '../../../components/cards/routePoints';
import DetailSearchForm from '../../../components/forms/detailForm';
import {MdClose} from 'react-icons/md';


export default function LeftSection() {
	const { ROUTE_DETAIL = {} } = useContext(GlobalContext);
	const { points = [] } = ROUTE_DETAIL;
	const FormRef = useRef(null);


	const showDetailSearchForm = () =>{
		FormRef.current.classList.toggle('active');
	}

	return (
		<>
		<div className="mobileContolShowDrawer">
			<Button onClick={showDetailSearchForm}>Поиск билетов</Button>
		</div>
		<Col lg="4" className="py-3">
			<div ref={FormRef} className="mobileFormDrawer">
				<div className="mobileFormDrawerContainer  ">
				<MdClose className={"cursor ml-auto mb-3 d-lg-none"} onClick={showDetailSearchForm} size="24px"/>	
				<DetailSearchForm />
				</div>
			</div>
			<hr />
			<Row>
				<Col md="6" lg="12">
				<MapDialog points={points} />
				</Col>
				<Col md="6" lg="12">
				<RoutePoints points={points} />
				</Col>
			</Row>
		</Col>
		</>
	);
}
