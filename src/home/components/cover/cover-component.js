import React, { Component } from 'react';
import './cover-component.css';
var data = require('../../../data.json');
const cover = data.cover[0];
class Cover  extends Component {

    render(){
        return <section  className="d-flex p-0 p-lg-3">
            <div className="textCover col-12 col-md-4 p-5">
            <h4 className="categories">{cover.category.name} |<span> {cover.subcategory.name}</span></h4>
               <h2>{cover.title}</h2>
               <p>{cover.summary}</p>
            </div>
            <img src={cover.cover_image.url} className="imgCover col-12 col-md-8" >
            </img>
        </section>;
    }
}
export default Cover;