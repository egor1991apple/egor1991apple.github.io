import React, { useContext } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import { MdClose } from 'react-icons/md';

import useCreatePortal from '../../../hooks/useCreatePortal';

const PlacementDialog = ({ children, callback = () => {}, disabled = true }) => {
	const { OPEN_PLACEMENT_DIALOG = false, onOpenPlacementDialog = null, lang = 'ru' } = useContext(GlobalContext);

	return (
		<Modal size="lg" id="PlacementDialog" show={OPEN_PLACEMENT_DIALOG} onHide={onOpenPlacementDialog}>
			<Modal.Header>
				<div className="text-4">Выбирите места посадки в транспорте</div>
				<Button Button onClick={() => onOpenPlacementDialog()} className="btn-clear btn-close-dialog">
					<MdClose size="21px" />
				</Button>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button onClick={callback} size="sm" disabled={disabled}>
					В корзину
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default PlacementDialog;
