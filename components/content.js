import styles from "content.module.scss";
import classNames from "classnames";

const Content = () => {
  return (
    <div className="flex">
      <div className={classNames(["w-1/2", "bg-gray-400", "h-12"])}>
        <div className="mb-4">
          <div
            className={classNames(["flex", "items-center", "justify-between"])}
          >
            <label
              className={classNames([
                "block",
                "text-gray-700",
                "text-sm",
                "font-bold",
                "mb-2",
              ])}
              for="username"
            >
              Username
            </label>
            <input
              className={classNames([
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              ])}
              id="username"
              type="text"
              placeholder="Username"
            />

            <label
              className={classNames([
                "block",
                "text-gray-700",
                "text-sm",
                "font-bold",
                "mb-2",
              ])}
              for="password"
            >
              Password
            </label>
            <input
              className={classNames([
                "shadow",
                "appearance-none",
                "border",
                "border-red-500",
                "rounded",
                "w-full",
                "py-2",
                "px-3",
                "text-gray-700",
                "mb-3",
                "leading-tight",
                "focus:outline-none",
                "focus:shadow-outline",
              ])}
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className={classNames(["text-red-500", "text-xs", "italic"])}>
              Please choose a password.
            </p>
          </div>
        </div>
      </div>

      <div className={classNames(["w-1/2", "bg-gray-400", "h-12"])}>
        <div className="m-4">
          <div
            className={classNames(["flex", "items-center", "justify-between"])}
          >
            <button
              className={classNames([
                "bg-blue-500",
                "hover:bg-blue-700",
                "text-white",
                "font-bold",
                "py-2",
                "px-4",
                "rounded",
                "focus:outline-none",
                "focus:shadow-outline",
              ])}
              type="button"
            >
              Sign In
            </button>
            <a
              className={classNames([
                "inline-block",
                "align-baseline",
                "font-bold",
                "text-sm",
                "text-blue-500",
                "hover:text-blue-800",
              ])}
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
