import React, {Component} from 'react'
import {PRODUCTS_URL} from "../../api-urls";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import axios from 'axios';
import a from '../../logo.svg'
import SimpleSlider from "../../components/UI/Slider/Slider";

// компонент, который выводит одну карточку с фильмом
// фильм также загружается при выводе компонента на экран (mount),
// а не при обновлении (didUpdate), т.к. компонент выводится на отдельной странице,
// и при переключении страниц исчезает с экрана, а потом снова маунтится.
class ProductDetail extends Component {
    state = {
        product: null,
        // shows: null
    };
    componentDidMount() {
        // match - атрибут, передаваемый роутером, содержащий путь к этому компоненту
        const match = this.props.match;

        // match.params - переменные из пути (:id)
        // match.params.id - значение переменной, обозначенной :id в свойстве path Route-а.
        axios.get(PRODUCTS_URL + match.params.id)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(product => {
                this.setState({product});

                // Загрузка расписания показов
                // this.loadShows(product.id);
            })
            .catch(error => console.log(error));
    }



    render() {
        // если movie в state нет, ничего не рисуем.
        if (!this.state.product) return null;
        // достаём данные из movie
        const {name, photos, description, price,category, id} = this.state.product;
        return <div>
            {/* постер, если есть */}
            {photos.length > 0 ? <div className='row'>
                <div className="col col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto card m-3" style={{"width": "40rem"}}>
                    {/*<img className="img-fluid rounded" src={photos[0].photo} alt={"фото"}/>*/}
                    <SimpleSlider photos={photos}/>
                </div>
            </div> : <div className='row'>
                <div className="col col-xs-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
                    <img className="img-fluid rounded" src={a}/>
                </div>
            </div>}

            {/* название фильма */}
            <h1>{name}</h1>

            {description ? <h4>{description}</h4> : null}

            <h4>Цена: {price} сом</h4>

            {/* категории, если указаны */}
            {category.length > 0 ? <ProductCategories category={category}/> : null}


        </div>;
    }
}


export default ProductDetail;