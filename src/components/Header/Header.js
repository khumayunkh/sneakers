import React from "react";
import style from './header.module.css'
import logo from './../../img/logo.png'
import search from './../../img/search.png'
import client from './../../img/client.png'

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
            <div className={style.main}>
                <div className={style.information}>
                    <h1>Get your awesome sneakers.</h1>
                    <h2>We offer the best deals in our shop. Check them out now. 
                        We have awesome stuff on sale for you.
                    </h2>
                    <div className={style.button}>
                        <button className={style.btn_main}>Shop Now</button>
                        <div className={style.heart}></div>
                    </div>
                    <div className={style.check}>
                        <div className={style.check_in}>
                            <div className={style.round}>
                                <input type="checkbox" checked id="checkbox" />
                                <label for="checkbox"></label>
                            </div>
                            <h3>Free shipping</h3>
                        </div>
                        <div className={style.check_in}>
                            <div className={style.round}>
                                <input type="checkbox" checked id="checkbox_2"/>
                                <label for="checkbox"></label>
                            </div>
                            <h3>Free returns</h3>
                        </div>
                    </div>
                </div>
                <div className={style.client}>
                    <div className={style.client_in}>
                        <img src={client}/>
                        <h1 className="client_title">
                            <span className={style.client_title_main}>Joan</span>
                            <span className={style.client_title_secondary}> 
                                has just purchased
                                these sneakers now.
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header