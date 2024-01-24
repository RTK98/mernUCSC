import React from "react";
import banner from "../../assets/img/banner.jpg";
//lINE ADDED BY STEFAN
const data = [
  {
    name: `Hair Cutting`,
    img: "logo.png",
    review: "Loren..........",
  },
  {
    name: `Bread Cutting`,
    img: "../assets/img/logo.png",
    review: "Loren..........",
  },
  {
    name: `Massage`,
    img: "../assets/img/logo.png",
    review: "Loren..........",
  },
];

function HomePage() {
  return (
    <div>
      <section className="banner">
        <img
          src={banner}
          alt="banner"
          style={{ width: "100vw", height: "100vh" }}
        />
      </section>
      <section className="services">
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            {data.map((d) => (
              <div className="bg-white h-[450px] text-black rounded-xl">
                <div className="rounded-t-xl bg-indigo-500 flex justify-center">
                  <img src={d.img} alt="image" />
                </div>
                <div>
                  <p>{d.name}</p>
                  <p>{d.review}</p>
                  <button>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="gallery">{/* <Carousel data={slides} /> */}</section>
    </div>
  );
}
export default HomePage;
