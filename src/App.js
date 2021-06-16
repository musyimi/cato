import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Casestudies from "./pages/Casestudies";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Dedicated from "./pages/Dedicated";
import Ethernet from "./pages/Ethernet";
import Vpn from "./pages/Vpn";
import Broadband from "./pages/Broadband";
import Dcloud from "./pages/Dcloud";
import Hybrid from "./pages/Hybrid";
import Wildix from "./pages/Wildix";
import Customer from "./pages/Customer";
import Fieldservice from "./pages/Fieldservice";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import SmartFibre from "./pages/SmartFibre";
import ClientPortal from "./pages/ClientPortal";
import Products from "./pages/Products";
import Homefibre from "./components/Homefibre";
import Securenet from "./components/Securenet";
import Fourgwifirouter from "./components/Fourgwifirouter";
import Entertainment from "./components/Entertainment";
import Homecctv from "./components/Homecctv";
import Iot from "./components/Iot";
import Ask from "./components/Ask";
import Coverage from "./components/Coverage";
import Offers from "./components/Offers";
import Get from "./components/Get";
import Faqs from "./components/Faqs";
import Flaglinksform from "./components/Flaglinksform";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/casestudies" component={Casestudies} />
          <Route path="/experience" component={Experience} />
          <Route path="/services" component={Services} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/dedicated" component={Dedicated} />
          <Route path="/ethernet" component={Ethernet} />
          <Route path="/vpn" component={Vpn} />
          <Route path="/broadband" component={Broadband} />
          <Route path="/dcloud" component={Dcloud} />
          <Route path="/hybrid" component={Hybrid} />
          <Route path="/wildix" component={Wildix} />
          <Route path="/customer" component={Customer} />
          <Route path="/field" component={Fieldservice} />
          <Route path="/resources" component={Resources} />
          <Route path="/partners" component={Partners} />
          <Route path="/smartfibre" component={SmartFibre} />
          <Route path="/products" component={Products} />
          <Route path="/clientportal" component={ClientPortal} />
          <Route path="/homefibre" component={Homefibre} />
          <Route path="/securenet" component={Securenet} />
          <Route path="/fourgwifirouter" component={Fourgwifirouter} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/homecctv" component={Homecctv} />
          <Route path="/iot" component={Iot} />
          <Route path="/ask" component={Ask} />
          <Route path="/coverage" component={Coverage} />
          <Route path="/offers" component={Offers} />
          <Route path="/getintouch" component={Get} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/country" component={Flaglinksform} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
