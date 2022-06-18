import React from 'react';
import './App.css';
import Products from "./admin/Products";
import ProductsCreate from "./admin/ProductsCreate";
import ProductsEdit from "./admin/ProductsEdit";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./main/Main";


function App() {
    return (
      <div className="App">
            <BrowserRouter>
                <Route path='/admin/products/:id/edit' exact component={ProductsEdit}/>
                <Route path='/admin/products/create' exact component={ProductsCreate}/>
                <Route path='/admin/products' exact component={Products}/>
                <Route path='/' exact component={Main}/>
            </BrowserRouter>
      </div>
  );
}

export default App;
