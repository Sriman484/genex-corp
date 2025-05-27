import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpg";
import img3 from "../../assets/slide3.jpg";

const images = [img1, img2, img3];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      clearInterval(imageInterval);
    };
  }, []);
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-tr from-red-50 via-red-100 to-white px-6 md:px-35 py-16 gap-10">
      <div className="flex flex-col max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-700 leading-tight drop-shadow-md">
          Empower Your <span className="text-red-500">Career</span> with Genexcorp
        </h1>
        <p className="text-lg text-gray-700">
          Dive into immersive training, expert consulting, and career-building
          programs designed to unlock your full potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/corporate-training"
            className="bg-red-500 text-white px-8 py-3 rounded-4xl font-semibold shadow-lg hover:bg-transparent hover:border hover:border-red-500 hover:text-red-600"
          >
            Explore Training
          </Link>

          <Link to="/it-consult" className="border border-red-500 text-red-500 px-8 py-3 rounded-4xl font-semibold hover:bg-red-500 hover:text-white"         >
            Hire a Consultant
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center max-w-md w-full">
        <div className="relative w-[650px] h-[450px] rounded-xl overflow-hidden shadow-lg ml-[-180px]">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImage === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-3 ml-[-180px]">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              aria-label={`Show image ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentImage
                  ? "bg-red-600"
                  : "bg-gray-300 hover:bg-red-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
