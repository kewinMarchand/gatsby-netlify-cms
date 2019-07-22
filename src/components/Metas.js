import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'

const Metas = () => {
  const { title, description } = useSiteMetadata()
  return (
    <Helmet>
      <html lang="fr" />

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="theme-color" content="#fff" />
      <meta name="author" content="Kewin Marchand" />

      <meta property="og:type" content="business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://elated-volhard-a85ce9.netlify.com/" />
      <meta property="og:image" content="/img/og-image.jpg" />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href="/img/safari-pinned-tab.svg"
        color="#ff4400"
      />
    </Helmet>
  )
}

export default Metas
