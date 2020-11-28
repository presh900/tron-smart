import React from 'react';
import logo from './assets/images/logo.png';
import usflag from "./assets/images/flag-us.png";
import irflag from "./assets/images/flag-ir.png";
import chinaflag from "./assets/images/flag-cn.png";
import russiaflag from "./assets/images/flag-ru.png";
import sliderbg3 from "./assets/images/slider-bg-3.jpg";
import widget21 from "./assets/images/widget-2-1.png";
import widget12 from "./assets/images/widget-1-2.png";
import widget11 from "./assets/images/widget-1-1.png";
import  widget13 from "./assets/images/widget-1-3.png";
import widget71 from "./assets/images/widget-7-elm-1.png";
import widget72 from "./assets/images/widget-7-elm-2.png";
import widget74 from "./assets/images/widget-7-elm-4.png";
import widget73 from "./assets/images/widget-7-elm-3.png";
import App from "../components/App"



const user =1 // tronWeb.defaultAddress.base58;






export const header = <header>
<nav className="side-menu-container" id="mobile-menu">
  <ul className="mx-auto top-level clearfix">
    <li className="with-submenu">
      <a href="/">HOME</a>
    </li>
    <li className="with-submenu">
      <a href="#about">ABOUT</a>
    </li>
    <li className="with-submenu">
      <a href="https://shasta.tronscan.org/#/contract/TEYaDC9JrQoZUyhg815CVoMNkJYMDuz8EH/code">CONTRACT [TRONSCAN]</a>
    </li>
  </ul>
</nav>
<div className="pos-r">
  <div id="topbar" className="clearfix">
    <div className="top-util pull-right">
      <div className="socialnet">
        <a href="https://t.me/" className="socialnet" target="_blank" style={{marginRight: 15}}><i className="fab fa-telegram-plane zmdi-lg" rel="noopener noreferrer"  /></a>
        <a href="https://discord.gg/" className="socialnet" target="_blank" style={{marginRight: 15}}><i className="fab fa-discord zmdi-lg" rel="noopener noreferrer"  /></a>
      </div>
      <div className="lang-selection">
        <a href="#"><img src={usflag} alt="us" />EN</a>
        <ul className="lang">
          <li><a href="/fa.html" style={{whiteSpace: 'nowrap'}}><img src={irflag} alt="cn" />فارسی</a></li>
          <li><a href="/cn.html" style={{whiteSpace: 'nowrap'}}><img src={chinaflag} alt="cn" />中文</a></li>
          <li><a href="/rus.html"><img src={russiaflag} alt="ru" />RU</a></li>
        </ul>
      </div>
      <div className="side-menu">
        <a href="#" className="side-menu-button"><span /><span /><span /></a>
      </div>
    </div>
    <div className="logo pull-left">
      <a href="/">
        <h1><img src={logo} alt="logo" /></h1>
      </a>
    </div>
    <nav id="desktop-menu">
      <ul className="mx-auto top-level clearfix">
        <li className="with-submenu">
          <a href="/" className="link-hover">HOME</a>
        </li>
        <li className="with-submenu">
          <a href="#about" className="link-hover">ABOUT</a>
        </li>
        <li className="with-submenu">
          <a href="https://shasta.tronscan.org/#/contract/TEYaDC9JrQoZUyhg815CVoMNkJYMDuz8EH/code" className="link-hover" target="_blank" rel="noopener noreferrer" >CONTRACT [TRONSCAN]</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
<div className="header-content fullheight">
  <div className="slick-header fullheight">
    <div className="header-slide slide-1">
      <img src={sliderbg3} alt="Slider Background" className="slider-background" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <h2><span className="nowrapped">Get 3.7% - 6.7%</span><br /><span className="nowrapped">per day!</span></h2>
          </div>
          <div className="col-md-6 offset-md-6">
            <p>
              Decentralized &amp; Secure Smart Contract Fund.
            </p>
          </div>
          <div className="col-lg-6 offset-lg-6">
            <a href="#investPlans" className="button-link-1 style-3 pushtop-30">INVEST NOW <i className="fas fa-caret-right" /></a>	
          </div>
        </div>	
      </div>
    </div>
  </div>
