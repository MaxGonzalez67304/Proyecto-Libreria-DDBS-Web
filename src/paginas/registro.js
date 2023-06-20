import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    username: '',
    email: '',
    celular: '',
    password: '',
    confirmPassword: '',
    nombreLibro: '',
    tiempoRenta: ''
  });
  const [passwordError, setPasswordError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }

    // Aquí puedes realizar acciones con los datos del formulario, como enviar una solicitud al servidor
    console.log(formData);

    // Restablecer el estado del error de contraseña
    setPasswordError(false);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inlineGroup}>
          <div style={{ ...styles.inlineFormGroup, width: '45%' }}>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required style={styles.input} />
          </div>
          <div style={{ ...styles.inlineFormGroup, width: '45%' }}>
            <label>Apellido:</label>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} required style={styles.input} />
          </div>
        </div>
        <div style={styles.inlineGroup}>
          <div style={styles.inlineFormGroup}>
            <label>Edad:</label>
            <input type="number" name="edad" value={formData.edad} onChange={handleInputChange} required style={styles.input} />
          </div>
          <div style={styles.inlineFormGroup}>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={styles.input} />
          </div>
          <div style={styles.inlineFormGroup}>
            <label>Celular:</label>
            <input type="number" name="celular"  pattern="[0-9]{10}" value={formData.celular} onChange={handleInputChange} required style={styles.input} />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label>Nombre de usuario:</label>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required style={styles.input} />
        </div>
        <div style={styles.inlineGroup}>
          <div style={{ ...styles.inlineFormGroup, width: '45%' }}>
            <label>Nombre del Libro:</label>
            <input type="text" name="nombreLibro" value={formData.nombreLibro} onChange={handleInputChange} required style={styles.input} />
          </div>
          <div style={{ ...styles.inlineFormGroup, width: '45%' }}>
            <label>Tiempo de renta:</label>
            <input type="datetime-local" name="tiempoRenta" value={formData.tiempoRenta} onChange={handleInputChange} required style={styles.input} />
          </div>
        </div>
        <div style={styles.formGroup}>
          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label>Confirmar contraseña:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required style={styles.input} />
        </div>
        {passwordError && <p style={styles.error}>Las contraseñas no coinciden.</p>}
        <button type="submit" style={styles.button}>Registrarse</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
    height: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '800px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0'
  },
  formGroup: {
    marginBottom: '15px'
  },
  inlineGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  inlineFormGroup: {
    width: '30%'
  },
  input: {
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%'
  },
  button: {
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#3F448C',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginTop: '5px',
    fontSize: '14px'
  }
};

export default RegistrationForm;