import { Link } from "gatsby"
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
        title={`Page Two`}
        titleTemplate={title}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}
