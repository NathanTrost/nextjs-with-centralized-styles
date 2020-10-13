import PropTypes from "prop-types";
import classNames from "classnames";
import gridStyles from "./columns.module.scss";

const Columns = ({ bulmaClasses, children, className }) => {
  let frameworkClasses = [gridStyles.columns, className];
  if (bulmaClasses) {
    frameworkClasses.push(bulmaClasses.map((each) => gridStyles[each]));
  }

  return <div className={classNames(frameworkClasses)}>{children}</div>;
};

export default Columns;

Columns.propTypes = {
  bulmaClasses: PropTypes.array,
  className: PropTypes.string,
};
