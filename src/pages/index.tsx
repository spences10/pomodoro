import React from "react"
import SEO from "react-seo-component"
import { Pomodoro } from "../components/pomodoro"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const {
    title,
    description,
    siteUrl,
    image,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Pomodoro />
    </>
  )
}
