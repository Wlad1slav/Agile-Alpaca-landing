'use client';

import React, { useState } from "react";
import Button from "@/components/_general/button/Button";
import Input from "@/components/_general/input/Input";
import Select from "@/components/_general/select/Select";
import RadioContainer from "@/components/_general/radio/RadioContainer";
import './styles/get-started.scss';

function GetStartedForm() {
    const [data, setData] = useState<{
        fullname: string;
        email: string;
        phone?: string;
        preferred_language: 'English' | 'Українська' | 'Російська';
        company: string;
        employees_number: '1-10' | '10-50' | '50-100' | '100-500' | '500+';
        cash_turnover: '$1000-5000' | '$5000-10000' | '$10000+';
        message: string;
    }>({
        fullname: '',
        email: '',
        preferred_language: 'English',
        company: '',
        employees_number: '1-10',
        cash_turnover: '$1000-5000',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(data);
    }

    /**
     * Handles the input change event.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The event object.
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // Update the state by merging the existing data with the new value for the input field.
        console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
                    <Input 
                        type="text" 
                        name={"fullname" }
                        placeholder="Full name" 
                        value={data.fullname} 
                        onChange={handleInputChange}
                        max={60}
                        min={2}
                        required={true}
                        helpText="Please enter your full name"
                    />

                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={data.email} 
                        onChange={handleInputChange}
                        required={true}
                    />

                    <Input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone number" 
                        value={data.phone ?? ''} 
                        onChange={handleInputChange}
                    />

                    <Input 
                        type="text" 
                        name="company" 
                        placeholder="Company name" 
                        value={data.company} 
                        onChange={handleInputChange}
                    />

                    <Select 
                        options={[
                            { value: 'English', text: 'English' },
                            { value: 'Українська', text: 'Українська' },
                            { value: 'Російська', text: 'Російська' },
                        ]}
                        name="preferred_language"
                        label="Preferred language"
                        placeholder="Preferred language"
                        value={data.preferred_language}
                        onChange={handleInputChange}
                    />

                    <RadioContainer 
                        label="Employees number"
                        buttons={[
                            { name: 'employees_number', value: '1-10', label: '1-10' },
                            { name: 'employees_number', value: '10-50', label: '10-50' },
                            { name: 'employees_number', value: '50-100', label: '50-100' },
                            { name: 'employees_number', value: '100-500', label: '100-500' },
                            { name: 'employees_number', value: '500+', label: '500+' },
                        ]}
                        onChange={handleInputChange}
                    />

                    <RadioContainer 
                        label="Cash turnover"
                        buttons={[
                            { name: 'cash_turnover', value: '$1000-5000', label: '$1000-5000' },
                            { name: 'cash_turnover', value: '$5000-10000', label: '$5000-10000' },
                            { name: 'cash_turnover', value: '$10000+', label: '$10000+' },
                        ]}
                        onChange={handleInputChange}
                    />

                    <Button text="Send" buttonStyle="filling" />
                </form>
    );
}

export default GetStartedForm;