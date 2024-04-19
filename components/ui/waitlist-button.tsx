import { useState } from "react"
import { Button } from "./button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { Input } from "./input"
import { Label } from "./label"

interface FormData {
  email: string
  first_name: string
}

export default function WaitlistButton() {
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
    <div>
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
              By submitting this form, you will join the waitlist to get early
              access to Tower. We will reach out to schedule a demo once you're
              selected.
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
    </div>
  )
}
