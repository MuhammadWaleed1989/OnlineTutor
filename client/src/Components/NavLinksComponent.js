import data from '../data/data.json';
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { createFilter } from '../util/Filter';

export default class NavLinks extends Component {


    state = {
        filters: this.props.filters
    }

    static defaultProps = {
        filters: [{
            property: 'linkfor',
            value: ''
        }],
    }
    // componentDidMount() {
    //     this.onLoad(data);
    // }

    // parseData(data) {
    //     return data;
    // }

    // onLoad = (data) => {

    //     this.setState({
    //         data: this.parseData(data)
    //     });
    // }

    render() {

        //const { data } = this.state;

        return this.renderData(data)
    }

    renderData(data) {
        if (data && data.length) {
            const { filters } = this.state;
            filters[0].value = this.props.linktype;
            if (Array.isArray(filters) && filters.length) {
                data = data.filter(createFilter(...filters));
            }
            return (

                data.map((item, index) => (
                    <li key={index}>
                        <Link to={`/${item.path}`}><span>{item.linkText}</span></Link>
                    </li>
                ))

            );
        } else {
            return <li>No items found</li>
        }
    }

}