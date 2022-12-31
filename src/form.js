import React from "react";
import i from './images/call.png';
import j from './images/mailus.png';
  const MailForm = () =>{

  return (
    <div>
    <form>
  <div class="field">
    <label>Your Name</label>
    <input type="text" name="your name" id="user" placeholder="Your Name"/>
  </div>
  <div class="field">
    <label>Your Mail</label>
    <input type="text" name="your mail" id="ponnurumahesh129" placeholder="Your Mail"/>
  </div>
  <div class="field">
    <label>Mail To Send</label>
    <input type="text" name="reply_to" id="reply_to" placeholder="ponnurumahesh129@gmail.com" />
  </div>
  <input type="submit" id="button" value="Send Email" />
</form>
<div>
<img src={i} alt="" className="icons1" />
<strong className="str">+91 8341305834</strong>
</div>
<div>
<img src={j} alt="" className="icons2"/>
<strong className="str1">ponnurumahesh129@gmail.com</strong>
</div>
</div>

  );
  };


export default MailForm;
