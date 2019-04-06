import React, {Fragment, Component} from 'react'
import {PRODUCTS_URL} from "../../api-urls";
import ProductCard from "../../components/ProductCard/ProductCard";
import {NavLink} from "react-router-dom";
import axios from 'axios';


// компонент для показа списка фильмов клиенту
// фильмы запрашиваются из API в момент показа компонента на странце (mount)
class ProductList extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        // const headers = {
        //     Authorization: 'Token ' + localStorage.getItem('auth-token')
        // };
        axios.get(PRODUCTS_URL
        )
            .then(response => {console.log(response.data); return response.data;})
            .then(products => this.setState({products}))
            .catch(error => console.log(error));
    }

    productDeleted = (productId) => {
        axios.delete(PRODUCTS_URL + productId + '/', {
            headers: {'Authorization': 'Token ' + localStorage.getItem('auth-token')}
        }).then(response => {
            console.log(response.data);
            this.setState(prevState => {
                let newState = {...prevState};
                let products = [...newState.products];
                let productIndex = products.findIndex(product => product.id === productId);
                products.splice(productIndex, 1);
                newState.products = products;
                return newState;
            })
        }).catch(error => {
            console.log(error);
            console.log(error.response);
        })
    };

    render() {
        return <Fragment>
            {/*<p><NavLink to='/movies/add'>Добавить фильм</NavLink></p>*/}
            <div className='row'>
                {this.state.products.map(product => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4 mt-3'  key={product.id}>
                        <ProductCard product={product} onDelete={() => this.productDeleted(product.id)}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}


export default MovieList;