import React from "react";
import style from './brands.module.css'
import nike from './../../img/nike.png'
import adidas from './../../img/adidas.png'
import newBalance from './../../img/newBalance.png'
import brand from './../../img/brand.png'

function Brands(){
    return(
        <>
        <div className={style.container}>
            <div className={style.brands}>
                <div className={style.back}></div>
                <h2 className={style.title}>Popular brands</h2>
                <div className={style.brands_in}>
                    <div className={style.brand}>
                        <div className={style.brand_in}>
                            <img src={nike}/>
                        </div>
                    </div>
                    <div className={style.brand}>
                        <div className={style.brand_in}>
                            <img src={newBalance}/>
                        </div>
                    </div>
                    <div className={style.brand}>
                        <div className={style.brand_in}>
                            <img src={adidas}/>
                        </div>
                    </div>
                    <div className={style.brand}>
                        <div className={style.brand_in}>
                            <img src={brand}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Brands