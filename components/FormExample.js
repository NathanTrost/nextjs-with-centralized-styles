import classNames from "classnames";

const FormExample = () => {
  return (
    <>
      <h3 className="title is-2">Table with form</h3>
      <div className={"columns"}>
        <div className={classNames(["columns", "is-6"])}>
          <div className="column is-8">
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
          <div className="column is-4">
            <div className="block">
              <button className="button is-primary is-rounded">Reset</button>
            </div>
            <div className="block">
              <button className="button is-primary is-rounded">Send</button>
            </div>
          </div>
        </div>
        <div className={classNames(["columns", "is-6"])}></div>
      </div>
    </>
  );
};

export default FormExample;
