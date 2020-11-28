import React from 'react';
import logo from 'assets/assets/images/images/logo/logo.png';



class MainMenu extends React.Component {

    render(){
        return(

                    
                     <nav className="main-menu wow slideInRight" data-wow-duration="2s">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="logo">
                                  <a href="http://OctalTron.io"> <img src={logo} style={{maxHeight: 60}} alt='logo' /> </a>
                                </div>
                            </div>
                            <div className="col-md-9 text-right">
                                <ul id="header-menu" className="header-navigation">
                                  <li><a href="https://tronscan.org/#/contract/TXMLpMGT3DMU1ojuykpCzxBuT2cuaDro6K" className='btn' target="_blank" rel="noopener noreferrer">Contract</a></li>
                                </ul>
                          </div> 
                        </div>
                      </div>
                     </nav>



        )
    }



}

export default MainMenu;