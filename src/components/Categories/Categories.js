import React from "react";
import style from './categories.module.css'
import sneakers from './../../img/categories1.png'
import ball from './../../img/categories2.png'
import tShird from './../../img/categories3.png'

function Categories(){
    return(
        <>
        <div className={style.container}>
            <div className={style.title}>
                <h2>Choose categories</h2>
                <h3>For explosive events 
                    (sprints up to 400 metres, long jump, triple jump) 
                    the reduction in atmospheric pressure means 
                    there is less resistance from the atmosphere.
                </h3>
            </div>
            <div className={style.collection}>
                <div className={style.products}>
                    <div className={style.back1}></div>
                    <h3 className={style.sneakers_title}>Sneakers Collection</h3>
                    <p>120 products</p>
                    <h5 className={style.sneakers_sub}>See collection</h5>
                    <img src={sneakers}/>
                </div>
                <div className={style.products}>
                    <div className={style.back2}></div>
                    <h3 className={style.ball_title}>Football Collection</h3>
                    <p>80 products</p>
                    <h5 className={style.ball_sub}>See collection</h5>
                    <img src={ball}/>
                </div>
                <div className={style.products}>
                    <div className={style.back3}></div>
                    <h3 className={style.volley_title}>Volleyball Collection</h3>
                    <p>160 products</p>
                    <h5 className={style.volley_sub}>See collection</h5>
                    <img src={tShird}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Categories