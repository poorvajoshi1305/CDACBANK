import { Container } from "react-bootstrap";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Landing from "./components/Landing";
import { Row, Col } from "react-bootstrap";
import AdminLogin from "./screens/admin/adminlogin";
import adminHome from "./screens/admin/adminHome";
import CustLogin from "./screens/customers/Custlogin";
import EDITplastic from "./screens/customers/EDITplastic";
import CardApply from "./screens/customers/CardApply";
import CustRegs from "./screens/customers/CustRegs";
import CustHome from "./screens/customers/CustHome";
import addCustomer from "./screens/admin/addCustomer";
import UpdateCust from "./screens/customers/UpdateCust";
// import ForgotPassword from "./screens/customers/ForgotPassword";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Update } from "@material-ui/icons";
import ForgotPassword from "./screens/customers/ForgotPassword";

function App() {
  const marginTop = {
    marginTop: "30px",
  };
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row className="justify-content-md-center">
          {/* <Col lg={12} style={marginTop}></Col> */}
          <Switch>
            <Route path="/" exact component={Landing} />

            <Route path="/adminlogin" exact component={AdminLogin} />

            <Route path="/adminhome" exact component={adminHome} />
            <Route path="/addCust" exact component={addCustomer} />
            <Route path="/welcome" exact component={Welcome} />
            <Route path="/updatecust" exact component={UpdateCust} />
            <Route path="/custlogin" exact component={CustLogin} />
            <Route path="/custRegister" exact component={CustRegs} />
            <Route path="/custhome" exact component={CustHome} />
            <Route path="/cardapply" exact component={CardApply} />
            <Route path="/EDITplastic" exact component={EDITplastic} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
          </Switch>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
