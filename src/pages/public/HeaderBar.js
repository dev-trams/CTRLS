import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderBar({ state }) {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/login");
  };
  console.log(state === null);
  return (
    <div className="App">
      <Navbar
        className="navbar"
        style={{
          height: "55px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Navbar.Brand>
          <Container>
            <Row>
              <Col
                style={{
                  fontSize: "24pt",
                }}
              >
                CTRL S
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="ctrls_favicon.png"
                  width="30px"
                  height="30px"
                  alt="logo"
                />
              </Col>
            </Row>
          </Container>
        </Navbar.Brand>

        <Nav style={{ alignItems: "center" }}>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>PROJECT</Nav.Link>
          <Nav.Link>COMMUNITY</Nav.Link>
          <Nav.Link>TEAM MEMBER</Nav.Link>
          {state === null && (
            <Container
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* 버튼들 모두 속성 같음 (색 빼고) */}

              <Button
                style={{
                  width: "88px",
                  height: "30px",
                  backgroundColor: "#2E2E2E",
                  color: "#F2E4F2",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#ffffffff",
                }}
                onClick={() => handleLoginPage()}
              >
                로그인
              </Button>
              <Button
                style={{
                  width: "88px",
                  height: "30px",
                  backgroundColor: "#CCBBF2",
                  color: "#2E2E2E",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#ffffffff",
                }}
              >
                회원가입
              </Button>
            </Container>
          )}

          {state !== null && (
            <Row>
              {state.name === "이재규" && (
                <Col>
                  <div
                    style={{ paddingRight: "10px" }}
                    onClick={() => navigate("/jvak/login")}
                  >
                    JVAK
                  </div>
                </Col>
              )}
              <Col>
                <div
                  style={{
                    width: "88px",
                    height: "30px",
                    backgroundColor: "#2E2E2E",
                    color: "white",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#ffffffff",
                    borderRadius: "5px",
                  }}
                >
                  {state.name}
                </div>
              </Col>
            </Row>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
