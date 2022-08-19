import { IslandRoot } from "@hubspot/cms-components";
import HubSpotSprocket from "../../HubSpotSprocket";
import TodoList from "../islands/TodoList.jsx?island";
import styles from "../../styles/style.module.css";

function Main() {
  return (
    <body className={styles.body}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>HubSpot JS Rendering</h1>
        </div>

        <div className={styles.logo}>
          <HubSpotSprocket className={styles.logo} />
        </div>
        <IslandRoot lazyModule={TodoList} hydrateOn="idle" />
      </div>
    </body>
  );
}

export default Main;
