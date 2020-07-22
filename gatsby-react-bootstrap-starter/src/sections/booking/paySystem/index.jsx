import React, { useContext } from 'react';
import PaySystemDialog from '../../../components/dialog/paySystem';
import PaySystemCard from '../../../components/cards/paySystem';
import { GlobalContext } from '../../../store/context';
export default function PaymentSystem() {
	const { PAYMENT_SYSTEM = [], onSelectPaymentSystem, onBooking } = useContext(GlobalContext);

	const disabled = PAYMENT_SYSTEM.filter(({ checked }) => checked == true || checked == 'true').length ? false : true;

	return (
		PAYMENT_SYSTEM.length && (
			<PaySystemDialog disabled={disabled} callback={onBooking}>
				{PAYMENT_SYSTEM.map((item, index) => (
					<div key={`${index}_paySystem`} className={`${index != PAYMENT_SYSTEM.length && 'pb-2'}`}>
						<PaySystemCard {...item} callback={onSelectPaymentSystem} />
					</div>
				))}
			</PaySystemDialog>
		)
	);
}
