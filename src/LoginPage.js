import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function JLoginPage() {
  const [userList, setUserList] = useState([]);
  const [getId, setId] = useState();
  const [getPwd, setPwd] = useState();
  const navigate = useNavigate();
  const handleOnLogin = () => {
    console.log(`clicked | ${getId} | ${getPwd}`);

    userList.map((item) => {
      console.log(
        `response server | ${item.uid} | ${item.password} | ${item.role}`
      );
      if (item.uid === getId) {
        if (item.password === getPwd) {
          if (item.role === "admin") {
            navigate("/jvak", {
              state: { id: item.uid, name: item.name, role: item.role },
            });
          } else {
            console.log(item.role === "admin");
            alert(
              "접속 권한이 없습니다.\n 프로젝트 관리자에게 문의 해주십시오."
            );
          }
        } else {
          console.log("false");
          alert("비밀번호가 맞지 않습니다. \n 다시 입력해주세요.");
        }
      } else {
        console.log("false");
        alert("아이디가 맞지 않습니다. \n 다시 입력해주세요.");
      }
      return [];
    });
  };
  useEffect(() => {
    var url = "/ctrls/user";
    const PROXY = window.location === 'localhost' ? 'localhost' : 'https://core.apis.ctrls-studio.com';
    const URL = `${PROXY}${url}`;
    axios
      .post(URL, {}, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        return setUserList(res.data);
      })
      .catch((error) => console.error("Error fetching project data:", `${error}`));
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFD9D9",
          width: "100vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "428px",
            height: "459px",
            backgroundColor: "white",
          }}
        >
          <h1 style={{ color: "pink" }}>JVAK</h1>
          <Form.Group>
            <Form.Control
              placeholder="아이디"
              onChange={(item) => setId(item.target.value)}
            />
            <Form.Control
              placeholder="비밀번호"
              type="password"
              onChange={(item) => setPwd(item.target.value)}
            />
            <Form.Check label="로그인 상태 유지" />
          </Form.Group>
          <Form.Group>
            <Button onClick={() => handleOnLogin()}>로그인</Button>
          </Form.Group>
        </div>
      </div>
      <footer
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "#2E2E2E",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ textAlign: "center", color: "white" }}>
          © 2023 CTRL S | Design. 148{" "}
        </p>
      </footer>
    </>
  );
}

export default JLoginPage;
