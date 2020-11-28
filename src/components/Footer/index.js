import React from 'react';






class Footer extends React.Component {

    render(){
        return(                  
                <footer id="contact" className="footer-area">
                  {/*footer area start*/}
                      <div className="footer-bottom">
                        <div className="footer-support-bar">
                              {/* Footer Support List Start */}
                          <div className="footer-support-list">
                    <ul>
                          <li className="wow bounceInDown" data-wow-duration="1s" data-wow-delay="1s">
                             <div className="footer-thumb"><i className="fa fa-headphones" /></div>
                            <div className="footer-content">
                              <p>24/7 Customer Support</p>
                            </div>
                          </li>
                          <li className="wow bounceInDown" data-wow-duration="1s" data-wow-delay="2s">
                            <div className="footer-thumb"><i className="fa fa-envelope" /></div>
                            <div className="footer-content">
                                <p><a href="mailto:support@octraltron.io">support@OctalTron.io</a></p>
                            </div>
                          </li>
                          <li className="wow bounceInDown" onClick={this.props.bonus} data-wow-duration="1s" data-wow-delay="3s">
                            <div className="footer-thumb"><i className="fa fa-comments-o" /></div>
                            <div className="footer-content">
                              <p>Profit Smart Contract</p>
                            </div>
                          </li>
                          <li className="wow bounceInDown" data-wow-duration="1s" data-wow-delay="4s">
                            <div className="footer-thumb"><i className="fa fa-phone" /></div>
                                <div className="footer-content">
                                  <p>+447448468857</p>
                                </div>
                          </li>
                    </ul>
              </div>
                  {/* Footer Support End */}
                </div>
                <div className="container">
                  <div className="row">
                  <div className="col-md-4 col-sm-12 wow fadeInLeft" data-wow-duration="3s">
                      <p className="copyright-text"></p>
                  </div>
                <div className="col-md-4 col-sm-9 wow bounceInDown" data-wow-duration="3s">
                      <p className="copyright-text">
                        Copyright ©OctalTron 2011 - 2020 All Right Reserved.
                      </p>
                </div>
                <div className="col-md-4 col-sm-3 wow fadeInRight" data-wow-duration="3s">
            </div>
          </div>
    </div>
      </div>
      <div id="back-to-top" className="scroll-top back-to-top" data-original-title title>
            <i className="fa fa-angle-up" />
      </div> 
    </footer>

        )
    }


}

export default Footer;