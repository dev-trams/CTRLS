import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBar from "./public/HeaderBar";

function HomePage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [projectList, setProjectList] = useState([]); // 배열로 초기화

  useEffect(() => {
    var url = "/ctrls/project";
    const PROXY =
      window.location === "localhost"
        ? "localhost"
        : "https://core.apis.ctrls-studio.com";
    const URL = `${PROXY}${url}`;
    axios
      .get(URL, {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        return setProjectList(res.data);
      })
      .catch((error) =>
        console.error("Error fetching project data:", `${error}`)
      );
  }, []);

  const handleGoPage = (id, state) => {
    navigate(`/detail/${id}`, { state: state });
  };
  const handelRenderCard = () => {
    if (Array.isArray(projectList)) {
      return projectList.map((project) => {
        console.log(project);
        return (
          <Col
            key={project.title}
            style={{ paddingBottom: "30px", cursor: "pointer" }}
            onClick={() =>
              handleGoPage(project.title, {
                title: project.title,
                descaption: project.descaption,
                
              })
            }
          >
            {projectCard({
              newType: project === projectList[projectList.length - 1],
              title: project.title,
              descaption: project.description,
              bannerSrc: project.banner ?? 'project1.png',
            })}
          </Col>
        );
      });
    } else {
      return <div>데이터 없음</div>;
    }
  };

  return (
    <>
      <HeaderBar state={state} />
      <div
        style={{
          width: "100vw",
          height: "500px",
          backgroundColor: "#2E2E2E",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: "1200px", height: "400px", backgroundColor: "grey" }}
        >
          <p
            style={{
              height: "400px",
              fontSize: "100pt",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            공사중..
          </p>
        </div>
      </div>
      <div style={{ width: "100vw", height: "1294px" }}>
        <div
          style={{
            alignItems: "start",
            paddingTop: "55px",
            paddingBottom: "55px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <ButtonGroup
            style={{ backgroundColor: "#2E2E2E", borderRadius: "100px" }}
          >
            <Button
              style={{
                width: "200px",
                height: "60px",
                backgroundColor: "#DEC9F2",
                color: "black",
                border: "0px",
                borderRadius: "100px",
              }}
            >
              ALL
            </Button>
            <Button
              style={{
                width: "200px",
                height: "60px",
                backgroundColor: "#2E2E2E",
                color: "white",
                border: "0px",
                borderRadius: "100px",
              }}
            >
              Web
            </Button>
            <Button
              style={{
                width: "200px",
                height: "60px",
                backgroundColor: "#2E2E2E",
                color: "white",
                border: "0px",
                borderRadius: "100px",
              }}
            >
              Android
            </Button>
            <Button
              style={{
                width: "200px",
                height: "60px",
                backgroundColor: "#2E2E2E",
                color: "white",
                border: "0px",
                borderRadius: "100px",
              }}
            >
              Ios
            </Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "1200px", height: "900px" }}>
            <Row>{handelRenderCard()}</Row>
          </div>
        </div>
      </div>
      <footer
        style={{
          width: "100vw",
          height: "210px",
          backgroundColor: "#2E2E2E",
          display: "-webkit-flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white" }}>asfds</div>
        <div>
          <p style={{ color: "white" }}>© 2023 CTRL S | Design. 148 </p>
        </div>
      </footer>
    </>
  );
}

const projectCard = ({ newType, title, descaption, bannerSrc }) => {
  return (
    <Card style={{ width: "378px", height: "400px" }}>
      <Card.Body style={{ height: "265px", overflow: "hidden", padding: "0" }}>
        {newType && (
          <div style={{ position: "absolute" }}>
            <img
              alt="newMark"
              src="newMark.png"
              style={{ position: "absolute" }}
            />
            <div style={{ display: "flex" }}>
              <p
                style={{
                  position: "absolute",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                NEW
              </p>
            </div>
          </div>
        )}
        <img style={{ width: "378px" }} src={`https://ctrls-studio.com/${bannerSrc}`} alt="BannerImage" />
      </Card.Body>
      <Card.Footer style={{ height: "135px", backgroundColor: "#2E2E2E" }}>
        <div style={{ color: "white", fontSize: "30px" }}>{title}</div>
        <div style={{ color: "white", fontSize: "12px" }}>{descaption}</div>
        <br></br>
        <Row
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Col
            xs="4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img src="figma.png" alt="figma" width="18px" />
            <img src="figma.png" alt="figma" width="18px" />
            <img src="figma.png" alt="figma" width="18px" />
          </Col>
          <Col xs="1">
            <img src="figma.png" alt="figma" width="18px" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default HomePage;
