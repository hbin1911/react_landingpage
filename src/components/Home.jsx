import React from "react";
import vg from "../assests/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techystar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            ipsam.
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit accusantium molestiae, error asperiores iure,
            provident nesciunt autem ab eligendi, nostrum est porro in cum
            inventore. Ab sapiente fugiat, dicta minima odit earum provident
            consequuntur.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iusto
            eligendi adipisci voluptas obcaecati non harum, nam quod commodi
            dignissimos inventore repellendus voluptates tenetur delectus? Optio
            atque ipsa ut maiores tenetur voluptatem voluptate iusto nemo a rem
            cum similique, fugiat totam dolorem praesentium hic dolorum.
            Consequatur ipsam commodi cum! At, assumenda velit possimus sit
            voluptates tempore nesciunt quos debitis ipsa in natus consequatur
            nisi repellat provident doloribus vitae aut tempora.
          </p>
        </div>
      </div>
      <div className="home4">

        <div>
          <h1>
            Brands
          </h1>
          <article>

            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"0.9s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
