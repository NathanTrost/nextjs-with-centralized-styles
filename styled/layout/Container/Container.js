import PropTypes from "prop-types";
import classNames from "classnames";
import containerStyles from "./container.module.scss";

const Container = ({ bulmaClasses, children, className }) => {
  let frameworkClasses = [containerStyles.container, className];
  if (bulmaClasses) {
    frameworkClasses.push(bulmaClasses.map((each) => gridStyles[each]));
  }

  return <div className={classNames(frameworkClasses)}>{children}</div>;
};

export default Container;

Container.propTypes = {
  bulmaClasses: PropTypes.array,
  className: PropTypes.string,
};
