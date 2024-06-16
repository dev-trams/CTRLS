import { Button, NavItem, Navbar } from "react-bootstrap";
function jHomePage() {
  return (
    <>
      <div style={{ width: "100vw", height: "110px" }}>
        <Navbar
          style={{
            height: "55px",
            paddingLeft: "20px",
            paddingRight: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavItem>
            <h3 style={{ color: "pink" }}>JVAK</h3>
          </NavItem>
          <NavItem>
            <Button style={{ backgroundColor: "#2E2E2E" }}>로그아웃</Button>
          </NavItem>
        </Navbar>
        <div style={{ height: "55px", backgroundColor: "#FFD9D9" }}></div>
      </div>
      <div style={{ width: "100vw", height: "80vh", display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            marginTop: '5%',
            width: "1000px",
            height: "80px",
            border: "3px solid black",
            borderRadius: "100px",
          }}
        ></div>
      </div>
      <footer></footer>
    </>
  );
}

export default jHomePage;
