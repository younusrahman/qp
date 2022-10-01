import React from 'react'
import "./AdminPanel.css"
import { MdCategory, MdSpaceDashboard, MdProductionQuantityLimits, MdPayment } from "react-icons/md"
import { FaUsersCog } from "react-icons/fa"
import { ImUsers } from "react-icons/im"
import { BiCategory } from "react-icons/bi"
import { TbTruckDelivery } from "react-icons/tb"
import { Link , Outlet} from 'react-router-dom'







export default function AdminPanel() {
    return (

        <>
            <nav className="main-menu">



                <div>
                    <a className="logo" href="http://startific.com">
                    </a>
                </div>
                <div className="settings"></div>
                <div className="scrollbar" id="style-1">

                    <ul>

                        <li>
                            <a href="http://startific.com">
                                <i className="fa fa-home fa-lg"></i>
                                <span className="nav-text">Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="http://startific.com">
                                <i className="fa fa-user fa-lg"></i>
                                <span className="nav-text">Login</span>
                            </a>
                        </li>


                        <li>
                            <a href="http://startific.com">
                                <i className="fa fa-envelope-o fa-lg"></i>
                                <span className="nav-text">Contact</span>
                            </a>
                        </li>




                        <li>

                            <i className="fa fa-heart-o fa-lg"></i>

                            <span className="share">


                                <div className="addthis_default_style addthis_32x32_style">

                                    <div style={{ position: "absolute", marginLeft: "56px", top: "3px" }}>




                                        <a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank"
                                            className="share-popup"><img
                                                src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png"
                                                width="30px" height="30px" /></a>

                                        <a href="https://twitter.com/share" target="_blank" className="share-popup"><img
                                            src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Twitter_alt.png"
                                            width="30px" height="30px" /></a>




                                        <a href="https://plusone.google.com/_/+1/confirm?hl=en&url=_URL_&title=_TITLE_"
                                            target="_blank" className="share-popup"><img
                                                src="http://icons.iconarchive.com/icons/danleech/simple/512/google-plus-icon.png"
                                                width="30px" height="30px" /></a>



                                    </div>
                                    {/* <script
                                            type="text/javascript">var addthis_config = {"data_track_addressbar": "true" };</script> */}
                                    <script type="text/javascript"
                                        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4ff17589278d8b3a"></script>


                                </div>


                            </span>
                            <span className="twitter"></span>
                            <span className="google"></span>
                            <span className="fb-like">
                                <iframe
                                    src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fstartific&amp;width&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=35"
                                    scrolling="no" frameBorder="0" style={{ border: "none", overflow: "hidden", top: "35px" }}></iframe>

                            </span>
                            <span className="nav-text">
                            </span>



                        </li>





                        <li className="darkerlishadow">
                            <Link to="/admin/cutomers">
                                <div className='fa fa-lg'>
                                    <MdSpaceDashboard size={25} />
                                </div>

                                <span className="nav-text">DashBoard</span>
                            </Link>
                        </li>

                        <li className="darkerli">
                        <Link to="cutomers">
                                <div className='fa fa-lg'>
                                    <FaUsersCog size={25} />
                                </div>

                                <span className="nav-text">Customers</span>
                            </Link>
                        
                        </li>

                        <li className="darkerli">
                        <Link to="employee">
                                <div className='fa fa-lg'>
                                    <ImUsers size={25} />
                                </div>
                                <span className="nav-text">Employess</span>
                            </Link>
                        </li>

                        <li className="darkerli">
                            <a href="http://startific.com">
                                <div className='fa fa-lg'>
                                    <BiCategory size={25} />
                                </div>
                                <span className="nav-text">Categories</span>
                            </a>
                        </li>

                        <li className="darkerli">
                            <a href="http://startific.com">
                                <div className='fa fa-lg'>
                                    <MdProductionQuantityLimits size={25} />
                                </div>
                                <span className="nav-text">Products</span>
                            </a>
                        </li>



                        <li className="darkerli">
                            <a href="http://startific.com">
                                <div className='fa fa-lg'>
                                    <TbTruckDelivery size={25} />
                                </div>
                                <span className="nav-text">Delivery</span>
                            </a>
                        </li>

                        <li className="darkerli">
                            <a href="http://startific.com">
                                <div className='fa fa-lg'>
                                    <MdPayment size={25} />
                                </div>
                                <span className="nav-text">Payments</span>
                            </a>
                        </li>
                    </ul>
                </div>







                <ul className="logout">
                    <li>

                        <a href="http://startific.com">
                            <i className="fa fa-question-circle fa-lg"></i>
                            <span className="nav-text">Help</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://startific.com">
                            <i className="fa fa-lightbulb-o fa-lg"></i>
                            <span className="nav-text">
                                BLOG
                            </span>

                        </a>
                    </li>
                </ul>
            </nav>



        </>

    )
}



