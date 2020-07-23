import React, {useContext} from 'react';
import Alert from '../../../components/dialog/alert';
import { GlobalContext } from '../../../store/context';
import {FcAlarmClock} from 'react-icons/fc' 
import {Button,Row, Col} from 'react-bootstrap';
//import {navigate} from 'gatsby'
export default function SectionAlerts() {
    const {ALERT = [], onToggleAlert=(()=>{}), onClearBasket=(()=>{})} = useContext(GlobalContext);

    const handleClick = (type) => {
        onToggleAlert(type)(false);
        switch(type){
            case "bookingTimeOver":{
                onClearBasket();
               
                break;
            }
            case "bookingClear":{
                onClearBasket();
               
                break;
            }
            case "bookingError":{
                onClearBasket();
               
                break;
            }
            case "bookingSucces":{
                onClearBasket();
             
                break;
            }
            default: break;
        }
    }
	return <>
        {
            ALERT.map(({type,open = false,typeButtons=[],buttonsText=[],typeModal='', title, text},index)=>
                open == true &&
                <Alert open={open} callback={onToggleAlert(type)} typeModal={typeModal}>
                    {
                        type=="bookingTimeOver" ? <FcAlarmClock size="64"/> : null
                    }
                    <div className="modal_title">{title}</div>
                    {
                        Array.isArray(text) ? <ol className="modal_list">
                            {
                                text.map((item,index)=>
                                    <li key={`${index}_modal_list-item`} className="modal_list-item">
                                        {item}
                                    </li>
                                )
                            }
                        </ol>
                        : <div className="modal_text mb-3">{text}</div>
                    }
                    <Row md={2} className="w-100 justify-content-center">
                        {
                           typeButtons.length && 
                            typeButtons.map((item,index)=>
                                <Col>
                                    <Button variant={item} size="sm" className="btn-block" onClick={()=>handleClick(type)}>{buttonsText[index]}</Button>
                                </Col>
                            )
                        }
                    </Row>
                </Alert>
            )
        }  
    </>
}
