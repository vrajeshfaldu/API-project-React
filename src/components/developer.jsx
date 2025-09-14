import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Developer() {
  return (
    <>
<div className="container developer-container1">
  <div className="row">
  {/* <!-- Text Column  */}
  <div className="col-md-6">
    <h1 style={{marginLeft: "70px", marginTop:"130px"}}>
     OANDA’s API integration portal for developers
    </h1>
    <p className="firstpara" style={{ fontWeight: "bold"}}>
    It’s easy to integrate OANDA’s powerful exchange rates API into your system, software or application. Plus, you’ll be able to save valuable resources and time by using our self-servicing developers portal.    </p>
    <p className="firstpara">
    As a developer you can build your own API integration with us. Or, simply select from our pre-built integrations and connectors that can be up and running almost immediately. Trial our API free for seven days now. See how easy it is to integrate our API into your system for all your company's FX data needs.    </p>
    
    <button className="seeourbtn">
        See Our Devloper Resourse
      </button>
    <Link to="contact.html" className="btn btn-contact" style={{marginLeft:" 15px"}}>Contact us</Link>

    </div>

  {/* <!-- Image Column  */}
  <div className="col-md-6">
    <img src="Devloper.jpg" alt="FX Data" style={{marginLeft: "60px", marginTop:"20px", maxwidth:"75%"}}/>
  </div>
</div>

<div className="row" style={{marginTop:"130px"}}>
  <div className="col-md-4">

    <img src="Devloper10.jpg" style={{marginLeft:" 120px"}}/>
    <h4 className="paraandh4tag" >Get your free API key</h4>
    <p className="paraandh4tag">Start a seven day free trial to access unlimited free quotes or choose an API package that fits <br/>your firm's FX data needs.</p></div>

  <div className="col-md-4">
    <img src="Devloper9.jpg" className="paraandh4tag"/>
        <h4 className="paraandh4tag">Visit developer portal</h4>
        <p className="paraandh4tag">Use integration documentation, sample code and handy guides to help integrate our API into your platform, tool or website.</p>
  </div>

  <div className="col-md-4">
    <img src="Devloper8.jpg" className="paraandh4tag"/>
    <h4 className="paraandh4tag" >Start making data requests</h4>
    <p className="paraandh4tag" >Leverage your free API key to test various currency pairs and outputs with our interactive API documentation page.</p>
</div>
 </div>

 <div className="row">
    <div className="col-md-6" >
        <img src="Devloper1.jpg" style={{marginTop:"100px",marginBottom: "150px"}}/>
    </div>
    <div className="col-md-6">
        <h1 style={{marginLeft:"60px", fontWeight:"bold",fontSize:"xx-large",marginTop:"150px"}}>Take advantage of our pre-built<br/> integrations</h1>
        <p style={{marginTop:"30px"}}>We've partnered with ERPs, accounting software providers, treasury management systems, and integration platforms to make API installation as seamless and efficient as possible</p>
        <p style={{marginTop:"20px"}}>1.Contact our sales team at fxdata@oanda.com</p>
        <p>2.Get connected with a partner to discuss the requirements</p>
        <p>3.Start pulling data from the OANDA API</p>
        <button className="intparterbtn">See Our Integration Partener</button>
    </div>
 </div>

 <div className="row mt-5">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card developer-card1" style={{marginLeft:"105px",height: "500px"}}>
      <div className="card-body" >
        <img src="Devloper2.jpg"/>
        <h5 className="card-title">Platform eco-system</h5>
        <p className="card-text">Our pre-built integrations allow you to use pre-built interfaces to connect your ERP systems with OANDA. Simply enter your API key in your ERP system and choose a schedule for your updates, and your ERP instance will start receiving rates from OANDA for system-wide use.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card developer-card2" style={{marginLeft:"50px",height: "500px"}}>
      <div className="card-body">
           <img src="Devloper2.jpg"/>
     
        <h5 className="card-title">Third party connectors</h5>
        <p className="card-text">We’ve developed integrations with specialized partners who support a range of system interfaces with a wide range of third-party systems. Contact one of our integration partners if you don't see your ERP account or treasury platforms here.</p>
      </div>
    </div>
  </div>
</div>
{/* <!-- classname=whychoosesec  */}
<div className="section developer-section1 mb-5" style={{backgroundColor:" #eaddf3",height: "570px",width:" 100%",marginTop:" 80px"}}>
    <div className="row">
        <div className="col-md-6">
    <h1 className="whychoosesec" style={{fontSize: "xx-large",fontWeight:" bold",paddingTop:" 70px"}}>Why Choose Our API?</h1>
    <p className="whychoosesec" style={{paddingTop: "25px"}}>We’ve partnered with ERPs, accounting software providers, treasury management systems, and integration platforms to make API installations as seamless and efficient as possible.</p>
    <p className="whychoosesec">REST API</p>
    <p className="whychoosesec" >Outputs in JSON, XML and CSV formats</p>
     <p className="whychoosesec" >Over 38,000 currency pairs</p>
    <p className="whychoosesec" >Fully redundant servers</p>
    <button className="apibtn" >All API Features</button>    

    </div>

    <div className="col-md-5">
        <img src="Devloper3.jpg" style={{height: "500px", width: "100%", marginTop:"45px"}}/>
    </div>
    </div>
</div>

</div>
  

    </>
  )
}

export default Developer