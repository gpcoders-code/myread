import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="page-banner services-banner">
                <div className="container">
                    <div className="banner-header">
                        <h2>Contact Us</h2>
                        <span className="underline center"></span>
                        <p className="lead">Proin ac eros pellentesque dolor pharetra tempo.</p>
                    </div>
                    <div className="breadcrumb">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
           
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <main id="main" className="site-main">
                        <div className="contact-main">
                            <div className="contact-us">
                                <div className="container">

                                    <div className="row">
                                        <div className="contact-area">
                                            <div className="container">
                                                <div className="col-md-10 border-gray-right">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="contact-form bg-light margin-right">
                                                                <h2>Send us a message</h2>
                                                                <span className="underline left"></span>
                                                                <div className="contact-fields">
                                                                    <form id="contact" name="contact" action="contact.html" method="post" >
                                                                        <div className="row">
                                                                            <div className="col-md-6 col-sm-6">
                                                                                <div className="form-group">
                                                                                    <input className="form-control" type="text" placeholder="First Name" name="first-name" id="first-name" size="30" value="" aria-required="true" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-sm-6">
                                                                                <div className="form-group">
                                                                                    <input className="form-control" type="text" placeholder="Last Name" name="last-name" id="last-name" size="30" value="" aria-required="true" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-sm-6">
                                                                                <div className="form-group">
                                                                                    <input className="form-control" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" placeholder="Email" name="email" id="email" size="30" value="" aria-required="true" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-sm-6">
                                                                                <div className="form-group">
                                                                                    <input className="form-control" type="text" placeholder="Phone Number" name="phone" id="phone" size="30" value="" aria-required="true" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12">
                                                                                <div className="form-group">
                                                                                    <textarea className="form-control" placeholder="Your message" id="message" aria-required="true"></textarea>
                                                                                    <div className="clearfix"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12">
                                                                                <div className="form-group form-submit">
                                                                                    <input className="btn btn-default" id="submit-contact-form" type="button" name="submit" value="Send Message"  />
                                                                                </div>
                                                                            </div>
                                                                            <div id="success">
                                                                                <span>Your message was sent successfully! Our team will contact you soon.</span>
                                                                            </div>

                                                                            <div id="error">
                                                                                <span>Something went wrong, try refreshing and submitting the form again.</span>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Contact;