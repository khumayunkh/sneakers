import React from "react";
import style from './features.module.css'

function Features(){
    return(
        <>
        <div className={style.container}>
            <div className={style.features}>
                <div className={style.title}>
                    <h2>Featured products</h2>
                    <h3>View all &#62;</h3>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Features