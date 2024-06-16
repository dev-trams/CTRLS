import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);
  const [getId, setId] = useState("");
  const [getPwd, setPwd] = useState("");
  const handleOnLogin = () => {
    console.log(`clicked | ${getId} | ${getPwd}`);
    if (userList.length > 0) {
      userList.map((item) => {
        console.log(`response server | ${item.uid} | ${item.password}`);
        if (item.uid === getId) {
          if (item.password === getPwd) {
            navigate("/", {
              state: { id: item.uid, name: item.name },
            });
          } else {
            console.log("false");
          }
        } else {
          console.log("false");
        }
        return [];
      });
    }
  };
  useEffect(() => {
    let url = "/ctrls/user";

    const PROXY = window.location === 'localhost' ? 'http://localhost' : 'https://core.apis.ctrls-studio.com';
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "30vw" }}>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="id"
                placeholder="Enter ID"
                onChange={(item) => setId(item.target.value)}
              />
              <Form.Text className="text-muted">
                팀 관리자에게 부여받은 계정을 입력해주세요.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(item) => setPwd(item.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => handleOnLogin()}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LoginPage;
