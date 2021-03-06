import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';
import { faHome, faStoreAlt, faListAlt, faGift, faWallet } from '@fortawesome/free-solid-svg-icons';


function Footer(props) {
  var home = (props.pagename === "Home")? 'current': null
  var activity = (props.pagename === "Activity")? 'current': null
  var wallet = (props.pagename === "Wallet")? 'current': null
  var market = (props.pagename === "Market")? 'current': null
  var earn = (props.pagename === "Earn")? 'current': null

  return (
    <div className="tab">

      <button onClick={() => props.pagination("Home")} className={`${home} navlink`}>
        <FontAwesomeIcon icon={faHome} size="lg" />
       Home
       </button>



      <button className={`${activity} navlink`} onClick={() => props.pagination("Activity")} >
        <FontAwesomeIcon icon={faListAlt} size="lg"></FontAwesomeIcon>
        Activity
      </button>

      <button className={`${wallet} navlink`} onClick={() => props.pagination("Wallet")} >
        <FontAwesomeIcon icon={faWallet} size="lg"></FontAwesomeIcon>
        Wallet
      </button>


      <button className={`${market} navlink`} onClick={() => props.pagination("Market")} >
        <FontAwesomeIcon icon={faStoreAlt} size="lg"></FontAwesomeIcon>
        Market
      </button>


      <button className={`${earn} navlink`} onClick={() => props.pagination("Earn")} >
        <FontAwesomeIcon icon={faGift} size="lg"></FontAwesomeIcon>
        Earn
      </button>

    </div>
  );
}

export default Footer;
