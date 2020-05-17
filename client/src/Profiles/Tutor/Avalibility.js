import React, { Component } from "react";

import { Helmet } from 'react-helmet';
const TITLE = 'Avaliablity';

export default class Avaliablity extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <h1>Avaliablity</h1>
            </>
        );
    }
}