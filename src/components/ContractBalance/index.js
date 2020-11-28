import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';



class ContractBalance extends React.Component {

  state = {
    copiedValue : this.props.reflink,
    copied: false
  };



render() {
  return (
             

 <section className="section-padding sale-section">
  <h1>{this.state.wallet}</h1>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title text-center">
          <div className="sale-header wow slideInDown" data-wow-duration="2s">
            <h2>Total Invested in Contract:<i className='fa fa-spin fa-spinner'></i>{this.props.contractBalance}</h2>
            
          </div>
          <div className="sale-content">
            <div className="row">
              
              <div className="col-md-6 wow slideInLeft" data-wow-duration="4s">
              
                <p className="about-community-text text-center">
                 Your Investments:<i className='fa fa-spin fa-spinner'></i> {this.props.balance}
                </p>
              </div>
              <div className="col-md-6 wow slideInRight" data-wow-duration="8s">
              <p className="about-community-text text-center">

                <input value={this.props.reflink}
                      onChange={({target: {copiedValue}}) => this.setState({copiedValue, copied: false})} className="form-control"
                 />
                 <CopyToClipboard text={this.props.reflink}
                    onCopy={() => this.setState({copied: true})}>
                    <button>Copy</button>
                 </CopyToClipboard>
 
                  {this.state.copied ? <span className="alert alert-success alert-dismissable">Copied.</span> : null}
                </p>
              </div>
              <div className="col-md-6 wow slideInLeft" data-wow-duration="4s">
              
                <p className="about-community-text text-center">
                 Your Dividends:<i className='fa fa-spin fa-spinner'></i> {this.props.withdr}
                </p>
              </div>
              <div className="col-md-6 wow slideInRight" data-wow-duration="2s">
              
                <p className="about-community-text text-center">
                 Refferal Earnings:<i className='fa fa-spin fa-spinner'></i> {this.props.refBalance}
                </p>
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

export default ContractBalance;