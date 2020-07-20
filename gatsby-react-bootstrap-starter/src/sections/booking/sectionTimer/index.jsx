import React from 'react';
import { Col } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import Timer from '../../../components/timer';
const SectionTimer = () => {
	const OPTIONS = { prefix: 'seconds elapsed!', delay: 1000 };
	return (
		<Col lg="3" className="ml-auto pb-3">
			<div className="bg-danger  text-white rounded w-100 d-flex align-items-center">
				<div className="text-4 py-2 px-3 text-white border-right flex-grow-1">Заказ №1234</div>
				<div className="text-4 py-2 px-3 text-white border-right">
					<Timer options={OPTIONS} />
				</div>
				<div className="px-2">
					<MdClose className="cursor text-white " size="32" />
				</div>
			</div>
		</Col>
	);
};

export default SectionTimer;
