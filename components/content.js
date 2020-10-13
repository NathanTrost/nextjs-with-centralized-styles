import styles from "content.module.scss";
import classNames from "classnames"

const Content = () => {
  return (
    <div className="flex">
      <div className={classNames(["w-1/2", "bg-gray-400", "h-12"])}>1</div>
      <div className={classNames(["w-1/2", "bg-gray-400", "h-12"])}>2</div>

    </div>
  );
};

export default Content;
