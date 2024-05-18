function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid mt-4 bg-white">
                    <div className="container py-2">
                        <h4 className="py-3">Or visit us at</h4>
                        <h5>A&A Collection Paseo LatKrabang</h5>
                        <p>The Paseo Mall Latkrabang, 54-55 Inside Plaza, Opposite Watson, Lat Krabang, Bangkok 10520</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.871762843377!2d100.7269086!3d13.7203908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67160d4fa927%3A0x2db6e8cfc1bed99!2sA%26A%20Collection%20Paseo%20LatKrabang!5e0!3m2!1sen!2sth!4v1715089260307!5m2!1sen!2sth"
                            width="100%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;