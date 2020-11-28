import React from 'react';

import icon1 from 'assets/assets/images/images/logo/icon.png';




class ServiceArea extends React.Component {
        render(){
                    return(

                              <section className="service-section">
                                  <div className="container">
                                        <div className="row">
                                              <div className="col-md-12">
                                                    <div className="section-title text-center section-padding padding-bottom-0 wow slideInLeft" data-wow-duration="2s">
                                                         <div className="section-header">
                                                               <h2>Our <span>Services</span></h2>
                                                                    <p><img src={icon1} alt="icon" /></p>
                                                          </div>
                                                             <p>OctalTron is the best way to trade and invest your TRX to get  10% interest daily.</p>
                                                    </div>
                                              </div>
                                        </div>
                                        <div className="row wow slideInRight" data-wow-duration="2s">
                                              <div className="col-md-3 col-sm-6">
                                                    <div className="service-wrapper text-center">
                                                          <div className="service-icon ">
                                                                <i className="fa fa-rocket" aria-hidden="true" />
                                                          </div>
                                                         <div className="service-title">
                                                            <p>ONE CLICK INVESTMENT</p>
                                                         </div>
                                                    </div>
                                              </div>
                                              <div className="col-md-3 col-sm-6">
                                                    <div className="service-wrapper text-center">
          <div className="service-icon ">
            <i className="fa fa-wrench" aria-hidden="true" />
          </div>
          <div className="service-title">
            <p>UNHACKABLE SMART CONTRACT</p>
          </div>
        </div>
                                                    </div>
                                              <div className="col-md-3 col-sm-6">
                                              <div className="service-wrapper text-center">
                                                  <div className="service-icon ">
                                                        <i className="fa fa-money" aria-hidden="true" />
                                                  </div>
                                                  <div className="service-title">
                                                        <p>RELIABLE</p>
                                                  </div>
                                                </div>
                                            </div>
                                           <div className="col-md-3 col-sm-6">
                                                <div className="service-wrapper text-center">
                                                      <div className="service-icon ">
                                                            <i className="fa fa-money" aria-hidden="true" />
                                                      </div>
                                                      <div className="service-title">
                                                            <p>INSTANT WITHDRAWAL</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-3 col-sm-6">
                                                <div className="service-wrapper text-center">
                                                      <div className="service-icon ">
                                                            <i className="fa fa-th" aria-hidden="true" />
                                                      </div>
                                                      <div className="service-title">
                                                            <p>RELIABLE INVESTMENT PLAN</p>
                                                      </div>
                                                </div>
                                          </div>
                                         <div className="col-md-3 col-sm-6">
                                                <div className="service-wrapper text-center">
                                                      <div className="service-icon ">
                                                           <i className="fa fa-wrench" aria-hidden="true" />
                                                      </div>
                                                      <div className="service-title">
                                                            <p>24/7 SUPPORT</p>
                                                      </div>
                                                </div>
                                          </div>
                                        </div>
                                  </div>
                                </section>


                    )






        }





}

export default ServiceArea;