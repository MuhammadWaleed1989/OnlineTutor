import React, { Component } from "react";

import { Helmet } from 'react-helmet';
const TITLE = 'Payments';

export default class Payments extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <h1>Payments</h1>
            </>
        );
    }
}