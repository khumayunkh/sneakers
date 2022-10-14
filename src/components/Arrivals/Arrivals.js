import React from "react";
import style from './arrivals.module.css'
import sneakers from './../../img/arrivals_1.png'
import sneakers2 from './../../img/arrivals_2.png'
import sneakers3 from './../../img/arrivals_3.png'
import star from './../../img/stars.png'

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
            <div className={style.arrivals}>
                <div className={style.arrivals_in}>
                    <div className={style.sneakers}>
                        <div className={style.sneakers_img_1}>
                            <h2>01</h2>
                            <img src={sneakers3}/>
                        </div>
                        <img src={star}/>
                        <h3 className={style.name}>Adidas Falcon Shoes for men - 2021 Edition</h3>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                    <div className={style.sneakers2}>
                        <div className={style.sneakers_img_2}>
                            <h2>02</h2>
                            <img src={sneakers3}/>
                        </div>
                        <img src={star}/>
                        <h3 className={style.name}>Adidas Falcon Shoes for men - 2021 Edition</h3>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                    <div className={style.sneakers3}>
                        <div className={style.sneakers_img_3}>
                            <h2>03</h2>
                            <img src={sneakers2}/>
                        </div>
                        <img src={star}/>
                        <h3 className={style.name}>Adidas Falcon Shoes for men - 2021 Edition</h3>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                    <div className={style.sneakers4}>
                        <div className={style.sneakers_img_4}>
                            <h2>04</h2>
                            <img src={sneakers}/>
                        </div>
                        <img src={star}/>
                        <h3 className={style.name}>Adidas Falcon Shoes for men - 2021 Edition</h3>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Arrivals