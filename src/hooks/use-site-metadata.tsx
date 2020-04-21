import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            authorName
          }
        }
      }
    `
  )
  return site.siteMetadata
}
