import React, { useContext } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import { MdClose } from 'react-icons/md';

const PaySystemDialog = ({ children, disabled, callback }) => {
	const { SHOW_PAYMENT_SYTEM_DIALOG = false, onShowPaymentSytemDialog } = useContext(GlobalContext);

	return (
		SHOW_PAYMENT_SYTEM_DIALOG && (
			<Modal size="lg" id="PaySystemDialog" show={SHOW_PAYMENT_SYTEM_DIALOG} onHide={onShowPaymentSytemDialog}>
				<Modal.Header>
					<div className="text-4">Выбирите способ оплаты</div>
					<Button Button onClick={onShowPaymentSytemDialog} className="btn-clear btn-close-dialog">
						<MdClose size="21px" />
					</Button>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					<Button disabled={disabled} size="sm" onClick={() => callback && callback()}>
						Оплатить
					</Button>
				</Modal.Footer>
			</Modal>
		)
	);
};

export default PaySystemDialog;
