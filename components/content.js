import { Row, Col } from "antd";
import classNames from "classnames";
import styles from "./content.module.scss";

const Content = () => {
  const colStyle = classNames([styles.column]);

  return (
    <>
      <Row gutter={16} className={styles.row}>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
      </Row>
      <Row gutter={16} className={styles.row}>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div className={styles["column-content"]}>col-6</div>
        </Col>
      </Row>

      <Row gutter={16} className={styles.row}>
        <Col className={colStyle} span={12}>
          <div>col-12</div>
        </Col>
        <Col className={colStyle} span={6}>
          <div>col-12</div>
        </Col>
      </Row>
    </>
  );
};

export default Content;
