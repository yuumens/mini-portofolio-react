/* eslint-disable react/no-unescaped-entities */
import HomeLogo from "@/assets/img/home.png";
import "./Home.css";

export const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <img src={HomeLogo} alt="pilar-home" />
        <div className="home-page ">
          <p className="text-light mt-sm-3">
            Hi, Me <span>Ahmad Rizky Has</span>
          </p>
          <p className="text-light mt-sm-2">Let's go learn about me </p>
          <div className="col-md-10 ml-2">
            <a href=" #about">
              <button type="button" className="start-button fw-bold">
                {" "}
                GET STARTED
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
