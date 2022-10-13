import React from "react";
import style from './subscribe.module.css'
import sneakers from './../../img/subscribeSneakers.png'

function Subscribe(){
    return(
        <>
        <div className={style.container}>
            <div className={style.back}></div>
            <div className={style.subscribe}>
                <h2>Subscribe now to get the latest updates</h2>
                <div className={style.subscribe_in}>
                    <div className={style.email}>
                        <input className={style.input} placeholder="Enter you email"/>
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className={style.back1}></div>
                    <img src={sneakers}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Subscribe