</div>
</header>
;  //have to find a way to load window.tronWeb after has loaded
export const plans = <div>
<div className="widget-20 text-center pushtop-30">
  <p className="pretitle">Total invested</p>
  <h3 id="contractBalance" className="blue"><i className="fas fa-spinner fa-spin" /> 0.00 TRX</h3>
  <br />Your TRON wallet: <b><span id='wallet'><i className="fas fa-spinner fa-spin" /></span></b>
  <br />Your wallet balance: <b><span id='balance'><i className="fas fa-spinner fa-spin" /></span></b> TRX
  <div className="container" id="investPlans">
    <div className="row pushtop-50">
      <div className="col-lg-6 col-xl-3" >
        <div className="plan-box box-1 pushtop-30" style={{backgroundColor: "#615ee1"}}>
        <form method="POST" onSubmit={App.handleSubmit}>
          <p className="pretitle">Basic Plan<br />[ <span className="text-orange">Daily ROI</span> ]</p>
          <p className="price-main"><span className="price">4.5%</span></p>
          <ul className="text-left">
            <li>Dividends every second</li>
            <li><b>Forever</b></li>
            <li>Total return <b>∞</b></li>
            <li>Min. investment is 50 TRX</li>								
            <br /><br />
            <div className="input-group mb-2 mr-sm-2" style={{position: 'relative', left: 23}}>							
              <input type="text" autoComplete="off" placeholder={0} min={50} className="form-control text-center" id="trxForPlan0" />
              <div className="input-group-append text-orange">
                TRX
              </div>				
            </div>									
          </ul>
          <div className="text-center text-orange">
            You should have ~2.5 TRX more<br />for the transaction fee 
          </div>								
          <input type="submit" className="button-link-1" value="INVEST"></input>
          </form>
        </div>
      </div>
      <div className="col-lg-6 col-xl-3">
        <div className="plan-box box-2 pushtop-30" style={{backgroundColor: "#615ee1"}}>
          <p className="pretitle">Gold Plan<br />[ <span className="text-orange">Daily ROI</span> ]</p>
          <p className="price-main"><span className="price">5.5%</span></p>
          <ul>
            <li>Dividends every second</li>
            <li><b>45 days</b></li>
            <li>Total return <b>253%</b></li>
            <li>Min. investment is 100 TRX</li>								
            <br /><br />
            <div className="input-group mb-2 mr-sm-2" style={{position: 'relative', left: 23}}>							
              <input type="text" autoComplete="off" placeholder={0} min={100} className="form-control text-center" id="trxForPlan1" />
              <div className="input-group-append text-orange">
                TRX
              </div>				
            </div>	
          </ul>
          <div className="text-center text-orange">
            You should have ~2.5 TRX more<br />for the transaction fee  
          </div>	
          <a href="javascript: invest(1)" className="button-link-1">INVEST</a>
        </div>
      </div>
      <div className="col-lg-6 col-xl-3">
        <div className="plan-box box-3 pushtop-30" style={{backgroundColor: "#615ee1"}}>
          <p className="pretitle">Premium<br />[ <span className="text-orange">Daily ROI</span> ]</p>
          <p className="price-main"><span className="price">5.7%</span></p>
          <ul>
            <li>Dividends every second</li>
            <li><b>26 days</b></li>
            <li>Total return <b>169%</b></li>
            <li>Min. investment is 50 TRX</li>								
            <br /><br />
            <div className="input-group mb-2 mr-sm-2" style={{position: 'relative', left: 23}}>							
              <input type="text" autoComplete="off" placeholder={0} min={50} className="form-control text-center" id="trxForPlan2" />
              <div className="input-group-append text-orange">
                TRX
              </div>				
            </div>	
          </ul>
          <div className="text-center text-orange">
            You should have ~2 TRX more<br />for the transaction fee 
          </div>
          <a href="javascript: invest(2)" className="button-link-1">INVEST</a>
        </div>
      </div>
      <div className="col-lg-6 col-xl-3">
        <div className="plan-box box-4 pushtop-30" style={{backgroundColor: "#615ee1"}}>
          <p className="pretitle">Standard Plan<br />[ <span className="text-orange">Daily ROI</span> ]</p>
          <p className="price-main"><span className="price">6.7%</span></p>
          <ul>
            <li>Dividends every second</li>
            <li><b>18 days</b></li>
            <li>Total return <b>120.6%</b></li>
            <li>Min. investment is 10 TRX</li>								
            <br /><br />
            <div className="input-group mb-2 mr-sm-2" style={{position: 'relative', left: 23}}>							
              <input type="text" autoComplete="off" placeholder={0} min={10} className="form-control text-center" id="trxForPlan3" />
              <div className="input-group-append text-orange">
                TRX
              </div>				
            </div>	
          </ul>
          <div className="text-center text-orange">
            You should have ~2.5 TRX more<br />for the transaction fee 
          </div>							
          <a href="javascript: invest(3)" className="button-link-1">INVEST</a>
        </div>
      </div>					
    </div>
  </div>
