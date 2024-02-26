"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
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

export default function BookDemo() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])
  return (
    <section className="relative" id="book-demo">
      <br />
      <br />
      <br />
      <Cal
        calLink="team/tower/chat"
        className="w-full h-full overflow-scroll"
        config={{ layout: "month_view" }}
      />
      ;
    </section>
  )
}
