import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import ListOffers from './listOffers';



export default function PersonalOffers() {
	const { CURRENT_OFFERS = [], ALL_STATUS = [] } = useContext(GlobalContext);


	return <>
	{
		CURRENT_OFFERS.length > 0 &&	
			CURRENT_OFFERS.map((item,index)=>{
			return <ListOffers key={`personal_offer_${index}`} index={index}/>
		})
	}
	</>
}
