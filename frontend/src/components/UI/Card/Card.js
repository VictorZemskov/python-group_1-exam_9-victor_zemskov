import React from 'react';
import {NavLink} from 'react-router-dom'
import a from '../../../logo.svg'


// компонент, который представляет собой карточку, основанную на стилях Bootstrap,
// и рисует карточку с указанным хедером, картинкой и ссылкой.
// проверки нужны на тот случай, чтобы в разметке не появлялись лишние отступы,
// если данные для какой-то части карточки не переданы и она выводится пустая.
// props.className позволяет принимать дополнительные классы для карточки по нуждам использующего компонента.
const Card = props => {
    // const isAdmin = localStorage.getItem('is_admin');
    return <div className={"card mt-3 text-center text-sm-left " + (props.className ? props.className : "")}>
        {props.image[0] ? <img className="card-img-top" src={props.image[0].photo}/> : <img className="card-img-top" src={a}/>}
        {props.header || props.text || props.link ? <div className="card-body">
            {props.header ? <h5 className="card-title">{props.header}</h5> : null}
            {props.text ? <p className="card-text">{props.text}</p> : null}
            {/* ссылка NavLink (из роутера) для навигации между "страницами" */}
            {/* принимает два параметра в одном "флаконе": link = {url, text}.  */}
            {props.link ? <NavLink to={props.link.url} className="btn btn-primary">
                {props.link.text}
            </NavLink> : null}
            {/*{isAdmin === "true" ? <button type="button" className="btn btn-danger ml-2" onClick={props.click}>Delete</button> : null}*/}
        </div> : null}
    </div>
};


export default Card;