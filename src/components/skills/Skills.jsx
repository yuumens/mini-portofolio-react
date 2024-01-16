import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skill">
      <div className="container-md">
        {/* Bagian About Us dengan 3 Card */}
        <div className="row">
          <h2 className="text-center mb-3">My Skills</h2>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://www.duniailkom.com/wp-content/uploads/2022/01/React-logo-Duniailkom.jpg"
                className="card-img-top"
                alt="Gambar 1"
              />
              <div className="card-body">
                <h5 className="card-title">React Js</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/453/129/282/html5-hyper-text-markup-language-html-wallpaper-thumb.jpg"
                className="card-img-top"
                alt="Gambar 2"
              />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
                className="card-img-top"
                alt="Gambar 3"
              />
              <div className="card-body pb-4">
                <h5 className="card-title">CSS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://miro.medium.com/v2/resize:fit:1336/0*PnBMMnxhcoFGCimf.jpg"
                className="card-img-top"
                alt="Gambar 1"
              />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://images.yourstory.com/production/document_image/mystoryimage/5a2kctvq-java-logo.png"
                className="card-img-top"
                alt="Gambar 1"
              />
              <div className="card-body">
                <h5 className="card-title">Java</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://miro.medium.com/v2/resize:fit:596/1*E6XFftZQI4_3VIammdxD-g.jpeg"
                className="card-img-top"
                alt="Gambar 1"
              />
              <div className="card-body">
                <h5 className="card-title">C</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
