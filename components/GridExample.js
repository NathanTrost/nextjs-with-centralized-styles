import classNames from "classnames";
import styles from "./customGrid.module.scss";

const GridExample = () => {
  const columnWithBg = classNames(["column", styles.cell]);
  return (
    <>
      <h3 className="title is-2">Basic Grid</h3>
      <div className={"container"}>
        <div className={"columns"}>
          <div className={columnWithBg}>Column 1</div>
          <div className={columnWithBg}>Column 2</div>
          <div className={columnWithBg}>Column 3</div>
          <div className={columnWithBg}>Column 4</div>
          <div className={columnWithBg}>Column 5</div>
          <div className={columnWithBg}>Column 6</div>
          <div className={columnWithBg}>Column 7</div>
          <div className={columnWithBg}>Column 8</div>
          <div className={columnWithBg}>Column 9</div>
          <div className={columnWithBg}>Column 10</div>
        </div>
        <div className={"columns"}>
          <div className={columnWithBg}>Column 1</div>
          <div className={columnWithBg}>Column 2</div>
          <div className={columnWithBg}>Column 3</div>
          <div className={columnWithBg}>Column 4</div>
          <div className={columnWithBg}>Column 5</div>
          <div className={columnWithBg}>Column 6</div>
        </div>
      </div>
      <br />
    </>
  );
};

export default GridExample;
