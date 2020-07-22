import React, { useContext } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import { MdClose } from 'react-icons/md';

// import useCreatePortal from '../../../hooks/useCreatePortal';

const AlertDialog = ({ type, typeModal, children, callback, open = false }) => {
	return (
		<Modal id={type} show={open} onHide={() => callback(false)} className={`modal_alert ${typeModal}`}>
			{children}
		</Modal>
	);
};

export default AlertDialog;
