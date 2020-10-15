import classNames from "classnames";
import styles from "./content.module.scss";

const GridExample = () => {
  const columnWithBg = classNames(["column", styles["column"]]);
  return (
    <>
      <h2 className="title is-2">Basic Grid</h2>
      <div className={classNames(["container"])}>
        <div className={classNames(["columns", styles["row"]])}>
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
        <div className={classNames(["columns", styles["row-bg"]])}>
          <div className={columnWithBg}>Column 1</div>
          <div className={columnWithBg}>Column 2</div>
          <div className={columnWithBg}>Column 3</div>
          <div className={columnWithBg}>Column 4</div>
          <div className={columnWithBg}>Column 5</div>
          <div className={columnWithBg}>Column 6</div>
        </div>
      </div>
      <br />
      <h2 className="title is-2">Table with form</h2>
      <div className={classNames(["columns"])}>
        <div className="column is-8">
          <div className="field">
            <label className="label">Text Input</label>
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <div className="field">
            <label className="label">Select Input</label>
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="block">
            <button className="button is-primary is-rounded">Reset</button>
          </div>
          <div className="block">
            <button className="button is-primary is-rounded">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridExample;
