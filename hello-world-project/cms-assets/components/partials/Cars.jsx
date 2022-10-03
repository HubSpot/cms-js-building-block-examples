import Layout from "../Layout";

import styles from "../../styles/cars.module.css";

function Cars({ carCollection }) {
  const cars = JSON.parse(carCollection);

  return (
    <Layout>
      <h2>My Teamates Cars</h2>
      <div className={styles.cars}>
        {cars.map((car) => {
          return (
            <div className={styles.carGrid}>
              <div className={styles.car}>
                <div className={styles.carInfo}>
                <h2>
                  {
                    car.associations.contact_collection__car_to_contact.items[0]
                      .firstname
                  }{" "}
                  {
                    car.associations.contact_collection__car_to_contact.items[0]
                      .lastname
                  }
                </h2>
                <p>
                  <span>
                    {car.year} {car.make} {car.model}
                  </span>
                </p>                </div>
                <div className={styles.carDetails} dangerouslySetInnerHTML={{ __html: car.details }} />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Cars;
