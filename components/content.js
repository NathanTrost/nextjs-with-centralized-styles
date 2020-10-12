import { Column, Columns } from "bulma-styled-components";
import classNames from "classnames";

const Content = () => {
  const col = classNames([
    "has-background-primary",
    "has-text-white",
    "has-text-centered",
  ]);
  return (
    <Columns>
      <Column className={col}>Column</Column>
      <Column className={col}>Column</Column>
      <Column className={col}>Column</Column>
      <Column className={col}>Column</Column>
    </Columns>
  );
};

export default Content;
