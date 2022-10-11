import React from "react";
import style from './header.module.css'
import logo from './../../img/logo.png'
import search from './../../img/search.png'

function Header(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <img className={style.logo} src={logo}/>
                <div className={style.menu}>
                    <a className={style.menu_in}>Footwear</a>
                    <a className={style.menu_in}>About us</a>
                    <a className={style.menu_in}>Products</a>
                    <a className={style.menu_in}>Sale</a>
                </div>
                <img className={style.search} src={search}/>
            </div>
        </div>
        </>
    )
}

export default Header