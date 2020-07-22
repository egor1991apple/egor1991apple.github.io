import React, { useContext } from 'react';
import { Col, Card, Button, Form } from 'react-bootstrap';
import { useMaxPlacements } from '../../../hooks/useMaxPlacements';
import BookingFormPassenger from '../../../components/forms/booking/passenger';
import BookingFormBuyer from '../../../components/forms/booking/buyer';
import { GlobalContext } from '../../../store/context';
export default function PassengerList() {
	const maxPlacements = useMaxPlacements();

	const { onShowPaymentSytemDialog=(()=>{}),onToggleAgreementDialog=(()=>{}) } = useContext(GlobalContext);
	
	return (
		<Col lg="9">
			<Card className={`border-0`}>
				{(() => {
					const template = [];
					for (let i = 1; i <= maxPlacements; i++) {
						template.push(
							<Card.Body className={'border-bottom'}>
								<div className="text-6 mb-3">Пассажир №{i}</div>
								<p className="text-dark line-height-14 mb-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla molestias
									quibusdam corrupti temporibus, quidem ducimus quis ut sapiente doloribus quasi
									recusandae obcaecati cum harum? A nobis esse excepturi! Repudiandae?
								</p>
								<BookingFormPassenger indexPassenger={i} />
							</Card.Body>
						);
					}
					return template;
				})()}
			</Card>
			<Card className={`border-0`}>
				<Card.Body>
					<div className="text-6 mb-3">Информация о покупателе</div>
					<p className="text-dark line-height-14 mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla molestias quibusdam
						corrupti temporibus, quidem ducimus quis ut sapiente doloribus quasi recusandae obcaecati cum
						harum? A nobis esse excepturi! Repudiandae?
					</p>
					<BookingFormBuyer />
				</Card.Body>
				<div className="px-3">
					<Card.Footer className="mb-4 p-4 border rounded">
						<div className="text-6 mb-3 pb-2 d-flex border-bottom">
							К оплате: <span className="text-danger ml-auto">200 USD</span>
						</div>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sed alias, labore minus
							numquam amet possimus inventore quisquam iusto obcaecati aliquam aspernatur eveniet saepe
							dicta sint ea architecto nobis quod.
						</p>
						<div className="pb-3">
							<Form.Group controlId="formBasicCheckbox" className="d-flex mb-0">
								<Form.Check type="checkbox" />
								<Form className="Labl">
									Я принимаю{' '}
									<u className="cursor text-warning text-underline" onClick={onToggleAgreementDialog(0)}>
										условия пользовательского соглашения
									</u>{' '}
									lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Form>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox" className="d-flex mb-0">
								<Form.Check type="checkbox" />
								<Form className="Labl">
									Я даю{' '}
									<u className="cursor text-warning" onClick={onToggleAgreementDialog(1)}>
										согласие на обработку пользовательских данных
									</u>{' '}
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Form>
							</Form.Group>
						</div>
						<Button variant="danger" className="btn-block" onClick={onShowPaymentSytemDialog}>
							Оплатить
						</Button>
					</Card.Footer>
				</div>
			</Card>
		</Col>
	);
}
//
