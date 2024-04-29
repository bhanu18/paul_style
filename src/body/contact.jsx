function Contact() {
    return (
        <>
            <form action="">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Name - Surname</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" id="textarea" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )

}

export default Contact;