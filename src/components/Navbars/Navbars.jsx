import React from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "../navbar/navbar";

import "./navbars.css";


class Navbars extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: { backgroundColor: '#131921', color: '#fff' },
        }

    }

    sayHi = () => {
        console.log("Hello");
    }

    render () {
        return(
        <>
  
            <Navbar style={this.state.style} >
                <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FSP4vFLV5nyB3DXr3jb74g7.jpg&f=1&nofb=1&ipt=59298c89df85afa71c9ff1268f6e6424ef1cc826d81e83f3d8cbb9b6fb7312e2&ipo=images"
                    alt="A picture of Prime."
                    id="logo"
                />
                <button onClick={this.sayHi}>
                    Hi!
                </button>
                <div>
                    I AM A SEARCH BAR
                </div>
                <div>
                    HOVER COMPONENT
                </div>
                <div>
                    HOVER COMPONENT
                </div>
                <button onClick={this.sayHi}>
                    CART
                </button>

            </Navbar>
            
            {/* <Navbar bgcolor='#232F3E' txtcolor='#fff' /> */}

        </>);
    }
}

Navbars.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape(
            { 
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }
        )
    )
}

export default Navbars;