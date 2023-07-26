import logo from './logo.svg';
import './App.css';
import emailjs from '@emailjs/browser';

function Sendemail() {
    const sendanemail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_2u0qt1p','template_cw4i7cf',e.target,'uT5-ASjkm4JDtNtm4');
    }
  return (
    <div className="App">
        <form onSubmit={(e)=>sendanemail(e)}>
        <input type="text" name="from_name"/><br/>
        <input type="email" name="email_address"/><br/>
        <input type="text" name="subject"/><br/>
        <input type="textarea" name="message"/><br/>
      <button >Submit</button></form>
    </div>
  );
}
export default Sendemail;