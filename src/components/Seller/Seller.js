import React from "react";
import style from './seller.module.css'
import seller from './../../img/seller.png'
import star from './../../img/star_5.png'
import sneakers from './../../img/seller_sneakers.png'

function Seller(){
    return(
        <>
        <div className={style.container}>
            <div className={style.title}>
                <h2>Best seller this week</h2>
                <img src={seller}/>    
            </div>   
            <div className={style.seller_sneakers}>
                <div className={style.sneakers}>
                    <div className={style.back}></div>
                    <img className={style.sneakers_img} src={sneakers}/>    
                </div>
                <div className={style.info}>
                    <img src={star}/>
                    <h3 className={style.info_title}>Adidas Falcon Shoes for women - 2021 Edition</h3>
                    <h3 className={style.price}>$120.50</h3>
                    <button className={style.btn}>Shop Now</button>    
                </div>    
            </div>         
        </div>
        </>
    )
}

export default Seller