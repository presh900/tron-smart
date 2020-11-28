import React from 'react';






class TopInvest extends React.Component {
        render(){
            return(

                         
                      <section className="hosting-section hosting-section1  section-padding section-background">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12">
                                  {/* section header start */}
                                  <div className="section-header wow bounceInDown" data-wow-duration="3s">
                                    <h2>Latest <span> Deposits &amp; Withdraw</span></h2>
                                    <p><img src="http://cdn.octaltron.io/assets/images/logo/icon.png" alt="icon" /></p>
                                  </div>
                                  {/* section header end */}
                                </div>
                             </div>
                             <div className="row">
                                <div className="col-md-6">
                                  <div className="section-wrapper wow bounceInLeft" data-wow-duration="2s">
                                     <div className="deposit-title text-center">
                                          <h4>Latest Deposits</h4>
                                     </div>
                                    <div className="hosting-content table-responsive">
                                    <table>
                                        <thead>
                                              <tr>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>Currency</th>
                                                <th>Amount</th>
                                              </tr>
                                            </thead>
                                        <tbody>
                                        </tbody>
                                  </table>
                                </div>
                                {/* hosting content end */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="section-wrapper wow bounceInRight" data-wow-duration="2s">
                                <div className="deposit-title text-center">
                                  <h4>Latest Withdraw</h4>
                                </div>
                                <div className="hosting-content table-responsive">
                                  <table>
                                    <thead>
                                          <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Currency</th>
                                            <th>Amount</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                  </table>
                                </div>
                                    {/* hosting content end */}
                              </div>
                            </div>
                      </div>{/* row */}
                    </div>{/* container */}
              </section>











            )
        }





}

export default TopInvest;