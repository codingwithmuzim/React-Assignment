import React, { useState } from 'react';

const FormComponent = () => {
    const [showForm, setShowForm] = useState({
        color: "black",
        backgroundColor: "white"
    });
    const [btnText, setbtnText] = useState("Enable Dark Mode");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };


    const handleClick = () => {
        if (showForm.color == "black") {
            setShowForm({
                color: "white",
                backgroundColor: "black"
            })
            setbtnText("Enable Light Mode");
        } else {
            setShowForm({
                color: "black",
                backgroundColor: "white"
            })
            setbtnText("Enable Dark Mode");
        }

    };
    return (
        <div className='body' style={showForm}>
            <div className="form-container" style={showForm}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <button onClick={handleClick} className="submit-button">{btnText}</button>
            </div>
        </div>
    );
};
export default FormComponent;
