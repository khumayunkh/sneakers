import React from "react";
import style from './footer.module.css'
import logo from './../../img/footer.png'

function Footer(){
    return(
        <>
        <div className={style.container}>
            <div className={style.footer}>
                <img src={logo}/>
                <h4 className={style.mobile}>Our shop is the best choice for buying footwear.</h4>
                <div className={style.home}>
                    <h3>Home</h3>
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>Copyright</p>
                    <p>Popular Campaign</p>
                </div>
                <div className={style.information}>
                    <h3>Our Information</h3>
                    <p>Return Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Site Map</p>
                    <p>Store Hours</p>
                </div>
                <div className={style.account}>
                    <h3>My Account</h3>
                    <p>Press Inquiries</p>
                    <p>Social Media Directories</p>
                    <p>Permission</p>
                    <p>Requests</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer