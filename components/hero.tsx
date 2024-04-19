"use client"

import { useState } from "react"

import WaitlistButton from "./ui/waitlist-button"

interface FormData {
  email: string
  first_name: string
}

export default function Hero() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    first_name: "",
  })
  const [message, setMessage] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage("")
    try {
      const response = await fetch(`/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": "-.-",
        },
        body: JSON.stringify({
          email: formData.email, // required
          first_name: formData.first_name, // optional
          // last_name, // optional
          // username, // optional
        }),
      })

      if (response.ok) {
        setOpen(false)
        setFormData({ first_name: "", email: "" }) // Clear the form
        setMessage("Thanks for signing up; we will be in touch shortly.")
        setErrorMessage("")
      } else {
        setErrorMessage(
          "An error occurred. Please check your inputs and try again."
        )
      }
    } catch (error) {
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        {/* <svg
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
        </svg> */}
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
              Handle legal requests{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r to-[#3c0af5] from-[#009aff]">
                automatically.
              </span>
            </h1>
            <br />
            <br />
            <div className="max-w-3xl mx-auto">
              <p
                className="text-3xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Tower helps in-house legal counsels sanity check incoming
                requests, draft first-pass responses, and run playbooks, all in
                real time and without altering existing workflows.
              </p>
              <br />
              <br />
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* <div>
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>
                      <a
                        className="btn text-white bg-[#3c0af5] hover:bg-[#009aff] w-full mb-4 sm:w-auto sm:mb-0"
                        // href="#book-demo"
                      >
                        Join the Waitlist
                      </a>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Join the Waitlist</DialogTitle>
                        <DialogDescription>
                          By submitting this form, you will join the waitlist to
                          get early access to Tower. We will reach out to
                          schedule a demo once you're selected.
                        </DialogDescription>
                        <br />

                        <form
                          className="flex flex-col justify-center items-center"
                          onSubmit={handleSubmit}
                        >
                          <div className="flex flex-row items-center gap-4">
                            <Label htmlFor="first_name" className="text-right">
                              First Name
                            </Label>
                            <Input
                              id="first_name"
                              placeholder="Name"
                              className="w-full"
                              value={formData.first_name}
                              onChange={(e) =>
                                setFormData((prevState) => ({
                                  ...prevState,
                                  first_name: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <br />
                          <div className="flex flex-row items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Work Email
                            </Label>
                            <Input
                              id="email"
                              placeholder="Email"
                              className="w-full"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData((prevState) => ({
                                  ...prevState,
                                  email: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <br />
                          <Button> Join Waitlist </Button>
                          {errorMessage}
                        </form>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div> */}
                <div>
                  <WaitlistButton />
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
            <br />
            <p>{message}</p>
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
          </div>
          <div className="w-full max-w-screen-lg mx-auto">
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
            src="https://www.loom.com/embed/7f199d62c3fa45948305f96d258d9792?hideEmbedTopBar=true."
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
