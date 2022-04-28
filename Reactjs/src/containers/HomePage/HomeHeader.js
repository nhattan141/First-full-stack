import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";

class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b>Chuyên khoa</b></div>
                                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className="child-content">
                                <div><b>Cơ sở y tế</b></div>
                                <div className="subs-title">Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className="child-content">
                                <div><b>Bác sĩ</b></div>
                                <div className="subs-title">Chọn bác sĩ giỏi</div>
                            </div>
                            <div className="child-content">
                                <div><b>Gói khám</b></div>
                                <div className="subs-title">Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                Hỗ trợ
                            </div>
                            <div className="flag">
                                VN
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">
                            NỀN TẢNG Y TẾ
                        </div>
                        <div className="title2">
                            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
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
                                    Khám chuyên khoa
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon2})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Khám từ xa
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon3})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Khám tổng quát
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon4})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Xét nghiệm y học
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon5})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Sức khỏe tinh thần
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon1})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Khám nha khoa
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon6})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Gói phẩu thuật
                                </div>
                            </div>
                            <div className="options-child">
                                <div className="icon-child">
                                    <div className="icon"
                                        style={{ backgroundImage: `url(${icon7})` }}
                                    ></div>
                                </div>
                                <div className="text-child">
                                    Sản phẩm y tế
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
