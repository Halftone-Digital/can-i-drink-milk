import Brand from "@/components/Brand";
import Flag from "@/components/flags/flag";
import TorresStraitFlag from "@/components/flags/torresStraitFlag";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Brand className={styles.wordmark} aria-label="Can I Drink Milk?" />
        <div className={styles.disclaimer}>
          <p>
            This tool is for educational purposes only. It is not a medical
            diagnosis. If you suspect lactose intolerance, please consult your
            doctor.
          </p>
        </div>
        <p className={styles.sources}>
          Based on clinical research including Casellas et&nbsp;al. (2008) and
          data from USDA FoodData Central and Open Food Facts.
        </p>
        <p className={styles.credit}>
          Built with AI at a university workshop on prototyping.
        </p>
      </div>

      <div className={styles.acknowledgement}>
        <div className={styles.acknowledgementInner}>
          <div className={styles.flagLeft}>
            <Flag width={120} numOfColumns={10} staggeredDelay={100} billow={0.5} />
          </div>
          <p className={styles.acknowledgementText}>
            We acknowledge the Traditional Owners and Custodians of the lands on
            which we live and work. We pay our respects to Elders past, present
            and emerging, and recognise their continuing connection to land,
            waters and culture. Sovereignty was never ceded. This always was, and
            always will be, Aboriginal land.
          </p>
          <div className={styles.flagRight}>
            <TorresStraitFlag width={120} numOfColumns={10} staggeredDelay={100} billow={0.5} />
          </div>
        </div>
      </div>
    </footer>
  );
}
