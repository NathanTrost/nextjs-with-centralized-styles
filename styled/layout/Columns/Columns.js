import PropTypes from "prop-types";
import classNames from "classnames";
import gridStyles from "./columns.module.scss";

const Columns = ({ amuClasses, children, className }) => {
  let frameworkClasses = [gridStyles.columns, className];
  if (amuClasses) {
    frameworkClasses.push(amuClasses.map((each) => gridStyles[each]));
  }

  return <div className={classNames(frameworkClasses)}>{children}</div>;
};

export default Columns;

Columns.propTypes = {
  amuClasses: PropTypes.array,
  className: PropTypes.string,
};
