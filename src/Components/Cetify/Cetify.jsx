import './Cetify.css'

const Cetify = () => {
    return (
        <div className="cetify">
            <div className="qualify">
                <div className="head"><h3>My Qualification </h3></div>
            </div>
            <div className="certification">
                <p>I am currently pursuing  my
                    <span> BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT).</span>
                     I am building a strong foundation in software development, database management, computer networking, and problem-solving, while continuously improving my technical and analytical skills. Through both academic learning and practical projects, I am gaining hands-on experience in modern IT technologies. I am highly motivated, eager to learn, and committed to growing as a skilled IT professional, with my degree expected to be 
                <span>completed in 2028.</span></p>
                <div className="loading-spinner">
                    <img src="/images/loading.svg" alt="loading" />
                </div>
            </div>
            <div className="e-cetify">
                <h3>Certificates</h3>
                <div className="certi-list">
                  <img src="/certify/1751034301176.jpeg" alt="cetify" />
                  <img src="/certify/1751451211973.jpeg" alt="cetify" />
                  <img src="/certify/1751627238413.jpeg" alt="cetify" />
                  <img src="/certify/1751826355860.jpeg" alt="cetify" />
                  <img src="/certify/1751866231729.jpeg" alt="cetify" />
                  <img src="/certify/1752565572503.jpeg" alt="cetify" />
                  <img src="/certify/1752829432342.jpeg" alt="cetify" />
                </div>
            </div>
        </div>

    );

}

export default Cetify;
