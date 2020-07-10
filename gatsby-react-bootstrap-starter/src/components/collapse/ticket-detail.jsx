import React, { useState, Fragment, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Collapse } from 'react-bootstrap';

export default function CollapseOffers({ title, children }) {
	const [ open, setOpen ] = useState(false);
	const collapsedScroll = useRef(null);
	useEffect(
		() => {
			if (open) {
				function getCoords(elem) {
					// кроме IE8-
					var box = elem.getBoundingClientRect();
					return box.top + window.pageYOffset;
				}
				setTimeout(() => {
					const scrollPosition = getCoords(collapsedScroll.current) - 50;

					typeof window != 'undefined' &&
						window.scrollTo({
							top: scrollPosition,
							behavior: 'smooth'
						});
				}, 300);
			}
		},
		[ open ]
	);
	return (
		<Fragment>
			<a
				className={`d-flex justify-content-end nav-link cursor py-1 px-1 align-items-center`}
				onClick={(e) => {
					e.preventDefault();
					setOpen(!open);
				}}
			>
				<span>{title}</span>
				<MdKeyboardArrowDown
					size="21"
					style={{ transition: 'transform .3s', transform: `rotate(${!open ? '0deg' : '180deg'})` }}
				/>
			</a>
			<Collapse in={open}>
				<div id="children">
					<div className="d-flex flex-column border-top-dashed">
						<div ref={collapsedScroll} className="container-fluid">
							{children}
						</div>
					</div>
				</div>
			</Collapse>
		</Fragment>
	);
}
