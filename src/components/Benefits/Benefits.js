import React from "react";
import style from './benefits.module.css'
import benefits from './../../img/benefits.png'
import benefits2 from './../../img/benefits2.png'

function Benefits(){
    return(
        <>
        <div className={style.container}>
            <div className={style.benefits}>
                <img src={benefits}/>
                <div className={style.title}>
                    <h2>Why choose our shop</h2>
                    <h4>For explosive events (
                        sprints up to 400 metres, long jump, triple jump) 
                        the reduction in atmospheric 
                        pressure means there is less resistance from the 
                        atmosphere.
                    </h4>
                    <img src={benefits2}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Benefits