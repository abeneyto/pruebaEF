import React, { Component } from 'react';
import './category-component.css';
var data = require('../../../data.json');
const categories = data.category;
class Category  extends Component {

    render(){
        return <section className="d-flex flex-wrap p-3">
         <h2 className="titleSection px-3 col-12">CATEGORY</h2>
    {categories.map((category, index) => (
        <div className="col-6 col-md-4 p-3" key={category.post_id}>
           <h4 className="categories">{category.category.name} |<span> {category.subcategory.name}</span></h4>
            <h3 className="titleCategory">{category.title}</h3>
            <div className="d-flex flex-wrap flex-sm-column-reverse flex-lg-column">
                <p className="col-12">{category.summary}</p>
                <img src={category.cover_image.url} className="imgCategory col-12" >
                </img>
            </div>
            </div>
     
    ))}
        </section>;
    }
}
export default Category;