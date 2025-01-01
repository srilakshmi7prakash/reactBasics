import React, { useState } from 'react';


function SampleForm() {


    const [formData, setFormdata] = useState({
        firstName: "",
        lastName: "",
        age: "",
        submitted: false
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormdata({ ...formData, [name]: value });
    }

    const logDetails = (event) => {
        event.preventDefault();
        setFormdata({ ...formData, submitted: true })
    }
    const resetForm = () => {
        setFormdata({ ...formData, firstName: "", lastNameL: "", age: "", submitted: false })
    }

    return (
        <div>
            <form action="" onSubmit={logDetails} onReset={resetForm}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" onChange={handleChange} />
                <button type='submit'>Submit</button>
                <button type="reset">Reset</button>
            </form>
            {formData.submitted && (
                <div>
                    <h3>Submitted Details:</h3>
                    <ul>
                        <li>First Name: {formData.firstName}</li>
                        <li>Last Name: {formData.lastName}</li>
                        <li>Age: {formData.age}</li>
                    </ul>
                </div>
            )

            }
        </div>


    );

}


export { SampleForm };