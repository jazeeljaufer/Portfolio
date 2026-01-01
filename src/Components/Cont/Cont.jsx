import React from 'react';
import './Cont.css';

const Cont = () => {
  return (
    <>
      <div className="contact">
          <img src="/images/robot.svg" alt="robo" className="robot-hello" />
          <div className="cont-txt">
              <p>Feel free to reach out for collaborations, freelance projects, or any inquiries—I'm always open to new opportunities and connections!</p>
              <div
                className="cont-mail"
                onClick={() =>
                  window.open(
                    'https://mail.google.com/mail/?view=cm&fs=1&to=mjmohammedjazeel@gmaill.com',
                    '_blank'
                  )
                }
              >
                <div className="m-box">
                  <h3>mjmohammedjazeel@gmaill.com</h3>
                </div>
                <div className="m-box">
                  <img src="/images/Mail.svg" alt="mail" />
                </div>
              </div>
          </div>
      </div>
      <div className="signature">
        <p className="signature-text">Mohammed Jazeel</p>
      </div>
    </>
    );
}
export default Cont;