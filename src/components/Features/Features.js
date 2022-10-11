import React from "react";
import style from './features.module.css'
import sneakers from './../../img/feature_1.png'
import sneakers_2 from './../../img/feature_2.png'
import sneakers_3 from './../../img/feature_3.png'
import sneakers_4 from './../../img/feature_4.png'
import stars from './../../img/stars.png'

function Features(){
    return(
        <>
        <div className={style.container}>
            <div className={style.features}>
                <div className={style.title}>
                    <h2>Featured products</h2>
                    <h3>View all &#62;</h3>
                </div>
                <div className={style.products}>
                    <div className={style.product}>
                        <div className={style.sneakers_in}>
                            <img className={style.sneakers} src={sneakers}/>
                            <div className={style.back}></div>
                        </div>    
                        <img src={stars}/>
                        <h4 className={style.product_title}>Adidas Falcon Shoes for men - 2021 Edition</h4>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                    <div className={style.product}>
                        <div className={style.sneakers_in}>
                            <img className={style.sneakers} src={sneakers_2}/>
                            <div className={style.back_2}></div>
                        </div>    
                        <img src={stars}/>
                        <h4 className={style.product_title}>Adidas Falcon Shoes for men - 2021 Edition</h4>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                    <div className={style.product}>
                        <div className={style.sneakers_in}>
                            <img className={style.sneakers} src={sneakers_3}/>
                            <div className={style.back_3}></div>
                        </div>    
                        <img src={stars}/>
                        <h4 className={style.product_title}>Adidas Falcon Shoes for men - 2021 Edition</h4>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                    <div className={style.product}>
                        <div className={style.sneakers_in}>
                            <img className={style.sneakers} src={sneakers_4}/>
                            <div className={style.back_4}></div>
                        </div>    
                        <img src={stars}/>
                        <h4 className={style.product_title}>Adidas Falcon Shoes for men - 2021 Edition</h4>
                        <h3 className={style.price}>$120.50</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Features