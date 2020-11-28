import React from 'react';

class About extends React.Component {
    render() {
        return (
             

  <section className="section-padding sale-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title text-center">
          <div className="sale-header wow slideInDown" data-wow-duration="2s">
            <h2>about <span> OctalTron </span></h2>
          </div>
          <div className="sale-content">
            <div className="row">
              {/* <div class="col-md-6 wow slideInLeft" data-wow-duration="2s">
                        <p class="about-community-text">
                            <iframe width="560" height="315" src="https://www.youtube.com" frameborder="0"></iframe> 
                        </p>
                    </div> */}
              <div className="col-md-6 wow slideInRight" data-wow-duration="2s">
                <p className="about-community-text text-justify">
                  We are a revolutionary Smart contract designed to better Peoples lives all over the World and Grow your Tron Coins
                </p>
                <a href="https://tronscan.org/#/contract/TXMLpMGT3DMU1ojuykpCzxBuT2cuaDro6K" className='btn btn-warning' target="_blank" rel="noopener noreferrer">Contract</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 



        );
    }




}

export default About;