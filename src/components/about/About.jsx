import "./About.css";
import AboutFoto from "@/assets/img/Foto.png";

export const About = () => {
  return (
    <section className="container-md" id="about">
      <div className="row">
        <h2 className="text-center mb-3">About Me</h2>
        <div className="col-md-5 mt-5">
          <p>
            Saya adalah Mahasiswa semester 5 dari Universitas Muhammadiyah
            Malang yang tertarik dengan Frontend Developer
          </p>
          <p />
          <p>
            Selain saya tertarik dengan Frontend Developer, Saya juga tertarik
            dengan Video Grapher dan Video Editing
          </p>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="about-img">
            <img src={AboutFoto} alt="Gambar About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};
