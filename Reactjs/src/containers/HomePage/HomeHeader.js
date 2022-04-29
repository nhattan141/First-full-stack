import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from "../../assets/logo.svg";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} />
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.speciality" /></b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="homeheader.searchdoctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.health-facility" /></b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="homeheader.select-room" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.doctor" /></b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="homeheader.select-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="homeheader.fee" /></b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="homeheader.check-health" />
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className="language-vi">
                                VN
                            </div>
                            <div className="language-en">
                                EN
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className="title2">
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className="search">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon1})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child1" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon2})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child2" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon3})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child3" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon4})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child4" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon5})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child5" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon1})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child6" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon6})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child7" />
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon7})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    <FormattedMessage id="banner.child8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
