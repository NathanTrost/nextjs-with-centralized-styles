import PropTypes from "prop-types";
import classNames from "classnames";
import gridStyles from "./columns.module.scss";

const Column = ({ amuClasses, children, className }) => {
  let frameworkClasses = [gridStyles.column, className];
  if (amuClasses) {
    frameworkClasses.push(amuClasses.map((each) => gridStyles[each]));
  }
  return <div className={classNames(frameworkClasses)}>{children}</div>;
};

export default Column;

Column.propTypes = {
  amuClasses: PropTypes.array,
  className: PropTypes.string,
};
