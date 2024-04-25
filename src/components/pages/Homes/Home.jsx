import React from 'react';

import "./style.css";

import Content from '../../Content/Content';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'

class Home extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return <>
            <main id='home-main'>
                <Header />
                <Content />
                <Footer />
            </ main>
        </>
    }
}

export default Home;