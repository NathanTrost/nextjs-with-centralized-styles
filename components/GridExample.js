import Column from "../styled/layout/Column";
import Columns from "../styled/layout/Columns";

import styles from "./customGrid.module.scss";
const GridExample = () => {
  return (
    <>
      <Columns
        bulmaClasses={["is-vcentered", "is-centered"]}
        className={styles.row}
      >
        <Column bulmaClasses={["is-4"]} className={styles.cell}>
          Column 1 is-4
        </Column>
        <Column bulmaClasses={["is-2"]} className={styles.cell}>
          Column 2 is-2
        </Column>
        <Column bulmaClasses={["is-3"]} className={styles.cell}>
          Column 3 is-3
        </Column>
        <Column bulmaClasses={["is-5"]} className={styles.cell}>
          Column 4 is-5
        </Column>
      </Columns>
    </>
  );
};

export default GridExample;
