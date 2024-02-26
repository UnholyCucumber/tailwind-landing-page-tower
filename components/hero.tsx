export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Build notifications in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r to-[#3c0af5] from-[#009aff]">
                minutes.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Connect your DB or event bus and effortlessly ship transactional
                notifications - from trigger to delivery - in minutes, not
                hours. No coding necessary.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-[#3c0af5] hover:bg-[#009aff] w-full mb-4 sm:w-auto sm:mb-0"
                    href="#book-demo"
                  >
                    Book Demo Now
                  </a>
                </div>
                {/* <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
          {/* <div
            className="relative"
            style={{ paddingBottom: "64.90384615384616%" }}
          >
            <iframe
              src="https://www.loom.com/embed/41ec5f06d3f1436eaf02cd705044b46b?sid=c16a9f2a-be06-4f7b-ade7-4f1b4e395b84"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-[1080px] h-[1080px]]"
            ></iframe>
          </div> */}
          {/* <div className="w-full max-w-screen-lg mx-auto">
            <div className="aspect-w-full aspect-h-full">
              <iframe
                className="w-full h-full"
                src="https://www.loom.com/embed/41ec5f06d3f1436eaf02cd705044b46b?sid=ae47383e-a9d0-47b1-a7c9-6a8ee3f5daef"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}
          <iframe
            width="1080"
            height="701"
            src="https://www.loom.com/embed/41ec5f06d3f1436eaf02cd705044b46b?hideEmbedTopBar=true."
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
