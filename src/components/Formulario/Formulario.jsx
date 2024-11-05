import React, { useState } from 'react';
import './Formulario.css';

export default function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        asunto: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio';
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El teléfono es obligatorio';
        } else if (!/^\d+$/.test(formData.telefono)) {
            newErrors.telefono = 'El teléfono debe contener solo números';
        }

        if (!formData.correo.trim()) {
            newErrors.correo = 'El correo es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            newErrors.correo = 'El correo no es válido';
        }

        if (!formData.asunto.trim()) {
            newErrors.asunto = 'El asunto es obligatorio';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado:', formData);
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <form className='form__container' onSubmit={handleSubmit}>
            <li className='form__container--list'>
                {errors.nombre && (
                    <p className="error">{errors.nombre}</p>
                )}
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={{ borderColor: errors.nombre ? 'red' : 'initial' }}
                />
            </li>

            <li className='form__container--list'>
                {errors.telefono && (
                    <p className="error">{errors.telefono}</p>
                )}
                <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    style={{ borderColor: errors.telefono ? 'red' : 'initial' }}
                />
            </li>

            <li className='form__container--list'>
                {errors.correo && (
                    <p className="error">{errors.correo}</p>
                )}
                <input
                    type="text"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    style={{ borderColor: errors.correo ? 'red' : 'initial' }}
                />
            </li>

            <li className='form__container--list'>
                {errors.asunto && (
                    <p className="error">{errors.asunto}</p>
                )}
                <textarea
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    style={{ borderColor: errors.asunto ? 'red' : 'initial' }}
                ></textarea>
            </li>

            <button className='form__send' type="submit">Enviar</button>

            {isSubmitted && <p className="success">Formulario enviado con éxito!</p>}
        </form>
    );
}
