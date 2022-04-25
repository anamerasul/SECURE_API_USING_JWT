import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = ({ port }) => {
    return (
        <>

            <PageTitle title="home">

            </PageTitle>
            {/* <Helmet>
                <title>Home - Geneius car</title>
            </Helmet> */}
            <Banner></Banner>
            <Services port={port}></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;