"use client"

import { useEffect } from "react"

const ApolloScriptLoader = () => {
  useEffect(() => {
    const initApollo = () => {
      const n = Math.random().toString(36).substring(7)
      const o = document.createElement("script")
      o.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${n}`
      o.async = true
      o.defer = true
      o.onload = () => {
        if (window.trackingFunctions && window.trackingFunctions.onLoad) {
          window.trackingFunctions.onLoad({ appId: "66316c21b5ccf10302afc73c" })
        }
      }
      document.head.appendChild(o)
    }

    initApollo()
  }, [])

  return null
}

export default ApolloScriptLoader
