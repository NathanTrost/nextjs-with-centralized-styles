import { Row, Col } from "antd";
import styles from "content.module.scss";

const Content = () => {
  const rowStyle = { width: "100%" };
  const colStyle = classNames(["gutter-row", styles.column]);

  return (
    <Row gutter={16} className={rowStyle}>
      <Col className={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className={colStyle} span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  );
};

export default Content;