</div>
<div className="widget-4 pushtop-130 drag-this-up">
  <div className="container">
    <div className="widget4-wrapper">
      <div className="widget-4-progress-detail">
        <div className="widget-4-progress-item item-1 active">
          <div className="row">
            <div className="col-md-6">
              <h4><i className="fas fa-coins" /> Dividents</h4>
              <br />Referral rewards
              <br /><b id="availableReferrerEarnings">0.00</b> TRX
              <br /><br />Withdrawable(referral rewards included)
              <br /><b id="withdrawable">0.00</b> TRX
              <a href="javascript:withdraw()" className="button-link-1 pushtop-30" id="withdrawButton">WITHDRAW</a>
              <br />
              <div className="text-white">
                You should have 1-2 TRX for the transaction fee 
              </div>	
              <br />
              My total investment <b className="totalInvestment" id="totalInvestment">0.00</b> TRX
              <br />
              Total dividends so far <b className="totalDivs" id="totalDivs">0.00</b> TRX
            </div>
            <div className="col-md-6">
              <h4><i className="fas fa-user-friends" /> Referral program</h4>
              <br />Your referral link [<a href="javascript:copyRef()" id="copy">COPY LINK</a>]: 
              <div id="yourRefLink" style={{fontWeight: 'bold'}}>no link...</div>
              You can get your referral link after investing.<br />
              <br />1 referral （5% Referral rewards） - <b id="level1RefCount">0</b>
              <br />2 referral （2% Referral rewards） - <b id="level2RefCount">0</b>
              <br />3 referral （0.5% Referral rewards） - <b id="level3RefCount">0</b>
              <br />Invitee (0.5% of the investment)
              <br /><br />Total referral rewards payout - <b id="referrerEarnings">0.00</b> TRX
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
;
export const userInfo = 
<div className="widget-2 text-left pushtop-100 drag-this-up" id="widget-2">
<div className="container">
  <div className="row">
    <div className="col-lg-6">
      <h3><i className="fas fa-university" /> My investments</h3><br /><br />
      <div id="myIvestments" />
      My total investment <b className="totalInvestment">0.00</b> TRX
      <br />
      Total dividends so far <b className="totalDivs">0.00</b> TRX						
      <br />						
      <a href="#investPlans" className="button-link-1 style-3 pushtop-30">INVEST NOW <i className="fas fa-caret-right" /></a>
    </div>
    <div className="col-lg-6">
      <img src={widget21} alt="widget-image" />
    </div>
  </div>
</div>
</div>
;
export const generalInfo = 
<div className="widget-1 text-center pushtop-80" id="about">
<div className="container">
  <div className="row">
    <div className="col-md-4 drag-this-left">
      <section>
        <div className="image-holder">
          <img src={widget11} alt="widget-image" />
        </div>
        <h6>Safe and reliable project</h6>
        <p>
          TRON EXPART runs automatically on the blockchain and its smart contract is uploaded to the TRON blockchain. No one is able to edit or delete the smart contract, nor influence its autonomous operation. The dividends are also automatically paid through the smart contract.
        </p>
      </section>
    </div>
    <div className="col-md-4 drag-this-up">
      <section>
        <div className="image-holder">
          <img src={widget12} alt="widget-image" />
        </div>
        <h6>Dividend distribute</h6>
        <p>
          TRON EXPART smart contract generates 3.7-6.7% dividends per day based on your investment and distribute your dividends to your balance. For example, if you invest in the 4.7% plan, then you will get over 100% of your first deposit in 21 days. The dividends generate every second and you can withdraw or reinvest your dividends each second. When you reinvest, the total investment would increase and you will get more dividends.
        </p>
      </section>
    </div>
    <div className="col-md-4 drag-this-right">
      <section>
        <div className="image-holder">
          <img src={widget13} alt="widget-image" />
        </div>
        <h6>Referral program</h6>
        <p>
          TRON EXPART smart contract set 3 tiers of referral rewards, which are 5%, 2%, and 0.5% respectively. Moreover, the invitee can also get 0.5% of his/her own investment as rewards. The referral rewards are distributed to your balance automatically and you can withdraw at anytime.
        </p>
      </section>
    </div>
  </div>
