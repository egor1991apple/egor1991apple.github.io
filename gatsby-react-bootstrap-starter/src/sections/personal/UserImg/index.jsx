import React, { useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import { MdPerson } from 'react-icons/md';

export default function UserImg() {
	const { USER_INFO = null } = useContext(GlobalContext);

	return (
		USER_INFO && (
			<div className="mx-auto">
				<img src={USER_INFO.photo} alt="user" />
				<div className="text-center mt-2">
					<MdPerson size="18" /> {USER_INFO.last_name && USER_INFO.last_name}{' '}
					{USER_INFO.name && USER_INFO.name} {USER_INFO.second_name && USER_INFO.second_name}{' '}
				</div>
			</div>
		)
	);
}
