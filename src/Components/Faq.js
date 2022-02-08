import shape from "../assets/images/faq/shape.svg"; 

function Faq() {
  return (
       <div>
        <section id="faq" className="ud-faq">
          <div className="shape">
            <img src={shape} alt="shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-section-title text-center mx-auto">
                  <span>FAQ</span>
                  <h2>Any Questions? Answered</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                  <div className="accordion">
                    <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <span className="icon flex-shrink-0">
                        <i className="lni lni-chevron-down" />
                      </span>
                      <span>How to use UIdeck?</span>
                    </button>
                    <div id="collapseOne" className="accordion-collapse collapse">
                      <div className="ud-faq-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                  <div className="accordion">
                    <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <span className="icon flex-shrink-0">
                        <i className="lni lni-chevron-down" />
                      </span>
                      <span>How to download icons from Lineicons?</span>
                    </button>
                    <div id="collapseTwo" className="accordion-collapse collapse">
                      <div className="ud-faq-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                  <div className="accordion">
                    <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <span className="icon flex-shrink-0">
                        <i className="lni lni-chevron-down" />
                      </span>
                      <span>Is GrayGrids part of UIdeck?</span>
                    </button>
                    <div id="collapseThree" className="accordion-collapse collapse">
                      <div className="ud-faq-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
                  <div className="accordion">
                    <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      <span className="icon flex-shrink-0">
                        <i className="lni lni-chevron-down" />
                      </span>
                      <span>Can I use this template for commercial project?</span>
                    </button>
                    <div id="collapseFour" className="accordion-collapse collapse">
                      <div className="ud-faq-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
                  <div className="accordion">
                    <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      <span className="icon flex-shrink-0">
                        <i className="lni lni-chevron-down" />
                      </span>
                      <span>Do you have plan releasing Play Pro?</span>
                    </button>
                    <div id="collapseFive" className="accordion-collapse collapse">
                      <div className="ud-faq-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
                  <div className="accordion">
                    <button className="ud-faq-btn collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                      <span className="icon flex-shrink-0">
                        <i className="lni lni-chevron-down" />
                      </span>
                      <span>Where and how to host this template?</span>
                    </button>
                    <div id="collapseSix" className="accordion-collapse collapse">
                      <div className="ud-faq-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       </div>
  );
}

export default Faq;
