import PropTypes from "prop-types";
import classNames from "classnames";
import containerStyles from "./container.module.scss";

const Container = ({ amuClasses, children, className }) => {
  let frameworkClasses = [containerStyles.container, className];
  if (amuClasses) {
    frameworkClasses.push(amuClasses.map((each) => gridStyles[each]));
  }

  return <div className={classNames(frameworkClasses)}>{children}</div>;
};

export default Container;

Container.propTypes = {
  amuClasses: PropTypes.array,
  className: PropTypes.string,
};
