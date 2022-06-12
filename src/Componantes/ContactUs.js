import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result =()=>{
    return(
        <p className='text-green-900 font-bold text-xl'>Your Result Has Been Succesfully Sent!</p>
    )
}

const ContactUs = () => {
    const [result, setResult]= useState(false)
    const form = useRef();
    const formHandle = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yxcaiqi', 'template_i6q5l6v', form.current, 'U6ToHWt-PmB8uTJB4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setResult(true);
    }
    return (
        <div className='bg-white py-8'>
            <h2 className='font-bold py-8 text-4xl text-center'>Contact Us</h2>
            <div className='container mx-auto'>
                <form ref={form} className='w-2/3' onSubmit={formHandle}>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-4'>
                        <input type="text" placeholder="Name" name='name' className="col-span-2 border-slate-600 text-2xl input input-bordered"  required/>
                        <input type="email" placeholder="Email" name='email' className="col-span-2 border-slate-600 text-2xl input input-bordered"  required/>
                    </div>
                    <textarea className="textarea h-52 textarea-bordered border-slate-600 text-2xl w-full mb-4" placeholder="Your Message" name='message' required></textarea>
                    <button className='btn font-bold btn-primary' type="submit">SEND MESSAGE</button>

                    <div>{result?<Result/>: null}</div>
                </form>
            </div>

        </div>
    );
};

export default ContactUs;