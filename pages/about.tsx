import Map from '../components/map'
import styles from '../styles/layout.module.css'
import textStyles from '../styles/emphasis.module.css'
export default function AboutPage() {
  return <>
    <p>Send me an <a className={textStyles.highlighted} href="mailto:mymiscellaneousstuff99@gmail.com">email</a>.</p>
    <div className={styles.sectionBlock}>
      <p>The map will tell you about my key places in the world. </p>
      <Map/>
    </div>
  </>
}