import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import queryString from 'query-string';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const WhatsAppButton = () => {



  const renderTooltip = (props) => (
    <Tooltip className='bg-white text-dark' dir='rtl'  id="button-tooltip" {...props}>
      צריכים עזרה?
    </Tooltip>
  );
  const handleWhatsAppClick = () => {

  
    // מספר הטלפון שלך עם קידומת בינלאומית
    const phoneNumber = '+9720549959443';
    // ההודעה שתופיע כשהמשתמש פותח את וואטסאפ
    const message = 'שלום! אני מעוניין לדבר איתך בנוגע לאתר שלך.';

    const url = `https://wa.me/${phoneNumber}?${queryString.stringify({ text: message })}`;

    window.open(url, '_blank');
  
  };

  return (
  
     <OverlayTrigger
     placement="right"
     delay={{ show: 250, hide: 400 }}
     overlay={renderTooltip}
   >
     <button  className="btn btnT123" onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp}  size='2xl' style={{color: "white"}}/>

      
    </button>
   </OverlayTrigger>
   
  );
};

export default WhatsAppButton;