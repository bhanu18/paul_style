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
              <p className="lead">Established in 1988, we offer traditional craftsmanship and outstanding workmanship, tailored to perfection.</p>
              <p className="lead">Call us to schedule an appointment, we look forward to meet you
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
                <p className="lead">First rate fabrics & highest quality materials</p>
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
                <p className="lead">Get appointment Contact through Email: <a href="mailto:mytailorpaul@hotmail.com">mytailorpaul@hotmail.com</a></p>
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
      <div className="container mt-5 py-3 bg-white rounded">
        <h5>Interested in a suit? Contact Us</h5>
        <Contact />
      </div>
    </>
  );
}

export default Body;