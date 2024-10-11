import React from 'react'
import '../../CSS/Home/Contact.css'

export default function Contact() {
  return (
    <div className='Contact'>
        <div className='ContactLeft'>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className='formFilds'>
                    <input placeholder='Email address' />
                    <input placeholder='Phone Number' />
                </div>
                    <button className='formSubscribe'>Subscribe</button>
                    <p className='contactDesc'>By providing your phone number and/or email and clicking “SUBSCRIBE” above, you agree to receive recurring automated promotional messages from Burrow at the phone number and/or email used when signing up. Consent is not a condition of purchase. Msg frequency may vary. Text Msg & data rates may apply. Reply HELP for help and STOP to unsubscribe from texts.
See <a>Terms and Conditions</a> & <a>Privacy Policy</a>.</p>
        
            </form>
        </div>
        <ul className='ContactRight'>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
        </ul>
    </div>
  )
}
