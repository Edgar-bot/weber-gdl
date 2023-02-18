import React from 'react';
import { useState } from 'react';
import {FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';



/*
https://www.youtube.com/watch?v=sGQSz22U8VM
    https://www.youtube.com/watch?v=sGQSz22U8VM
        https://www.youtube.com/watch?v=sGQSz22U8VM
            https://www.youtube.com/watch?v=sGQSz22U8VM
                https://www.youtube.com/watch?v=sGQSz22U8VM*/
export default function Contact() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const data = await response.json();

            if (data.success) {
                setSent(true);
                setLoading(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setError(true);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
        }
    };



    return (
        <section id="contact" className="contact mt-5">
            <div className="container">

                <div className="section-title mt-5">
                    <h1>Kontakt</h1>
                    <h4><span>Setzen Sie sich gerne mit uns in Verbindung</span></h4>
                    <p></p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-md-4">
                        <div className="info-box mb-4">
                            <FaMapMarkerAlt size={32} color="#8a2be2" />
                            <h3>Adresse</h3>
                            <p>Kurt-Schumacher-Straße 231</p>
                            <p>73529 Schwäbisch Gmünd</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="info-box mb-4">
                            <FaEnvelope />
                            <h3>Email</h3>
                            <p>info@weber-gebaeudedienstleistung.de</p>
                            <p> </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="info-box mb-4">
                            <FaPhone />
                            <h3>Telefon</h3>
                            <p>+49 1522-9815940</p>
                            <p> </p>
                        </div>
                    </div>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6 ">
                        <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.4320088820828!2d9.847879013962949!3d48.782192165356484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479907673df5c749%3A0xd74ef7edc2c3ba3e!2sWeber%20Geb%C3%A4udedienstleistung!5e1!3m2!1sde!2sde!4v1676411531969!5m2!1sde!2sde" frameBorder="0" style={{ border: 0, width: '100%', height: '384px' }} allowFullScreen title="Google Maps"></iframe>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} role="form" className="php-email-form">
                            <div className="row">
                                <div className="col form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        className="form-control"
                                        id="name"
                                        placeholder="Vor- und Nachname"
                                        required
                                    />
                                </div>
                                <div className="col form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className="form-control"
                                        id="email"
                                        placeholder="Email-Adresse"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={(event) => setSubject(event.target.value)}
                                    className="form-control"
                                    id="subject"
                                    placeholder="Betreff"
                                    required
                                />
                            </div>
                            <div className="form-group">
          <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="form-control"
              rows="5"
              placeholder="Ihre Nachricht"
              required
          ></textarea>
                            </div>
                            <div className="my-3">
                                {loading && <div className="loading">Loading</div>}
                                {error && <div className="error-message">An error occurred. Please try again later.</div>}
                                {sent && <div className="sent-message">Your message has been sent. Thank you!</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={loading}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )}