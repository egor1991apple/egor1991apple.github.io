import React, { useEffect } from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainSearctionFormVerticalSlider from '../sections/mainPage/mainSearchFormVerticalSlider';
import SectionFormHorizontal from '../sections/allPages/SearchFormHorizontal';
import MainSectionServises from '../sections/mainPage/mainServises';
import MainSectionWhyWeAre from '../sections/mainPage/mainWhyWeAre';
//import MainSectionQuestionAnswer from '../sections/mainPage/mainQuestionAnswer';
import MainSectionNews from '../sections/mainPage/mainNews';

const IndexPage = () => {
	
	return (
		<Layout pageInfo={{ pageName: 'index' }}>
			<SEO title="Home" keywords={[ `gatsby`, `react`, `bootstrap` ]} />
			<SectionFormHorizontal/>
			{/* <MainSearctionFormVerticalSlider /> */}
			<MainSectionServises />
			<MainSectionWhyWeAre />
			<MainSectionNews />
		</Layout>
	);
};

export default IndexPage;
