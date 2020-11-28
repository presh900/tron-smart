import React from 'react';
import icon1 from 'assets/assets/images/images/logo/icon.png';

class Earnings extends React.Component {
    render() {
        return (
             

        <section className="section-background">
            <div className="container">
                  <div className="row">
                        <div className="col-md-12">
                              <div className="section-title text-center section-padding padding-bottom-0 wow slideInLeft" data-wow-duration="2s">
                                    <div className="section-header">
                                          <h2><span>X</span></h2>
                                            <p><img src={icon1} alt="icon" /></p>
                                    </div>
                               </div>
                        </div>
                 </div>
            
            <div className="row">
                <div className="col-md-12 col-sm-12 pricing-list-botom-margin wow zoomIn" data-wow-duration="3s">
                    <div className="pricing-list1">
                        <div className="pricing-header1">
                            <h5>Earnings</h5>
                            <p>Withdraw Earnings</p>
                        </div>
                        <div className='container'>
                            
                           <button className='btn btn-danger btn-outline-light' style={{fontSize:'30px'}} onClick={this.props.xwithdraw}>Withdraw</button>
                                    
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </section>







        );
    }
}
export default Earnings;