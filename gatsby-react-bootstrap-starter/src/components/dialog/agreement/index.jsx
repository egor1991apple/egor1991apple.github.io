import React from 'react'

import { Modal, Button } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import { MdClose } from 'react-icons/md';
import htmlAgreement from '../../../store/agreement.json';
import htmlUserTerms from '../../../store/userterms.json';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useContext } from 'react';


export default function AgreementDialog(type) {
   
    const {AGREEMENT_DIALOGS = [],onToggleAgreementDialog=(()=>{})} = useContext(GlobalContext);
    const index = AGREEMENT_DIALOGS.indexOf(AGREEMENT_DIALOGS.find((item,index)=>item == true));

    const htmlData =  ReactHtmlParser(index == 1 ? htmlAgreement.data : htmlUserTerms.data);
    return (
        <Modal size="lg" id="PaySystemDialog" show={AGREEMENT_DIALOGS[index]} onHide={onToggleAgreementDialog(index)}>
				
				<Modal.Body>
                <Button Button  className="btn-clear btn-close-dialog">
						<MdClose size="21px" onClick={onToggleAgreementDialog(index)}/>
					</Button>
                    <div className="mt-4">
                    {ReactHtmlParser(htmlData)}
                    </div>
                    </Modal.Body>

			</Modal>
    )
}
