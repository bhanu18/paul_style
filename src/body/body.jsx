import paul from "../assets/paul_resize.png";
import once_tried from "../assets/once_tried_ever_trust.png";
import Contact from "./contact";

function Body() {
  return (
    <>
      <div className="container bg-white rounded mb-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <img src={once_tried} alt="once tried ever trust" width={280} />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="box center">
              <p className="lead">
                Established in 1988, we offer traditional craftsmanship and
                outstanding workmanship, tailored to perfection.
              </p>
              <p className="lead">
                Call us to schedule an appointment, we look forward to meet you
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col text-center">
                <h2>Bespoke</h2>
                <p className="lead">Learn about our unique process</p>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h2>Finest Cloth</h2>
                <p className="lead">
                  First rate fabrics & highest quality materials
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h2>Accessory</h2>
                <p className="lead">Ties, Belts, Cufflinks, Mattel Buttons</p>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h2>Appointment & Referrals</h2>
                <p className="lead">
                  Get appointment through Email:{" "}
                  <a href="mailto:paulbespokesuits@gmail.com">
                    paulbespokesuits@gmail.com
                  </a>{" "}
                  or Call us on 0936362549
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <div className="img-container">
              <img src={paul} alt="paul" className="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 px-4 bg-white rounded">
        <div className="row">
          <h5 className="mb-4 col-6">Interested in a suit? Contact Us</h5>
          <h5 className="mb-4 col-6 text-right">Or visit us at</h5>
        </div>
        <div className="row">
          <Contact />
          <div className="py-2 col-md-6 col-sm-1">
            <h5>Paul Bespoke Suits</h5>
            <p>
              The Paseo Mall Latkrabang, 54 Inside Plaza, Opposite Watson, Lat
              Krabang, Bangkok 10520
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5834.141872009079!2d100.727029!3d13.7202782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67df8d991bdb%3A0xbfbdaa1eb7b02d1a!2zUGF1bCBCZXNwb2tlIFN1aXRzIOC4iuC5iOC4suC4h-C4leC4seC4lOC4quC4ueC4lw!5e1!3m2!1sen!2sth!4v1757849877846!5m2!1sen!2sth"
              width="100%"
              style={{ border: 0 }}
              aria-hidden="false"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
