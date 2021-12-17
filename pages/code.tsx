import React from "react"
import FancyButton from "../components/buttons/FancyButton"
import Link from "next/link"
import styles from "../styles/CV.module.css"

export default function CodePage() {

  return (<>
    <a href="https://github.com/MiscLG"><FancyButton>GitHub</FancyButton></a>
    <div className={styles.project}>
      <h2>
      <Link href="https://misc-9029.uc.r.appspot.com/">
        <a className="highlighted">This site&apos;s previous version</a>
      </Link>
      </h2>
      <p>
        The old version was a server side application using Google App Engine. 
        The pages were made using jQuery on top of jinja2 html templates.
        I retired this version because it was written with Python 2 which has been officially retired.
        However, I have yet to fully flesh out this version, so please look forward to it :D
      </p>
    </div>
    <h1>More Coming Soon!</h1>
  </>)

}