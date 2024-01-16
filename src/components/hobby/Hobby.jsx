import "./Hobby.css";

export const Hobby = () => {
  return (
    <section id="hobby">
      <div className="container-md">
        {/* Bagian About Us dengan 3 Card */}
        <div className="row">
          <h2 className="text-center mb-3">My Hobby</h2>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card">
              <img
                src="https://img.inews.co.id/media/600/files/inews_new/2020/03/31/bulutangkis.jpg"
                className="card-img-top"
                alt="Gambar 1"
              />
              <div className="card-body">
                <h5 className="card-title">Badminton</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card pb-1">
              <img
                src="https://asset.ayo.co.id/photos/62106/1.%20Keuntungan%20Sparring%20Futsal%20dalam%20Meningkatakan%20Kualitas%20Permainan.jpg"
                className="card-img-top"
                alt="Gambar 2"
              />
              <div className="card-body">
                <h5 className="card-title">Futsal</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4 col-12 mt-3 mb-3">
            <div className="card pb-1">
              <img
                src="https://images.indianexpress.com/2021/12/mobile-gaming-accessories-featured.jpg"
                className="card-img-top"
                alt="Gambar 3"
              />
              <div className="card-body">
                <h5 className="card-title">Gaming</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
