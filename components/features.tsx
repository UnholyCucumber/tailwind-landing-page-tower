"use client"

import { Transition } from "@headlessui/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Features() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2">Ultimate In-House Legal Platform</h1>
            {/* <p className="text-xl text-gray-600">
              Tower streamlines your workflow by enabling you to create and
              manage all your notifications from a single, unified platform.
            </p> */}
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Do Everything In One Place</h3>
                {/* <p className="text-xl text-gray-600">
                  Tower streamlines your workflow by enabling you to create and
                  manage all your notifications from a single, unified platform.
                </p> */}
              </div>

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(1)
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Automated Legal Intake
                    </div>
                    <div className="text-gray-600">
                      Say goodbye to intake forms. Our AI natively connects to
                      your existing communications channels such as email and
                      messaging services, responding to requests in real time.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      fill="#000000"
                      viewBox="0 0 24 24"
                      id="lightning"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon multi-color"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>lightning</title>
                        <polygon
                          id="secondary-fill"
                          points="13.18 17.73 14 13 8.4 10.2 14 3 13.9 3.7 13 10 17 12 13.18 17.73"
                          className="fill-current text-[#3c0af5] stroke-current"
                        ></polygon>
                        <polygon
                          id="primary-stroke"
                          points="17 12 13.18 17.73 11 21 12 14 7 12 14 3 13.9 3.7 13 10 17 12"
                          className="fill-none stroke-current text-black stroke-linecap-round stroke-linejoin-round"
                        ></polygon>
                      </g>
                    </svg>
                    {/* <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg> */}
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(2)
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Comprehensive Matter Management
                    </div>
                    <div className="text-gray-600">
                      Automatically extract relevant info from communications to
                      generate matter tickets. Manage all your matters in the
                      same place, including communications and documents.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>settings_3_line</title>{" "}
                        <g
                          id="页面-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="System"
                            transform="translate(-1248.000000, 0.000000)"
                          >
                            {" "}
                            <g
                              id="settings_3_line"
                              transform="translate(1248.000000, 0.000000)"
                            >
                              {" "}
                              <path
                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                id="MingCute"
                                fillRule="nonzero"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M14.0352,2.80881 C14.4041,2.54328 14.9244,2.41911 15.4361,2.60633 C16.5334,3.00779 17.5399,3.59556 18.4176,4.33073 C18.8347,4.6801 18.9873,5.19202 18.942,5.64392 C18.8666,6.39677 18.9994,7.12366 19.3611,7.7502 C19.6827889,8.30737333 20.1637667,8.74748988 20.7513584,9.05690332 L20.9766,9.16678 C21.3914,9.35374 21.7593,9.74288 21.8525,10.2803 C21.9495,10.8397 22,11.4144 22,12.0001 C22,12.5858 21.9495,13.1606 21.8525,13.72 C21.76862,14.20366 21.462233,14.567197 21.0994052,14.7713908 L20.9766,14.8335 C20.2865,15.1446 19.723,15.6233 19.3611,16.2501 C18.9994,16.8766 18.8666,17.6034 18.942,18.3562 C18.9872,18.8081 18.8347,19.32 18.4176,19.6694 C17.5399,20.4045 16.5334,20.9923 15.4362,21.3937 C14.9245,21.581 14.4042,21.4568 14.0353,21.1912 C13.4206,20.7488 12.7241,20.5 12,20.5 C11.2759,20.5 10.5794,20.7488 9.96474,21.1912 C9.59585,21.4568 9.07552,21.581 8.56378,21.3937 C7.46655,20.9923 6.46002,20.4045 5.5823,19.6693 C5.16523,19.32 5.01269,18.8081 5.05794,18.3562 C5.13332,17.6034 5.00045,16.8766 4.63874,16.2501 C4.31706,15.6929444 3.83615432,15.2528062 3.24858549,14.9433807 L3.02335,14.8335 C2.6086,14.6465 2.24075,14.2574 2.14752,13.72 C2.05047,13.1606 2,12.5858 2,12.0001 C2,11.4143 2.05047,10.8396 2.14751,10.2801 C2.231417,9.796467 2.5377662,9.4329165 2.90054972,9.2287416 L3.02334,9.16664 C3.71344,8.85555 4.27685,8.37689 4.63874,7.75007 C5.00046,7.12356 5.13333,6.39671 5.05794,5.64391 C5.01268,5.19203 5.16522,4.68015 5.5823,4.3308 C6.46004,3.59559 7.4666,3.0078 8.56387,2.60633 C9.07558,2.4191 9.59589,2.54328 9.96478,2.80881 C10.5794,3.25123 11.2759,3.50003 12,3.50003 C12.7241,3.50003 13.4206,3.25123 14.0352,2.80881 Z M14.9917,4.57792 C14.1261,5.14715 13.1053,5.50003 12,5.50003 C10.8947,5.50003 9.87388,5.14715 9.00832,4.57792 C8.30727,4.8608 7.65502,5.24042 7.0682,5.70056 C7.12793,6.734 6.92299,7.79365 6.37079,8.75007 C5.81845,9.70677 5.00295,10.4142 4.07778,10.8792 C4.02655,11.245 4,11.6192 4,12.0001 C4,12.381 4.02655,12.7551 4.07778,13.121 C5.00295,13.586 5.81845,14.2934 6.37079,15.2501 C6.92298,16.2065 7.12793,17.2661 7.0682,18.2995 C7.655,18.7597 8.30722,19.1393 9.00824,19.4222 C9.87381,18.8529 10.8947,18.5 12,18.5 C13.1053,18.5 14.1262,18.8529 14.9918,19.4222 C15.6927,19.1393 16.3449,18.7597 16.9317,18.2996 C16.872,17.2662 17.0769,16.2065 17.6291,15.2501 C18.1815,14.2933 18.997,13.5859 19.9222,13.1209 C19.9735,12.7551 20,12.381 20,12.0001 C20,11.6192 19.9735,11.2451 19.9222,10.8794 C18.997,10.4144 18.1815,9.70693 17.6291,8.7502 C17.0769,7.79371 16.8719,6.734 16.9317,5.7005 C16.3449,5.24039 15.6927,4.86079 14.9917,4.57792 Z M12,8 C14.2091,8 16,9.79086 16,12 C16,14.2091 14.2091,16 12,16 C9.79086,16 8,14.2091 8,12 C8,9.79086 9.79086,8 12,8 Z M12,10 C10.8954,10 10,10.8954 10,12 C10,13.1046 10.8954,14 12,14 C13.1046,14 14,13.1046 14,12 C14,10.8954 13.1046,10 12,10 Z"
                                id="形状"
                                fill="#3c0af5"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    {/* <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg> */}
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(3)
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Flexible Document Management
                    </div>
                    <div className="text-gray-600">
                      Document management that integrates directly with your
                      current solutions. Automatically organize and version your
                      docs. Search through everything with natural language.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg
                      viewBox="0 0 24 24"
                      id="secure"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>secure</title>
                        <path
                          id="tertiary-fill"
                          d="M19.44,12.05a11,11,0,0,1-6.56,8.57L12,21l-.88-.38a11,11,0,0,1-6.56-8.57A11.87,11.87,0,0,0,11,17.62L12,18l1-.38A11.87,11.87,0,0,0,19.44,12.05Z"
                          className="fill-gray-300 stroke-current"
                        ></path>
                        <path
                          id="primary-stroke"
                          d="M19.18,4.8,12,3,4.82,4.8a1,1,0,0,0-.76,1l.43,5.52a11,11,0,0,0,6.63,9.26L12,21l.88-.38a11,11,0,0,0,6.63-9.26l.43-5.52A1,1,0,0,0,19.18,4.8Z"
                          className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round"
                        ></path>
                        <polyline
                          id="secondary-stroke"
                          points="9 11 11 13 15 9"
                          className="fill-none stroke-[#3c0af5] stroke-linecap-round stroke-linejoin-round"
                        ></polyline>
                      </g>
                    </svg>
                    {/* <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg> */}
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col space-y-2">
                      <h1 className="text-3xl"></h1>
                      <Image
                        className="md:max-w-none mx-auto rounded "
                        src={"/gifs/email_intake.gif"}
                        width={700}
                        height="462"
                        alt="Features bg"
                        unoptimized
                      />
                      <h1 className="text-xl">
                        Real time response by AI to queries
                      </h1>
                      {/* <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      /> */}
                      {/* <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col space-y-2">
                      <h1 className="text-3xl"></h1>
                      {/* <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                      <Image
                        className="md:max-w-none mx-auto rounded "
                        src={"/gifs/tower_dashboard.gif"}
                        width={700}
                        height="462"
                        alt="Features bg"
                        unoptimized
                      />
                      <h1 className="text-xl">
                        Auto-populate matter for inquiry
                      </h1>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col space-y-2">
                      <h1 className="text-3xl"></h1>
                      {/* <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      /> */}
                      {/* <Image
                        className="md:max-w-none mx-auto rounded "
                        src={"/images/data-process-isometric.svg"}
                        width={700}
                        height="462"
                        alt="Features bg"
                      /> */}
                      <Image
                        className="md:max-w-none mx-auto rounded "
                        src={"/gifs/document_management.gif"}
                        width={700}
                        height="462"
                        alt="Features bg"
                        unoptimized
                      />
                      <h1 className="text-xl">Built-in document management</h1>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
