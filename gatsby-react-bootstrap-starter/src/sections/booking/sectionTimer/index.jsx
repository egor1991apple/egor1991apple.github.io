import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import Timer from '../../../components/timer';
import { GlobalContext } from '../../../store/context';
const SectionTimer = () => {
	const { onToggleAlert = () => {}, TIMER='1200' } = useContext(GlobalContext);

	return (
		<Col lg="3" className="ml-auto pb-3">
			<div className="bg-danger  text-white rounded w-100 d-flex align-items-center">
				<div className="text-4 py-2 px-3 text-white border-right flex-grow-1">Заказ №1234</div>
				<div className="text-4 py-2 px-3 text-white border-right">
					<Timer startTime={TIMER} Done={onToggleAlert('bookingTimeOver')} />
				</div>
				<div className="px-2">
					<MdClose
						className="cursor text-white "
						size="32"
						onClick={() => onToggleAlert('bookingClear')(true)}
					/>
				</div>
			</div>
		</Col>
	);
};

export default SectionTimer;
