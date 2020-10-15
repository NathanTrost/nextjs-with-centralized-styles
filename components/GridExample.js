import classNames from "classnames";
import gridStyles from "../styles/barebones/grid.module.scss";

const Cell = ({ children }) => (
  <div
    style={{
      border: "1px solid #CCC",
      padding: "3px",
      margin: "5px",
    }}
  >
    {children}
  </div>
);

const EachColumnOption = ({ columnNum }) => {
  const hasModifier = columnNum > 0;
  return (
    <>
      <h4>
        {hasModifier ? `${columnNum} Column Responsive Grid` : "Default Grid"}
      </h4>
      <div
        data-testid={`grid-responsive-${columnNum}`}
        className={classNames([
          gridStyles["grid-container"],
          hasModifier && gridStyles[`grid-responsive-${columnNum}`],
        ])}
      >
        <Cell>Content 1</Cell>
        <Cell>Content 2</Cell>
        <Cell>Content 3</Cell>
        <Cell>Content 4</Cell>
        <Cell>Content 5</Cell>
        <Cell>Content 6</Cell>
      </div>
    </>
  );
};

const GridExample = () => {
  const examplesLength = 6;
  const examples = [];
  for (let i = 0; i < examplesLength; i++) {
    examples.push(
      <EachColumnOption key={`grid-responsive-${i}`} columnNum={i} />
    );
  }
  return <>{examples}</>;
};

export default GridExample;
