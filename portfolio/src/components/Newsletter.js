import { useState, useEffect } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';

export const Newsletter = ({ onValidated }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf('@') > -1) {
      setStatus('sending');
      onValidated({ email }, setStatus);
    } else {
      setStatus('error');
      setMessage('Please enter a valid email address.');
    }
  };

  useEffect(() => {
    if (status === 'sending') {
      setMessage('Sending...');
    } else if (status === 'error') {
      setMessage('Something went wrong, please try again later.');
    } else if (status === 'success') {
      setMessage('Message sent successfully');
      setEmail('');
    }
  }, [status]);

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to My Newsletter &<br></br> Never miss latest updates
            </h3>
            {status && <Alert variant={status === 'error' ? 'danger' : 'success'}>{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
