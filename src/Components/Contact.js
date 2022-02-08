function Contact() {
  return (
       <div>
          <section id="contact" className="ud-contact">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="ud-contact-content-wrapper">
                  <div className="ud-contact-title">
                    <span>CONTACT US</span>
                    <h2>
                      Let’s talk about <br />
                      Love to hear from you!
                    </h2>
                  </div>
                  <div className="ud-contact-info-wrapper">
                    <div className="ud-single-info">
                      <div className="ud-info-icon">
                        <i className="lni lni-map-marker" />
                      </div>
                      <div className="ud-info-meta">
                        <h5>Our Location</h5>
                        <p>401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                      </div>
                    </div>
                    <div className="ud-single-info">
                      <div className="ud-info-icon">
                        <i className="lni lni-envelope" />
                      </div>
                      <div className="ud-info-meta">
                        <h5>How Can We Help?</h5>
                        <p>info@yourdomain.com</p>
                        <p>contact@yourdomain.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="ud-contact-form-wrapper wow fadeInUp" data-wow-delay=".2s">
                  <h3 className="ud-contact-form-title">Send us a Message</h3>
                  <form className="ud-contact-form">
                    <div className="ud-form-group">
                      <label htmlFor="fullName">Full Name*</label>
                      <input type="text" name="fullName" placeholder="Adam Gelius" />
                    </div>
                    <div className="ud-form-group">
                      <label htmlFor="email">Email*</label>
                      <input type="email" name="email" placeholder="example@yourmail.com" />
                    </div>
                    <div className="ud-form-group">
                      <label htmlFor="phone">Phone*</label>
                      <input type="text" name="phone" placeholder="+885 1254 5211 552" />
                    </div>
                    <div className="ud-form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea name="message" rows={1} placeholder="type your message here" defaultValue={""} />
                    </div>
                    <div className="ud-form-group mb-0">
                      <button type="submit" className="ud-main-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

       </div>
  );
}

export default Contact;
