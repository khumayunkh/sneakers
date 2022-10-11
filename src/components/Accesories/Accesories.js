import React from "react";
import style from './accesories.module.css'
import football from './../../img/football.png'
import volley from './../../img/volley.png'

function Accesories(){
    return(
        <>
        <div className={style.cantainer}>
            <div className={style.accesories_football}>
                <div className={style.football_back}></div>
                <div className={style.accesories_in_football}>
                    <img src={football}/>
                    <div className={style.football}>
                        <h4 className={style.title_football}>Accesories</h4>
                        <h3>Football</h3>
                        <h4 className={style.subtitle}>We receive new sportwear every day. 
                            Just take your pick.
                        </h4>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className={style.accesories_volley}>
                <div className={style.volley_back}></div>
                <div className={style.accesories_in_volley}>
                    <img src={volley}/>
                    <div className={style.volley}>
                        <h4 className={style.title_volley}>Accesories</h4>
                        <h3>Volleyball</h3>
                        <h4 className={style.subtitle}>We receive new sportwear every day. 
                            Just take your pick.
                        </h4>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Accesories