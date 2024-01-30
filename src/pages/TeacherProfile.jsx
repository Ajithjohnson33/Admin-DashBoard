import React, { useState } from "react";

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  textArea: {
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: '14px',
    height: '150px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '15px',
  },
};

export default function Profile() {
  
    
      

    return (
      <div style={styles.form}>
        <h2 style={{ fontSize: '40px' }}>Teacher Registration</h2>
  
        <div style={styles.field}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            style={styles.input}
            required
          />
        </div>
  
        <div style={styles.field}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            required
          />
        </div>
  
        <div style={styles.field}>
          <label style={styles.label} htmlFor="subject">Subject:</label>
          <select id="subject" name="subject" style={styles.input}>
            <option
   
  value="">Select Subject</option>
  
            
  <option
   
  value="Mathematics">Mathematics</option>
  
            
  <option
   
  value="Science">Science</option>
  
            
  <option
   
  value="English">English</option>
            {/* ... other options for different subjects ... */}
          </select>
        </div>
  
        <div style={styles.field}>
          <label style={styles.label} htmlFor="experience">
            Years of Experience:
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            style={styles.input}
          />
        </div>
  
        <div style={styles.field}>
          <label style={styles.label} htmlFor="biography">
            Biography:
          </label>
          <textarea
            id="biography"
            name="biography"
            style={styles.textArea}
          ></textarea>
        </div>
  
        <button style={styles.button} type="submit">
          Register
        </button>
      </div>
    );
  
  
}