import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../vista/src/components/ui/dialog"

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
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  )
}
