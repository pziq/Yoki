import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import bannerImg from "../../static/img/main.png"

import "../css/components/home.css"

function Banner() {
  return (
    <div className="container banner">
      <div className="banner_left">
        <img className="banner_logo" src="/img/logo.png" alt="ec logo" />
        <Link
          className="button button--secondary button--lg install_btn"
          to="/docs/intro"
        >
          Start Learning
        </Link>
      </div>
      <div className="banner__right">
        <img
          src={bannerImg}
          className="banner__right--screenshot"
          alt="banner image"
        />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout description="An attempt to create good and easy documents on ECE subjects">
      <main className="homepage">
        <Banner />
      </main>
    </Layout>
  )
}
