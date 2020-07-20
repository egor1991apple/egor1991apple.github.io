import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { GlobalContext } from '../../store/context';
import lang from './lang.json';
export default function MainFormSlider() {
	const { MAIN_SLIDER_SLIDS = null } = useContext(GlobalContext);

	return (
		<Carousel>
			{MAIN_SLIDER_SLIDS &&
				MAIN_SLIDER_SLIDS.map(({ img = null, title = null, subtitle = null, link = null }, index) => {
					return (
						<Carousel.Item key={`${index}_mainSlider`} className="position-relative rounded oveflow-hidden">
							<img className="img-cover" src={img || ''} alt={title || ''} />
							<Carousel.Caption
								className="h-100 d-flex justify-content-center align-items-center flex-column"
								style={{ bottom: 0 }}
							>
								{title ? <span className="text-white text-shadow text-8 mb-3">{title}</span> : ''}
								{subtitle ? <p>{subtitle}</p> : ''}
								{link ? (
									<a href={link || ''} className="text-white text-shadow text-3">
										{lang['ru'].link}...
									</a>
								) : (
									''
								)}
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);
}
