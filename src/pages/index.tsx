import { Link } from "gatsby"
import React from "react"
import SEO from "react-seo-component"
import Image from "../components/image"
import { H1, P } from "../components/page-elements"
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
      <H1>Hi people</H1>
      <P>Welcome to your new Gatsby site.</P>
      <P>Now go build something great.</P>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}