</div>
</div>
;
export const howTo = 
<div className="widget-7">
<div className="rising-elements text-center">
  <div className="rising-elm elm-1" data-trigger={400}>
    <div className="rising-inner">
      <img src={widget71} alt="element-image" />
      <h6>How to invest on desktop?</h6>
      <p>You can install the <a href="https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec?utm_source=chrome-ntp-icon" target="_blank" rel="noopener noreferrer" >TronLink</a> or <a href="https://chrome.google.com/webstore/detail/tronpay/gjdneabihbmcpobmfhcnljaojmgoihfk?hl=zh-CN" target="_blank" rel="noopener noreferrer" >TronPay</a> extension on Chrome. After the installation, you can create a new TRX wallet or import an existing TRX wallet, and then transfer the TRX from the exchange to the wallet. Finally, login on TronLink or TronPay to browse this website and invest.</p>
    </div>
    <div className="img-pin" />
  </div><div className="rising-elm elm-2" data-trigger={800}>
    <div className="rising-inner">
      <img src={widget72} alt="element-image" />
      <h6>How to invest on mobile?</h6>
      <p>You can download <a href=" https://www.bankowallet.com/" target="_blank" rel="noopener noreferrer" >Banko Wallet</a>、<a href="http://www.mathwallet.org/en/" target="_blank" rel="noopener noreferrer" >Math Wallet</a> or <a href="https://www.tronwallet.me/" target="_blank" rel="noopener noreferrer" >TronWallet</a> app from application store. After the installation, you can create a new TRX wallet or import an existing TRX wallet, and then transfer the TRX from the exchange to the wallet. Finally, find TRON EXPART within the wallet app or browse our site with the browser in the app, and then go to invest or withdraw.</p>
    </div>
    <div className="img-pin" />
  </div><div className="rising-elm elm-3" data-trigger={600}>
    <div className="rising-inner">
      <img src={widget74} alt="element-image" />
      <h6>How is the fund distributed?</h6>
      <p>Technical support: 3% Marketing: 3% Referral: 5%-2%-0.5% Invitee: 0.5%</p>
    </div>					
    <div className="img-pin" />
  </div><div className="rising-elm elm-4" data-trigger={400}>
    <div className="rising-inner">
      <img src={widget73} alt="element-image" />
      <h6>What is the referral program?</h6>
      <p>TRON EXPART smart contract set 3 tiers of referral rewards, which are 5%, 2%, and 0.5% respectively. Moreover, the invitee can also get 0.5% of his/her own investment as rewards. The referral rewards are distributed to your balance automatically and you can withdraw at anytime.</p>
    </div>
    <div className="img-pin" />
  </div>
</div>
</div>
;
export const ender = 
<div className="widget-7-main text-center">
<div className="container">
  <h3><img src={logo} alt="logo" style={{position: 'relative', top: '-5px'}} />  TRON EXPART</h3>
  <p className="mx-auto">
    Contact us
  </p>
</div>
<div className="buttons pushtop-10">
  <a href="https://t.me/" target="_blank" className="socialnet" style={{fontSize: '2em', color: '#fff'}}><i className="fab fa-telegram-plane" rel="noopener noreferrer"  /></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer"  className="socialnet" style={{fontSize: '2em', color: '#fff'}}><i className="fab fa-discord" /></a>
</div>
</div>
;


function newFunction() {
  return <input type="text" autoComplete="off" className={0} placeholder={0} min={10} id="trxForPlan3" />;
}


