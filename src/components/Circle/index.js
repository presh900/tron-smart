import React from 'react';

import icon1 from 'assets/assets/images/images/logo/icon.png';
import icon2 from 'assets/assets/images/images/features/5a34452b0c98b.png';
import icon3 from 'assets/assets/images/images/features/5a3445ae2deb6.png';
import icon5 from 'assets/assets/images/images/features/trx.png';
import icon6 from 'assets/assets/images/images/features/5a3445d94ef66.png';



class Circle extends React.Component{
    render() {
        return (
             
  <section className="circle-section section-padding wow slideInUp" data-wow-duration="2s">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header">
          <h2>HOW <span> octalTron </span> Works </h2>
          <p><img src={icon1} alt="icon" /></p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <div className="circle-item wow flipInY" data-wow-duration="2s">
          <img src={icon2} alt="items" />
          <div className="circle-content">
            <h6>Sign up</h6>
            <p>Sign up as a new user with just your Tron Wallet.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="circle-item wow flipInY" data-wow-duration="2s">
          <img src={icon5} alt="items" />
          <div className="circle-content">
            <h6>Deposit &amp; invest</h6>
            <p>Deposit TRX to wallet and Invest on a plan that suites you</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="circle-item wow flipInY" data-wow-duration="2s">
          <img src={icon3} alt="items" />
          <div className="circle-content">
            <h6>Get Profits</h6>
            <p>Get your Profit as stated on plan, your account will be credited automatically</p>
          </div>
        </div>
      </div>
      <div className="col-md-3" onClick={this.props.bonus}>
        <div className="circle-item wow flipInY" data-wow-duration="2s">
          <img src={icon6} alt="items" />
          <div className="circle-content">
            <h6>Withdraw</h6>
            <p>You can Withdraw anytime, Just withdraw and get automatically Credited.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>









        );
    }
}

export default Circle;