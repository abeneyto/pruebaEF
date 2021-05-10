import React, { Fragment } from 'react';
import Category from './components/category/category-component';
import Cover from "./components/cover/cover-component";
import Navbar from "./components/navbar/navbar-component";

const MainComponent = () => (
    <Fragment>
        <Navbar></Navbar>
        <Cover></Cover>
        <Category></Category>
    </Fragment>
);

export default MainComponent;