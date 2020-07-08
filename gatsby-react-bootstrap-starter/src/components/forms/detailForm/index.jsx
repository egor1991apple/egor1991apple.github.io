import React, { Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import lang from './lang';
import { MdPlace, MdDateRange, MdPeople } from 'react-icons/md';
import { Link } from 'gatsby';
function MainSearchForm({ language = 'ru', type = null }, ref) {
	return (
		<Fragment>
			<Form id="bookingBus" className="d-block">
				<Form.Row>
					<Form.Group as={Col} controlId="date_departure" className="position-relative">
						{/* <Form.Label className="">{lang[language].date_departure.label}</Form.Label> */}
						<Form.Control
							type="text"
							placeholder={lang['ru'].date_departure.placeholder}
							value="21.02.2020"
						/>
						<span className="icon-inside">
							<MdDateRange />
						</span>
					</Form.Group>
					<Form.Group as={Col} controlId="date_arrival" className="position-relative">
						{/* <Form.Label className="">{lang[language].date_departure.label}</Form.Label> */}
						<Form.Control disabled type="text" placeholder={lang['ru'].date_arrival.placeholder} />
						<span className="icon-inside">
							<MdDateRange />
						</span>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="seats" className="position-relative">
					{/* <Form.Label className="">{lang[language].seats.label}</Form.Label> */}
					<Form.Control type="text" placeholder={lang[language].seats.placeholder} value="1 взр" />
					<span className="icon-inside">
						<MdPeople />
					</span>
				</Form.Group>
				<Link to="/offers1" className="text-white">
					<Button variant="primary" type="submit" className="btn-block">
						{lang[language].submit}
					</Button>
				</Link>
			</Form>
		</Fragment>
	);
}

export default React.forwardRef(MainSearchForm);
