import React, { useRef, useState } from 'react';
import Header from '../Header';
import { FormWrapper } from './styles'; 

const Contact = () => {

    // Controlled way
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleErrorMessage = (key, value) => {
        switch(key) {
            case 'name': {
                if ((value || '').length < 10) {
                    setErrorMessage(`Name can't be less than 10 characters`);
                } else {
                    setErrorMessage('');
                }
                return;
            }
            case 'email': {
                if ((value || '').indexOf('@') === -1) {
                    setErrorMessage(`Please enter valid email`);
                } else {
                    setErrorMessage('');
                }
                return;
            }
            case 'message': {
                if ((value || '').length < 20) {
                    setErrorMessage(`Message can't be less than 20 characters`);
                } else {
                    setErrorMessage('');
                }
                return;
            }
        }
    }

    const handleChange = (key) => (e) => {
        setForm(s => ({
            ...s,
            [key]: e.target.value,
        }));


        handleErrorMessage(key, e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    // Uncontrolled way

    // const nameRef = useRef('');
    // const emailRef = useRef('');
    // const messageRef = useRef('');

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const form = {
    //         name: nameRef.current.value,
    //         email: emailRef.current.value,
    //         message: messageRef.current.value,
    //     };
    //     console.log(form);
    //     // Make api call to submit it
    // };

    return (
        <div className="contact">
            <div className="container">
                <div className="spec ">
                    <h3>Contact</h3>
                    <div className="ser-t">
                        <span><i></i></span>
                        <b className="line"></b>
                    </div>
                </div>
                <div className=" contact-w3">	
                    <div className="col-md-5 contact-right">	
                        <img src="images/cac.jpg" className="img-responsive" alt="" />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819" styles={{border:0}}></iframe>
                    </div>
                    <div className="col-md-7 contact-left">
                        <h4>Contact Information</h4>
                        <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                        aut odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                        est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
                        <ul className="contact-list">
                            <li> <i className="fa fa-map-marker" aria-hidden="true"></i> 756 Global Place, New York.</li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:example@mail.com">mail@example.com</a></li>
                            <li> <i className="fa fa-phone" aria-hidden="true"></i>+123 2222 222</li>
                        </ul>
                        <div id="container">
                            <div id="parentHorizontalTab">
                                <ul className="resp-tabs-list hor_1">
                                    <li><i className="fa fa-envelope" aria-hidden="true"></i></li>
                                    <li> <i className="fa fa-map-marker" aria-hidden="true"></i></li>
                                    <li> <i className="fa fa-phone" aria-hidden="true"></i></li>
                                </ul>
                                <div className="resp-tabs-container hor_1">
                                    <div>
                                        <FormWrapper action="#" method="post">
                                            <input className={`${form.name ? 'valid' : 'invalid'}`} type="text" name="Name" placeholder="Enter Name" onChange={handleChange('name')}/>  { /* ref={nameRef} */}
                                            <input className={`${form.email ? 'valid' : 'invalid'}`} type="email" name="Email"  placeholder="Enter Email" onChange={handleChange('email')}/> { /* ref={emailRef} */}
                                            <textarea className={`${form.message ? 'valid' : 'invalid'}`} name="Message"  placeholder="Enter Message" onChange={handleChange('message')}></textarea> { /* ref={messageRef} */}
                                            <input type="submit" value="Submit" onClick={handleFormSubmit} />
                                            <div className='error'>{errorMessage}</div>
                                        </FormWrapper>
                                    </div>
                                    <div>
                                        <div className="map-grid">
                                        <h5>Our Branches</h5>
                                            <ul>
                                                <li><i className="fa fa-arrow-right" aria-hidden="true"></i>756 Global Place, New York.</li>
                                                <li><i className="fa fa-arrow-right" aria-hidden="true"></i>889 diamond street, USA.</li>
                                                <li><i className="fa fa-arrow-right" aria-hidden="true"></i>756 global Place, New York.</li>
                                                <li><i className="fa fa-arrow-right" aria-hidden="true"></i>889 diamond street, USA.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="map-grid">
                                            <h5>Contact Me Through</h5>
                                            <ul>
                                                <li>Mobile No : +123 456 7890</li>
                                                <li>Office No : +123 222 2222</li>
                                                <li>Home No : +123 456 7890</li>
                                                <li>Fax No : +123 456 7890</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                <div className="clearfix"></div>
            </div>
            </div>
        </div>
    )
};

export default Contact;