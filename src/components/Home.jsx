import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import bannerImg from "../../static/img/main.png"
import webpimage from "../../static/img/anim.webp"

import "../css/components/home.css"

function Banner() {
  return (
    <div className="container banner">
      <div className="banner_left">
        <img className="banner_logo" 
        // src="/img/anim.webp"
        src ='https://media.giphy.com/media/eH184pC3SbwOYj0Yed/giphy.gif' 
        alt="ec logo" />
        
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
          // src='https://media.giphy.com/media/kgb3OJ0o9Qnqf6JjWQ/giphy.gif'
          // src={webpimage}
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
