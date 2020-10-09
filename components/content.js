import Column from "../styled/layout/Column";
import Columns from "../styled/layout/Columns";

const Content = () => {
  return (
    <>
      <Columns amuClasses={["is-vcentered", "is-centered"]}>
        <Column amuClasses={["is-1"]}>Column 1</Column>
        <Column amuClasses={["is-2"]}>Column 2</Column>
        <Column amuClasses={["is-3"]}>Column 3</Column>
        <Column amuClasses={["is-6"]}>Column 4</Column>
      </Columns>
    </>
  );
};

export default Content;
