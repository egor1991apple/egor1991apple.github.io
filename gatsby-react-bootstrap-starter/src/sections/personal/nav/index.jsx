import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import VerticalNav from '../../../components/navs/veticalNav';
export default function PersonalNavSection() {
	const { PERSONAL_NAV = [] } = useContext(GlobalContext);
	return <VerticalNav data={PERSONAL_NAV} />;
}
