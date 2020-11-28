import React from 'react';

import img1 from 'assets/assets/images/images/slider/5a25219022749.jpg';

class CarouselArea extends React.Component {
    render() {
        return (
<section id="particles-js" className="header-area header-bg" style={{backgroundImage: "url(" + img1 + ")"}}>

<span id='particles'>{this.props.ParticleHandler}</span>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2 text-center">
        <div className="header-section-wrapper">
          <div className="header-section-top-part">
            <div className="text-first wow slideInLeft" data-wow-duration="2s"><h1 style={{marginTop: 0, marginBottom: 15, fontSize: 38, fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}><br /></h1><h1 style={{marginTop: 0, marginBottom: 15, fontSize: 38, fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>Revolutionary Money Making Platform<span style={{color: 'rgb(255, 255, 255)'}}><div><font color="#FF0000"><span style={{fontSize: 40, fontWeight: 800}}>OctalTron</span></font> 
            <span style={{fontSize: 40, fontWeight: 800}}> is Growing Money <br /><br /></span></div></span>
            </h1></div>
            <p style={{fontSize: '1.5em'}} className=" wow slideInDown" data-wow-duration="2s"><br />Grow Your Cryptocurrency With OctalTron<br /><br /></p>
          </div>
          <div className="header-section-bottom-part">
            <div className="domain-search-from">
              
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
export default CarouselArea;