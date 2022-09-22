import mainStyles from "../../styles/main.module.css";
import Layout from "../Layout";
import HubSpotSprocket from "../HubSpotSprocket";

function Main() {
  return (
    <Layout>
      <div className={mainStyles.logo}>
        <HubSpotSprocket link={"https://hubspot.com"} />
      </div>
    </Layout>
  );
}

export default Main;
