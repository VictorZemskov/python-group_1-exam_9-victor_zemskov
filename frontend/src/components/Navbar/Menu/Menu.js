import React, {Component, Fragment} from 'react'
import MenuItem from "./MenuItem/MenuItem";


class Menu extends Component {
    state = {
        collapse: true
    };

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    render() {
        const username = localStorage.getItem('username');
        // является строкой, поэтому сравниваем с "true"
        const isAdmin = localStorage.getItem('is_admin');
        return <Fragment>
            <button onClick={this.toggle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : "") + " navbar-collapse"}
                 id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Товары</MenuItem>
                    {/*<MenuItem to="/halls">Залы</MenuItem>*/}
                    {/*{isAdmin === "true" ? [ <MenuItem to="/movies/add">Добавить фильм</MenuItem>,*/}
                                            {/*<MenuItem to="/halls/add">Добавить зал</MenuItem> ]: null}*/}
                </ul>

                <ul className="navbar-nav ml-auto">
                    {username ? [
                        <MenuItem to={"/users/" + username}>{username}</MenuItem>,
                        <MenuItem to="/logout" key="logout">Выйти</MenuItem>
                    ] : [
                        <MenuItem to="/login" key="login">Войти</MenuItem>,
                        <MenuItem to="/register" key="register">Зарегистрироваться</MenuItem>
                    ]}
                </ul>
            </div>
        </Fragment>
    }
}


export default Menu