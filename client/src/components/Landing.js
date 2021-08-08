import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import product_design from "../assets/img/product_design.png";
import visual_design from "../assets/img/visual_design.png";
import discovery from "../assets/svg/discovery.svg";
import research from "../assets/svg/research.svg";
import wireframe from "../assets/svg/wireframe.svg";
import ui from "../assets/svg/ui.svg";
import user_exp_design from "../assets/svg/user_exp_design.svg";
import visual_design2 from "../assets/svg/visual_design.svg";

import "./landing.css";

export const Landing = () => {
  useEffect(() => {
      //sending api call and getting response from node every 3 seconds
    setInterval(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => console.log(data.message));
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="column">
          <div style={{ paddingLeft: "5rem" }}>
            <div className="goBackAnchor">
              <Link to="/secondpage">Go Back</Link>
            </div>

            <h1>Product Design</h1>
            <p style={{ width: "80%" }}>
              Our multifaceted apps are custom built and developed to support
              multiple platforms, including both Android and iOS, making apps
              accessible for all.
            </p>
          </div>
          <div
            className="illustrations"
            style={{
              backgroundImage: `url(${product_design})`,
              backgroundSize: "cover",
              backgroundPositionY: " bottom",
              backgroundPositionX: "1rem",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="illustrations"
            style={{ textAlign: "right", paddingRight: "1rem" }}
          >
            {" "}
            <img src={visual_design} alt="" />
          </div>
          <div style={{ paddingRight: "5rem" }}>
            <h2>More than visual design, more than interactions.</h2>
            <p style={{ width: "80%" }}>
              We take pride in our craft. Drawing on our deep expertise in
              design, our Product Design team cares for your users experience
              over the entire customer journey,at every touchpoint with your
              company
            </p>
            <p>
              We shepherd your product through the entire design process. We aim
              to achieve yours.
            </p>
            <p>
              We also collaborate with our Software Engineer team to ensure our
              designs are technically faeasible within the constraints of the
              project. At the same time, we're watching for innovative new
              technologies that can make the experience more seamless.
            </p>
          </div>
        </div>

        <div className="centerHeading">
          <h2>Our Design Process</h2>
          <p>
            Every decision we make is informed and goal oriented with the user
            journey in mind.
          </p>
          <div className="cycle">
            <div className="imageContainer">
              <img src={discovery} alt="" className="cycleImage1" />
              <h3 className="cycleImage1Label">1. Discovery</h3>
            </div>
            <div className="imageContainer">
              <img src={research} alt="" className="cycleImage2" />
              <h3 className="cycleImage2Label">
                2. Research + project estimation
              </h3>
            </div>
            <div className="imageContainer">
              <img src={wireframe} alt="" className="cycleImage3" />
              <h3 className="cycleImage3Label">3. UX Wireframes</h3>
            </div>
            <div className="imageContainer">
              <img src={ui} alt="" className="cycleImage4" />
              <h3 className="cycleImage4Label">4. UI Application</h3>
            </div>
            <div className="cycleCenterText">
              <p style={{ fontSize: "0.8rem" }}>
                We sit down with you to discuss your business goals and your
                target audience. We determine the problems you are trying to
                solve, and togetherm we define the key features of the
                app/software you're trying to build.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="servicesContainer">
        <h2>Product Design Services</h2>
        <div className="tabContainer">
          <div className="tab">User Experience Design</div>
          <div className="tab">Visual Design</div>
          <div className="tab">Prototyping</div>
          <div className="tab">Content Design</div>
          <div className="tab">Design Systems</div>
          <div className="tab">Voice, Chatbots {"&"} Multimodal UI</div>
        </div>
      </div>
      <div className="container">
        <div
          className="column"
          style={{ marginTop: "1rem", padding: "0 5rem 5rem 5rem" }}
        >
          <div>
            <h2>User experience design</h2>

            <p>
              Even after the Product Stategy phase, we maintain a relentless
              focus on your business goals. Our Product Design team ensures the
              product we deliver will solve your challenge while meeting your
              user's needs.
            </p>
            <h4>TACTICS</h4>
            <div className="tacticsContainer">
              <label>Behavioural data analysis</label>
              <label>Wireframe</label>
              <label>Personalisation architecture</label>
              <label>User Row</label>
            </div>
          </div>
          <div className="illustrations">
            <img src={user_exp_design} alt="" />
          </div>
        </div>
        <div
          className="column"
          style={{ marginTop: "1rem", padding: "0 5rem 5rem 5rem" }}
        >
          <div
            className="illustrations"
            style={{ textAlign: "right", paddingRight: "1rem" }}
          >
            <img src={visual_design2} alt="" />
          </div>
          <div>
            <h2>Visual Design</h2>

            <p>
              Yes, we make your software product beautiful. We also make it easy
              to use compelling and delightful.
            </p>
            <h4>TACTICS</h4>
            <div className="tacticsContainer">
              <label>Design workshop</label>
              <label>Custom iconography</label>
              <label>Visual design concept</label>
              <label>UI elements</label>
              <label>Typography system</label>
              <label>Style guide</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
