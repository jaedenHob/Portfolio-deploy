import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch('https://contacts-requests.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success

                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: '',
                });

                alert('form submission is successful');

            } else {
                // Handle error
                alert('form submission was unsuccessful');
            }
        
        } catch (error) {
            // Handle network error
            console.error('Error: ', error);
        } finally {
            setLoading(false);
        }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 relative'>
            {loading ? (
                    <div className=' w-full h-full bg-slate-50 bg-opacity-70 rounded-lg left-8 absolute flex items-center justify-center'>

                        <div>
                            <p className='text-3xl font-bold flex items-center justify-center'>Sumbitming form may take 1-3 minutes</p>
                            <p className='text-3xl font-bold flex items-center justify-center p-5'>please do not close browser...</p>

                            <div class="flex space-x-5 items-center justify-center">
                                <span class="circle [animation-delay:-0.1s] animate-bounce-color-change"></span>
                                <span class="circle [animation-delay:-0.2s] animate-bounce-color-change"></span>
                                <span class="circle [animation-delay:-0.3s] animate-bounce-color-change"></span>
                                <span class="circle [animation-delay:-0.4s] animate-bounce-color-change"></span>
                            </div>

                        </div>
                    </div>) : (
                    <div>

                    </div>
                )}
                    
            <h1 className='py-4 text-4xl font-bold text-center text-black'>Contact Me</h1>

            <form onSubmit={handleFormSubmit}>

                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                    </div>
                </div>

                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' value={formData.email} onChange={handleInputChange} />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' value={formData.subject} onChange={handleInputChange} />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                        maxLength={600}
                        placeholder='message (max 600 characters)'
                        className='border-2 rounded-lg p-3 border-gray-300'
                        rows='10'
                        type='text'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange} />
                </div>

                <button type="submit" className="bg-yellow-400 text-black mt-4 w-full p-4 rounded-lg" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Contact;