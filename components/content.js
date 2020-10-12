import { Row, Col } from "antd";

const Content = () => {
  const rowStyle = { width: "100%" };
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  );
};

export default Content;
