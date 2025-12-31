import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Worktogether.css';

const Worktogether = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const SERVICE_ID = 'service_6mjq9lk';
    const TEMPLATE_ID = 'template_q8v45nd';
    const PUBLIC_KEY = 'J2Fzp9nK1hi9vTAOf';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.firstName,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            setSubmitStatus('success');
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div className="Worktogether">
            <div className="left">
                <div className="title">
                <div className="tit-head"><h3>Let's Work Together</h3></div>
                <p>Combining creativity with technical expertise to deliver exceptional digital experiences</p>
                </div>
            <img src="/images/Female specialist working in support service.svg" alt="img" />
            </div>

            <div className="right">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea 
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                    {submitStatus === 'success' && (
                        <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p style={{ color: 'red', marginTop: '10px' }}>Failed to send. Please try again.</p>
                    )}
                </form>
            </div>
        </div>

    );
}

export default Worktogether;