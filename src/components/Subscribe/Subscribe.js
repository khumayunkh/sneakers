import React from "react";
import style from './subscribe.module.css'
import sneakers from './../../img/subscribeSneakers.png'

function Subscribe(){
    return(
        <>
        <div className={style.container}>
            <div className={style.subscribe}>
                <div className={style.subscribe_in}>
                <h2>Subscribe now to get the latest updates</h2>
                <div className={style.subscribe_email}>
                    <div className={style.email}>
                        <input className={style.input} placeholder="Enter you email"/>
                        <button>SUBSCRIBE</button>
                    </div>
                    <img src={sneakers}/>
                    <div className={style.back1}></div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Subscribe