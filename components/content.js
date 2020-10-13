import Column from "../styled/layout/Column";
import Columns from "../styled/layout/Columns";

import styles from "./content.module.scss";
const Content = () => {
  return (
    <>
      <Columns
        bulmaClasses={["is-vcentered", "is-centered"]}
        className={styles.row}
      >
        <Column bulmaClasses={["is-4"]} className={styles.column}>
          <div className={styles["column-content"]}>Column 1</div>
        </Column>
        <Column bulmaClasses={["is-2"]} className={styles.column}>
          <div className={styles["column-content"]}>Column 2</div>
        </Column>
        <Column bulmaClasses={["is-3"]} className={styles.column}>
          <div className={styles["column-content"]}>Column 3</div>
        </Column>
        <Column bulmaClasses={["is-5"]} className={styles.column}>
          <div className={styles["column-content"]}>Column 4</div>
        </Column>
      </Columns>
    </>
  );
};

export default Content;
