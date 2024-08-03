import emailjs from 'emailjs-com';
import { Newsletter } from './Newsletter';

export const EmailJSForm = () => {
  const sendEmail = (formData, setStatus) => {
    const { email } = formData;
    const templateParams = {
      to_email: email,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_kEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('error');
    });
  };

  return (
    <Newsletter onValidated={sendEmail} />
  );
};
