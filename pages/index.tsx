import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

export default function Home() {
  const [result, setResult] = React.useState(<Container></Container>);
  function handleClick(url: string) {
    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard!");
  }
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!(event.target instanceof HTMLFormElement)) return;
    setResult(
      <Container>
        <TailSpin />
      </Container>
    );
    const r = await axios.post("https://shor.f5.si/shorten", {
      url: event.target.url.value,
    });
    setResult(
      <Container>
        <Row>
          <Col xs={3}>
            <p>Result: {r.data}</p>
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                handleClick(r.data);
              }}
            >
              Copy
            </Button>
          </Col>
        </Row>
      </Container>
    );
    toast.success("URL shortened successfully!");
  }
  return (
    <>
      <h2 className="home-title">短縮しよう！</h2>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" placeholder="Enter URL" name="url" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      {result}
    </>
  );
}
