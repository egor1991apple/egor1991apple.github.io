import React, { useContext } from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import Drawer from './dialog/drawer';
import { GlobalContext } from '../store/context';
import { MdPerson, MdLocalPhone } from 'react-icons/md';
import TopMobileMenu from './navs/topMobile';
import TopDesctopMenu from './navs/topDesctop';

const CustomNavbar = () => {
	const { onOpenAuthDialog } = useContext(GlobalContext);

	return (
		<Navbar collapseOnSelect expand="lg" className="w-100 bg-white shadow-sm">
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<img src="img/logo.svg" style={{ maxWidth: '150px' }} alt="sheddi" />
				</Navbar.Brand>
				<div className="d-none d-lg-flex ml-auto align-items-center">
					<TopDesctopMenu />
					<div className="vertical-line" />
					<table>
						<tbody>
							<tr>
								<td className="text-center">
									<img src="img/a1.png" style={{ height: '18px' }} alt="" />
								</td>
								<td>
									{' '}
									<a className="nav-link p-0" href="tel:3751111111">
										+375(11)-111-11-11
									</a>
								</td>
							</tr>
							<tr>
								<td className="text-center">
									<img src="img/mts.png" style={{ height: '14px' }} alt="" />
								</td>
								<td>
									<a className="nav-link p-0" href="tel:3751111111">
										+375(11)-111-11-11
									</a>
								</td>
							</tr>
						</tbody>
					</table>
					{/* <Button className="btn-auth btn-clear text-white" onClick={onOpenAuthDialog}>
						<span className="auth-icon">
							<MdLocalPhone size="18" />
						</span>
					</Button> */}
					<div className="vertical-line " />
					<Button className="btn-auth btn-clear" data-text="Войти" onClick={onOpenAuthDialog}>
						<span className="auth-icon text-white">
							<MdPerson size="18" />
						</span>
					</Button>
				</div>
				<div className="d-flex d-lg-none align-items-center">
					<button className={'btn-clear btn-animate'} onClick={onOpenAuthDialog}>
						<MdPerson size="28" className="cursor" />
					</button>

					<div className="vertical-line" />
					<TopMobileMenu />
				</div>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
