import { Outlet } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h4>우리 회사는 용....</h4>
      <br />
      <Outlet></Outlet>
    </div>
  );
}

export default AboutPage;
