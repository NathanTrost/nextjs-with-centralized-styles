import classNames from "classnames";
import gridStyles from "../styles/barebones/grid.module.scss";
import customGridStyles from "./customGrid.module.scss";

const Cell = ({ children }) => (
  <div className={customGridStyles["cell-border"]}>
    <div className={customGridStyles["cell-content"]}>{children}</div>
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
        <Cell>
          Content 4 With a lot of content, I mean so much content I'd be
          surprised that this cell knew what to do with me{" "}
        </Cell>
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
  return (
    <>
      <p
        className={classNames([
          gridStyles["grid-container"],
          gridStyles["grid-responsive-1"],
        ])}
      >
        Copied barebones.scss from barebones repo , traded out all CSS variables
        out for Sass variables, and split master scss file into purposefull
        .scss file modules. This method is agnostic to any one framework. It
        should be noted that 'responsive' here refers to using a responsive grid
        layout, this does not have breakpoints built in.
      </p>
      <h3>
        Resource:{" "}
        <a
          href="https://github.com/acahir/Barebones/tree/master/css"
          target="_blank"
        >
          barebones.scss
        </a>
      </h3>
      {examples}
    </>
  );
};

export default GridExample;
