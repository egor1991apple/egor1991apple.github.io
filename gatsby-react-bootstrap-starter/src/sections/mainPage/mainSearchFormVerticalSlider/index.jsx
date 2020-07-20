import React from 'react';
import TransferForm from '../../../components/forms/mainSearchForm';
import ShopTourForm from '../../../components/forms/shopTour';
import MainFormSlider from '../../../components/sliders/mainFormSlider';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
export default function mainSearchFormVerticalSlider() {
	return (
		<section className="py-5">
			<Container className="">
				<Row noGutters className=" bg-light shadow-md rounded p-3">
					<Col md="5" className="pr-md-3 custom-tabs">
						<Tabs defaultActiveKey="Transfer" id="tab-form" className="text-4 justify-content-center ">
							<Tab eventKey="Transfer" title="Траснферы" className="pt-3">
								<TransferForm />
							</Tab>
							<Tab eventKey="ShopTour" title="Шоп-туры" className="pt-3">
								<ShopTourForm />
							</Tab>
						</Tabs>
					</Col>
					<Col md="7" className="pl-md-3 pt-3 pt-md-0">
						<MainFormSlider />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
