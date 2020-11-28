import React from 'react';
import TronLinkGuide from 'components/TronLinkGuide';
import TronWeb from 'tronweb';
import Utils from 'utils';
import Swal from 'sweetalert2';
import Support from 'components/Support';
import MainMenu from 'components/MainMenu';
import About from 'components/About';
import ServiceArea from "components/ServiceArea";
import InvestmentForm from 'components/InvestmentForm';
import Earnings from 'components/Earnings';
import Footer from 'components/Footer';
import Circle from '../Circle';
import CarouselArea from '../CarouselArea';
import ParticleHandler from "../Particle";
import ContractBalance from '../ContractBalance';
import './assets/front/2/css/style.css';
import './assets/front/css/bootstrap.min.css';
import './assets/front/css/animate.min.css';
import './assets/front/css/ion.rangeSlider.css';
import './assets/front/css/color.css';
import './assets/front/css/ion.rangeSlider.skinFlat.css';
import './assets/front/css/ranger-style.css';
import './assets/front/css/responsive.css';
import './assets/front/css/slicknav.min.css';
import './assets/front/css/style.css';
import './assets/front/css/swiper.min.css';




let FOUNDATION_ADDRESS =  'TU1LVbU6tcthAdJ6Z57Y9LRyNFThZf6DXg';
let FOUNDATION_ADDRESS_DUMMY = 'TR85doP5KEZ4bVuBqTMZoLp6DFnTbgm68z'; 
let params = new URLSearchParams(window.location.search);


var ref = params.get('ref') == null ? FOUNDATION_ADDRESS : params.get('ref');

class App extends React.Component {
    state = {
        tronWeb: {
            installed: false,
            loggedIn: false
        },

        formvalue: '150',
        disabled: true,
        balance:  '0.00',
        contractbalance: '0.00',
        refBalance: '0.00',
        withdr: '0.00',
        reflink: ''
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount() {
        await new Promise(resolve => {
            const tronWebState = {
                installed: !!window.tronWeb,
                loggedIn: window.tronWeb && window.tronWeb.ready
            };
            
            if(tronWebState.installed) {
                this.setState({
                    tronWeb:
                    tronWebState,
                    reflink: 
                    'octaltron.io?ref='+window.tronWeb.defaultAddress.base58
                });

                return resolve();
            }

            let tries = 0;

            const timer = setInterval(() => {
                if(tries >= 10) {
                    const TRONGRID_API =  'https://api.trongrid.io';  

                    window.tronWeb = new TronWeb(
                        TRONGRID_API,
                        TRONGRID_API,
                        TRONGRID_API
                    );

                    this.setState({
                        tronWeb: {
                            installed: false,
                            loggedIn: false
                        }
                    });

                    clearInterval(timer);
                    return resolve();
                }

                tronWebState.installed = !!window.tronWeb;
                tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

                if(!tronWebState.installed)
                    return tries++;

                this.setState({
                    tronWeb: tronWebState
                });

                resolve();
            }, 100);
        });
        
       
        

        if(!this.state.tronWeb.loggedIn) {
            // Set default address (foundation address) used for contract calls
            // Directly overwrites the address object as TronLink disabled the
            // function call
            window.tronWeb.defaultAddress = {
                hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS_DUMMY),
                base58: FOUNDATION_ADDRESS_DUMMY
            };
            
            window.tronWeb.on('addressChanged', () => {
                if(this.state.tronWeb.loggedIn)
                    return;

                this.setState({
                    tronWeb: {
                        installed: true,
                        loggedIn: true
                    }
                });
            });
        }
          
        await Utils.setTronWeb(window.tronWeb);
        this.userBalance();
        this.contractBalance();
        this.refBalance();
        this.withdr();
       
    }



    comm = (prop)=>{
      
        const nprop = prop*1000000;
        console.log(Utils.contract);
      
        Utils.contract.deposit(115200,ref).send({
            shouldPollResponse: true,
            callValue: nprop
        }).then(res => Swal({
            title: 'Transaction Successful!',
            type: 'success'
        })).catch(err => Swal({
            title: 'Transaction  Failed',
            type: 'error'
        })).then(() => {
            this.setState({
                currentMessage: {
                    loading: false,
                }
            });
        });
    }   

    withdraw =async ()=>{

    
     await Utils.contract.withdraw().call({
          shouldPollResponse: true,
          callValue: 200000
      }).then(res => Swal({
          title: 'Withdrawal Successful!',
          type: 'success'
      })).catch(err => Swal({
          title: 'Withdrawal Unsuccessful',
          type: 'error'
      })).then(() => {
          this.setState({
              currentMessage: {
                  loading: false,
                  
              }
          });
      });
  }   

  xwithdraw(){
     
     Utils.testwithdraw()
     .then(bal => Swal({
       title: 'Withdrawal Successful!',
       type: 'success'
   })).catch(err => Swal({
       title: 'Withdrawal Unsuccessful',
       type: 'error'
   }))
  }

 bonus(){
    Utils.givebonus()
      .then((act) => Swal({
        title: 'Successful Operation',
        type: 'success' 
      })).catch((err) => {
        alert('Unknown Event');
        console.log(err)
      });
  }
 

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({'disabled': true});
        if(this.state.formvalue < 100){
            alert('Amount must be greater than 100 TRX');
        }
        else{
            this.comm(this.state.formvalue);
        }
    }
    handleInputChange = (event)=>{
        this.setState({'formvalue': event.target.value});
        if (this.state.formvalue > 9) {
            this.setState({'disabled': false});
        }
        else{
            this.setState({'disabled': true});
        }
        
    }

  userBalance() {
    Utils.getUserInvests()
      .then((bal) => { 
         
        this.setState({'balance': bal});
        console.log(bal);
        return bal;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  contractBalance() {
    Utils.investments()
      .then((bal) => {  
        this.setState({'contractbalance': bal});
        console.log(bal);
        return bal;
      })
      .catch((error) => {
        console.log(error);
      });
  }
refBalance(){
  Utils.userRef()
  .then((bal) => {  
    this.setState({'refBalance': bal});
    console.log(bal);
    return bal;
  })
  .catch((error) => {
    console.log(error);
  });
}

withdr(){
  Utils.canwithdraw()
  .then((bal) => {  
    this.setState({'withdr': bal});
    console.log(bal);
    return bal;
  })
  .catch((error) => {
    console.log(error);
  });
}

percentage(){
 return (this.state.balance*(this.state.withdr/100));
}

renderMessageInput() {
        if(!this.state.tronWeb.installed)
            return <TronLinkGuide />;

        if(!this.state.tronWeb.loggedIn)
            return <TronLinkGuide installed />;
        


    }

    render() {
         
return (
            <div>
              
              <Support />
              <MainMenu />
              <CarouselArea ParticleHandler={ParticleHandler} /> 
              <About /> 
              <Circle bonus= {this.bonus} />
              <ServiceArea />
              <ContractBalance contractBalance = {this.state.contractbalance} balance = {this.state.balance} withdr={this.state.withdr} refBalance={this.state.refBalance} xwithdraw={this.xwithdraw} reflink={this.state.reflink} /> 

              <InvestmentForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />

              <Earnings xwithdraw={this.xwithdraw} />

              <Footer bonus={this.bonus} />

            </div>
        );
    }
}

export default App;
