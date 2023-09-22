
import Layout from "../components/layout/layout";
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSuccess = () => {
    toast.success('Email sent successfully!', {
      position: "top-right",
      autoClose: 3000, // Close the toast message after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleError = () => {
    toast.error('Error sending email. Please try again later.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true when submitting the form
      setSuccessMessage('');
      setErrorMessage('');

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Email sent successfully!');
        handleSuccess(); // Display success toast
      } else {
        setErrorMessage('Error sending email. Please try again later.');
        handleError(); // Display error toast
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Error submitting form. Please try again later.');
      handleError(); // Display error toast
    } finally {
      setLoading(false); // Set loading to false when the operation is complete
    }
  };


  return (
    <Layout>
      <div className={styles.contactpage}>
      <div className={styles.sectionhead}>
        <h1 className={styles.heading}>Contact Us</h1>
        <h5 className={styles.subheading}>Innovation Meets Excellence: Contact Us Today!</h5>
      </div>

      <div className={styles.formcontainer}>
        {loading && (
          <div className={styles.loadingspinner}>
            <div className={styles.spinner}></div>
            Sending...
          </div>
        )}

        {successMessage && <p className={styles.successmessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errormessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="name">Name</label>
            <input
            
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
               className={styles.input}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
               className={styles.input}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
               className={styles.input}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
               className={styles.input}
            />
          </div>
          <div className={styles.buttondiv}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      </div>
    </Layout>
  );
};

export default Contact;
