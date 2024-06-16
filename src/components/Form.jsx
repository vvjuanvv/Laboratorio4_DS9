import { useState } from 'react';
import axios from 'axios';
/**
* Componente de formulario para enviar datos al backend.
*/
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/form',
                formData);
            console.log('Form submitted successfully:', response.data);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form');
        }
    };
    return (
        <div style={parentStyles}>
            <form onSubmit={handleSubmit} style={formStyles.form}>
                <h2>Formulario</h2>
                <div style={formStyles.inputGroup}>
                    <label style={formStyles.label}>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={formStyles.input}
                        />
                    </label>
                </div>
                <div style={formStyles.inputGroup}>
                    <label style={formStyles.label}>
                        Apellido:
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            style={formStyles.input}
                        />
                    </label>
                </div>
                <div style={formStyles.inputGroup}>
                    <label style={formStyles.label}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={formStyles.input}
                        />
                    </label>
                </div>
                <div style={formStyles.inputGroup}>
                    <label style={formStyles.label}>
                        Edad:
                        <input
                            type="number"
                            name="edad"
                            value={formData.edad}
                            onChange={handleChange}
                            style={formStyles.input}
                        />
                    </label>
                </div>
                <div style={formStyles.inputGroup}>
                    <label style={formStyles.label}>
                        Telefono:
                        <input
                            type="number"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            style={formStyles.input}
                        />
                    </label>
                </div>
                <button type="submit" style={formStyles.button}>Enviar</button>
                {message && <p>{message}</p>} {/* Muestra el mensaje del servidor */}
            </form>
        </div>
    );
};

const parentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Esto asume que quieres que el formulario esté centrado en toda la pantalla
};

const formStyles = {
    form: {
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        maxWidth: '500px',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputGroup: {
        marginBottom: '15px',
        width: '100%',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px 0 5px 0',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    }
};

export default Form;