import React from "react"
import SEO from "react-seo-component"
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
        title="404: Not found"
        titleTemplate={title}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </>
  )
}
