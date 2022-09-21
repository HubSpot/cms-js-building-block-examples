import { IslandRoot } from "@hubspot/cms-components";
import HubSpotSprocket from "../../HubSpotSprocket";
import styles from "../../styles/style.module.css";

function Main() {
  return (
    <body className={styles.body}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>HubSpot JS Rendering</h1>
        </div>
        <div className={styles.logo}>
          <HubSpotSprocket
            link={"https://hubspot.com"}
            className={styles.logo}
          />
        </div>
      </div>
    </body>
  );
}

export default Main;
