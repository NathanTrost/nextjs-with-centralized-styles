import classNames from "classnames";
import styles from "./customGrid.module.scss";

const FormExample = () => {
  return (
    <>
      <h3 className="title is-2">Table with form</h3>
      <div className={"columns"}>
        <div className={classNames(["columns", "column", "is-7"])}>
          <div className={classNames(["column", "is-8"])}>
            <div className="field">
              <label className="label">Text Input</label>
              <input className="input" type="text" placeholder="Text input" />
            </div>
            <div className="field">
              <label className="label">Select Input</label>
              <div className="select">
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className={classNames(["column", "is-4", "is-flex"])}>
            <div className={styles.pushBtns}>
              <div className="block">
                <button className={classNames(["button", "is-light"])}>
                  Cancel
                </button>
              </div>
              <div className="block">
                <button className={classNames(["button", "is-link"])}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(["columns", "column", "is-5"])}>
          Content on Right
        </div>
      </div>
    </>
  );
};

export default FormExample;
