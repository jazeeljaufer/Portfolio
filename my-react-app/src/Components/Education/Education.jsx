import './Education.css'

const Education = () => {
    return (
        <div className="education">
            <div className="qualify">
                <div className="head"><h3>My Qualification </h3></div>
                <img src="/images/Groupedu.svg" alt="edu" />
            </div>
            <div className="qualification">
                <div className="quali-cont">
                    <h2>GCE Ordinary Level</h2>
                    <h3>Al-Haqqaniyya Arabic College </h3>
                    <div className="arw">
                        <h4>2020 Batch</h4>
                        <a href="https://haqqaniyyah.org/"><img src="/images/arrow.svg" alt="arrow" /></a>
                    </div>
                </div>
                <div className="quali-cont">
                     <h2>GCE Advance Level</h2>
                    <h3>BT/Al-Hira Maha Vidyalaya </h3>
                    <div className="arw">
                        <h4>2023 Batch</h4>
                        <a href="https://web.facebook.com/HirarianMediaUnit"><img src="/images/arrow.svg" alt="arrow" /></a>
                    </div>
                </div>
                <div className="quali-cont">
                     <h2>Bachelor of Science Honours in Information Technology</h2>
                    <h3>Sri Lanka Institute of Information Technology</h3>
                    <div className="arw">
                        <h4>2028 Batch</h4>
                        <a href="https://www.sliit.lk/"><img src="/images/arrow.svg" alt="arrow" /></a>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Education;
