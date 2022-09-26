import Layout from "../Layout";

import styles from "../../styles/cars.module.css";

function Home({ carCollection }) {
  const cars = JSON.parse(carCollection);

  return (
    <Layout>
      <div className={styles.cars}>
        {cars.map((car) => {
          return (
            <div className={styles.carGrid}>
              <div className={styles.car}>
                <h2>
                  <span>{car.make} {car.model}</span>
                </h2>
                <p>
                  <span>{car.year}</span>
                </p>
                <p>
                    <span>
                        {car.associations.contact_collection__car_to_contact.items[0].firstname}
                        {' '}
                        {car.associations.contact_collection__car_to_contact.items[0].lastname}
                    </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
