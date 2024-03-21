"use client"

import { Button } from "./ui/button"
import { Input } from "./utils/input"

// import Cal, { getCalApi } from "@calcom/embed-react"
// export default function MyApp() {
//   useEffect(() => {
//     ;(async function () {
//       const cal = await getCalApi()
//       cal("ui", {
//         styles: { branding: { brandColor: "#000000" } },
//         hideEventTypeDetails: false,
//         layout: "month_view",
//       })
//     })()
//   }, [])
//   return (
//     <Cal
//       calLink="team/tower/chat"
//       style={{ width: "100%", height: "100%", overflow: "scroll" }}
//       config={{ layout: "month_view" }}
//     />
//   )
// }

const signUpForWaitlist = async (
  email: string,
  first_name: string,
  last_name: string,
  username: string
) => {
  // TODO: Replace with your own AUTH_URL
  const response = await fetch(
    `${process.env.AUTH_URL}/api/fe/v3/add_waitlist_user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": "-.-",
      },
      body: JSON.stringify({
        email, // required
        first_name, // optional
        last_name, // optional
        username, // optional
      }),
    }
  )
  return response
}

export default function WaitList() {
  return (
    //
    //   <Input type="email" placeholder="Email" className="underline" />
    //
    <div className="flex flex-col justify-center items-center">
      <Input type="first_name" placeholder="First Name" className="w-1/6" />
      <br />
      <Input type="email" placeholder="Email" className="w-1/6" />
      <br />
      <Button> Join Waitlist </Button>
    </div>
  )
}
