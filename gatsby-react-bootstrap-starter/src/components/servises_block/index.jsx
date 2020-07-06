import React, { useContext, Fragment, useMemo } from 'react';
import { GlobalContext } from '../../store/context';

import { FaBed, FaVideo, FaCoffee, FaWifi, FaRestroom } from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { IoMdSnow } from 'react-icons/io';
export default function ServisesBlock({ includeServises = [] }) {
	const { ROUTE_SERVISES = [] } = useContext(GlobalContext);
	const renderTemplate = useMemo(
		() => {
			return ROUTE_SERVISES.filter(({ id }) => includeServises.find((item) => item == id));
		},
		[ includeServises ]
	);

	return (
		<Fragment>
			{ROUTE_SERVISES.map(({ id, title, icon, text }, index) => (
				<div
					key={title}
					className=" text-center border p-2  mr-2 rounded d-flex flex-column align-items-center mt-2"
				>
					{id == 1 && <FaWifi size="18" />}
					{id == 2 && <FaCoffee size="18" />}
					{id == 3 && <FaBed size="18" />}
					{id == 4 && <FaVideo size="18" />}
					{id == 5 && <GiElectric size="18" />}
					{id == 6 && <IoMdSnow size="18" />}
					{id == 7 && <FaRestroom size="18" />}

					<small className="d-inline-block text-truncate text-uppercase" style={{ width: '45px' }}>
						{title}
					</small>
				</div>
			))}
		</Fragment>
	);
}
