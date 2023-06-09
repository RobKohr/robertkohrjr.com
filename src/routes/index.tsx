import Donation from "../components/Donation";
import About from "./About";
import Issues from "./Issues";
import "./index.scss";

export default function Home() {
  return (
    <div class="route-home" style="position:relative;top:-50px;">
      <div class="header-image-section">
        <h1>Robert Kohr Jr for Longview School Board</h1>
        <h2>Bringing Charter Schools to Longview</h2>
        <Donation />

        <img src="/images/candidate.png" alt="candidate" class="candidate-head" />
      </div>
      <div class="content">
        <About />
        <Issues />
      </div>
    </div>
  );
}
