import PropTypes from "prop-types";
import classNames from "classnames";
import gridStyles from "./columns.module.scss";

const Column = ({ bulmaClasses, children, className }) => {
  let frameworkClasses = [gridStyles.column, className];
  if (bulmaClasses) {
    frameworkClasses.push(bulmaClasses.map((each) => gridStyles[each]));
  }
  return <div className={classNames(frameworkClasses)}>{children}</div>;
};

export default Column;

Column.propTypes = {
  bulmaClasses: PropTypes.array,
  className: PropTypes.string,
};
