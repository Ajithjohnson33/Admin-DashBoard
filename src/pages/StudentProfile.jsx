

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

export default function StudentProfile() {
  return (
    <div style={styles.form}>
        <h2 style={{ fontSize: '40px' }}>Student Registration</h2>
  
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
          <label style={styles.label} htmlFor="subject">Department:</label>
          <select id="subject" name="subject" style={styles.input}>
            <option
   
  value="">Select Department</option>
  
            
  <option
   
  value="Mathematics">MCA</option>
  
            
  <option
   
  value="Science">Btec</option>
  
            
  <option
   
  value="English">BSC </option>
           
          </select>
        </div>
  
        
  
        
  
        <button style={styles.button} type="submit">
          Register
        </button>
      </div>
  );
}
