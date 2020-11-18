import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <div style={{width: "50%", textAlign: "center"}}>
                    <p style={{color: "white"}}>© 2020 Travelize</p>
                </div>
                <div style={{width: "50%", textAlign: "center"}}>
                    <p style={{color: "white"}}>Privacy Policy Terms and conditions</p>
                </div>
            </div>
        )
    }
}