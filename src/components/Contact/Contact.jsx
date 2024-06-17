import './contact.scss';
import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
      <div className="contact__wrapper--left">
        <img src="assets/shake.svg" alt="Handshake" className="handshake-image" />
      
       
      </div>
      <div className="contact__wrapper--right">
      <h2>Contact</h2>
        <div className="contact-links">
          <a href="https://github.com/BhawanMalhi" target="_blank" rel="noopener noreferrer">
            <img src="assets/github-sign.png" alt="GitHub Logo" className="contact-logo" />
          </a>
          <a href="https://www.linkedin.com/in/bhawanmalhi/" target="_blank" rel="noopener noreferrer">
         
          <img src="assets/linkedin.png" alt="linkedin Logo" className="contact-logo" />
          
           
          </a>
          <a href="mailto:bhawan29malhi@gmail.com">
          <img src="assets/mail.png" alt="Mail Logo" className="contact-logo" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>

      </div>
     
    </div>
  );
}