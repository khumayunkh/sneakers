import React from "react";
import style from './arrivals.module.css'
import sneakers from './../../img/arrivals_1.png'
import sneakers2 from './../../img/arrivals_2.png'
import sneakers3 from './../../img/arrivals_3.png'

function Arrivals(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.title}>
                    <h2>New arrivals</h2>
                    <h3>View all &#62;</h3>
                </div>
                <h4>Enjoy the new products from our store. 
                    Select what you like, enjoy & return.
                </h4>
            </div>
        </div>
        </>
    )
}

export default Arrivals