import Footer from "./Footer";

const About = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-evenly">
        <div className="w-6/12 m-8 p-8 mt-20 ml-20">
          <h1 className=" text-7xl font-semibold mb-4">
            Welcome to <br /> The world of
          </h1>
          <span className=" text-5xl text-white bg-green-500 rounded-lg shadow-lg ">
            Your Favorite Food delivery Partner.
          </span>
          <h2 className="text-2xl italic font-semibold p-2 m-2 ">
            "Bring fresh and delicious food within minutes"
            <br />
            "Because we made to Trained to Deliver!"
          </h2>
        </div>
        <div className=" m-8 p-8">
          <img
            className="w-[500px]"
            src="https://o.remove.bg/downloads/8a577d70-321a-40e5-88f6-b31a07043bd8/195509460-colorful-burger-in-thiel-pop-art-high-quality-illustration-removebg-preview.png"
            alt="food-img"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
