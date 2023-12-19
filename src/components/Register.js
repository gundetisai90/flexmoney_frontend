import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const currentDate = new Date();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [age, setAge] = useState(0);
    const [batch, setBatch] = useState('6-7AM');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (!firstName) {
            return toast.error('First Name required');
        }
        if (!lastName) {
            return toast.error('Last Name required');
        }
        if (!cardNumber || cardNumber.length < 16 || cardNumber.length > 16) {
            return toast.error('Invalid Card Number');
        }
        if (contactNumber.length < 10 || contactNumber.length > 10) {
          return toast.error('Please enter a valid contact number');
        }
        if (!cvv || cvv < 100 || cvv > 999) {
          return toast.error('Invalid CVV');
        }
        if (!age || age < 18 || age > 65) {
            return toast.error('Age should be between 18 and 65');
        }

        axios({
            method: 'POST',
            url: 'https://flexmoney-backend-umber.vercel.app/register',
            data: { firstName, lastName, contactNumber, age, batch }
        }).then((res) => {
                console.log('register response')
                console.log(res);
                toast.success('Registered successfully');
            }).catch(e => {
                console.log('register error')
                console.log(e.response.data.message);
                toast.error(e.response.data.message);
            })
    }

    return (
        <div className='register my-3'>
            <ToastContainer />
            <h1>Registration Form</h1>
            <div className='d-flex justify-content-center align-items-center pb-5 my-3'>
                <div className='container'>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor={'firstName'} className='form-label' >First Name</label>
                            <input type={'text'} className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor={'lastName'} className='form-label' >Last Name</label>
                            <input type={'text'} className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor={'batch'} className='form-label'>Batch</label>
                            <select value={batch} className='form-select' onChange={(e) => setBatch(e.target.value)} >
                                <option value={'6-7AM'}>6-7AM</option>
                                <option value={'7-8AM'}>7-8AM</option>
                                <option value={'8-9AM'}>8-9AM</option>
                                <option value={'5-6PM'}>5-6PM</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor={'age'} className='form-label'>Age</label>
                            <input type={'number'} className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor={'contactNumber'} className='form-label' >Contact Number</label>
                            <input type={'text'} className='form-control' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                        </div>
                        <h3 className='mb-3 text-center'>Payment Info</h3>
                        <div className='mb-3'>
                            <label className='form-label'>Card Number</label>
                            <input type={'text'} placeholder={'XXXX XXXX XXXX XXXX'} className='form-control' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>CVV</label>
                            <input type={'number'} className='form-control' value={cvv} onChange={(e) => setCvv(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Amount</label>
                            <input type={'number'} placeholder={'500/-'} className='form-control' disabled />
                        </div>
                        <div className='d-grid gap-2'>
                            <button className='btn btn-primary' variant='primary' onClick={handleClick}>Pay Fees</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
