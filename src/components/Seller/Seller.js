import React from "react";
import style from './seller.module.css'
import seller from './../../img/seller.png'

function Seller(){
    return(
        <>
        <div className={style.container}>
            <div className={style.title}>
                <h2>Best seller this week</h2>
                <img src={seller}/>    
            </div>            
        </div>
        </>
    )
}

export default Seller