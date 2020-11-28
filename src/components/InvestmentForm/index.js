import React from 'react';

import icon1 from 'assets/assets/images/images/logo/icon.png';

class InvestMentForm extends React.Component {
    render() {
        return (
             
                    <section className="section-background">
                              <div className="container">
                                    <div className="row">
                                          <div className="col-md-12">
                                                <div className="section-title text-center section-padding padding-bottom-0 wow slideInLeft" data-wow-duration="2s">
                                                      <div className="section-header">
                                                            <h2>Our Investment <span> plan</span></h2>
                                                                <p><img src={icon1} alt="icon" /></p>
                                                      </div>
                                                      <p>INVESTMENT</p>
                                                </div>
                                          </div>
                                   </div>
                                    <div className="row">
                                          <div className="col-md-12 col-sm-12 pricing-list-botom-margin wow zoomIn" data-wow-duration="3s">
                                                {/* Pricing  List1 Start */}
                                                <div className="pricing-list1">
                                                      <div className="pricing-header1">
                                                            <h5>INVEST NOW</h5>
                                                            <p>Daily 10% Forever</p>
                                                      </div>
                                                      <div className="pricing-info1">
                                                            <ul>
                                                                  <li> <p>for <span className="color-text">Forever</span></p></li>
                                                                  <li><p> <span className="color-text">10%</span> roi daily</p></li>
                                                            </ul>
                                                      </div>
                                                      <div className="price-range">
                                                            <div className="row">
                                                                  <div className="col-md-6 text-left col-sm-6 col-xs-6">
                                                                        <div className="min-price">
                                                                              <h6>Minimum<span className="color-text">100 TRX</span></h6>
                                                                        </div>
                                                                  </div>
                                                                  <div className="col-md-6 text-right col-sm-6 col-xs-6">
                                                                        <div className="min-price">
                                                                              <h6>Maximum<span className="color-text">UNLIMITED</span></h6>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                  <div>
                                                        <input type="number" defaultValue={100} 
                                                         style={{color: '#000', fontSize: 25,backgroundColor:'#fff'}} onChange={this.props.handleInputChange} />
                                                            <input type="hidden" name="amount" defaultValue="100" className=" slider-input slider-input--1" data-perday={20} data-peryear={1} data-min={100} data-max={1000000} data-dailyprofit=".daily-profit-1" data-totalprofit=".total-profit-1 " data-valuetag=".plan__value--1 .invest-type__profit--val" />
                                                  </div>
                                                  <input type="submit" name="plan_id" value="INVEST" className="btn btn-dark" onClick={this.props.handleSubmit} />
                                                  <div className="price-range">
                                                        <div className="row">
                                                              <div className="col-md-6 text-left col-sm-6 col-xs-6 invest-type__calc invest-type__calc--daily">
                                                                    <div className="min-price">
                                                                          <h6>per time<span className="color-text"><b className="daily-profit-1">10%</b></span></h6>
                                                                    </div>
                                                              </div>
                                                              <div className="col-md-6 text-right col-sm-6 col-xs-6 invest-type__calc invest-type__calc--total">
                                                                    <div className="min-price">
                                                                          <h6>Total Return<span className="color-text"><b className="total-profit-1">UNLIMITED</b></span></h6>
                                                                    </div>
                                                              </div>
                                                        </div>
                                                  </div>
                                                </div>
                                                        {/* Pricing List1 End */}
                                          </div>
                                        </div>
                                      <div className="row section-padding padding-bottom-0">
                                            <div className="col col-md-6 col-sm-6">
                                                  <div className="contact-middel-info wow bounceInLeft" data-wow-duration="2s">
                                                        <div className="contact-middel-title">
                                                              <h4>Have a question <span>we are here to help!</span></h4>
                                                        </div>
                                                        <div className="contact-middel-details">
                                                              <p><i className="fa fa-telegram" /> <a href="https://t.me/joinchat/AAAAAFaePKnTwvyx67dvzg">Telegram</a></p>
                                                              <p><i className="fa fa-envelope" /> support@OctalTron.io</p>
                                                        </div>
                                                  </div>
                                            </div>
                                        <div className="col col-md-6 col-sm-6">
                                              <div className="discunt-middel-text wow bounceInRight" data-wow-duration="2s">
                                                    <h3>6<i className="fa fa-percent" /> <br /> referral <br /> commission</h3>
                                              </div>
                                        </div>
                                  </div>
                              </div>
                  </section>




        );
    }
}



export default InvestMentForm;