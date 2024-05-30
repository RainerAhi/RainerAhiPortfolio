import React from "react";

export const Section1 = () => {
  return (
    <section className="section" >
      <div className="one-content">
        <div className="one-content-inside" >

          <div className="introduction" >
            <div className="profile-picture" />
            <h1 className="introduction-name">Rainer Ahi</h1>
            <h1 className="introduction-skills">Entrepreneur, Developer & Athlete</h1>
            <div className="introduction-socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="border" />

          <div className="about">
            <h1 className="about-text" >About</h1>
            <h1 className="about-description" >Skilled Front-End Developer proficient in JavaScript, HTML & CSS, React, and THREEjs. Notable entrepreneur and programmer from Estonia, honored with multiple national awards. Successful YouTube content creator with 30K+ subscribers and 35M+ views. Also, a part-time track & field athlete.</h1>
          </div>

          <div className="experience">
            <h1 className="experience-text" >Experience</h1>
            <ul>
              <div className="list-border" />
              <li class="flex-item grey-marker">
                <div>
                  <h1 className="experience-description" >Peak Creations (May 2024 - Present)</h1>
                  <h1 className="experience-small-description" >Web agency offering many services</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Freelancer (Dec 2023 - Present)</h1>
                  <h1 className="experience-small-description" >Creating modern 3D websites</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Studenx (Jul 2022 - Apr 2023)</h1>
                  <h1 className="experience-small-description" >Building an investing themed learning app</h1>
                </div>
              </li>
              <li class="flex-item light-grey-marker">
                <div>
                  <h1 className="experience-description" >Content Creation (Mar 2020 - May 2022)</h1>
                  <h1 className="experience-small-description" >Growing YouTube channels to 30k subscribers</h1>
                </div>
              </li>
            </ul>
          </div>

          <div className="projects">
            <h1 className="projects-text" >Projects</h1>
            <div className="projects-container" >

              <div className="project">
                <div className="project-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h1 className="project-title" >SyntaxUI</h1>
                <h1 className="project-description" >Free-to-use UI elements designed for rapid development.</h1>
              </div>

              <div className="project">
                <div className="project-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h1 className="project-title" >Prettyfolio</h1>
                <h1 className="project-description" >A curated collection of portfolios for inspiration.</h1>
              </div>

              <div className="project">
                <div className="project-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h1 className="project-title" >Enchant</h1>
                <h1 className="project-description" >A vibrant theme for Visual Studio Code.</h1>
              </div>

              <div className="project">
                <div className="project-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h1 className="project-title" >Rainerahi.com</h1>
                <h1 className="project-description" >My personal website, blogs and newsletter.</h1>
              </div>

              <div className="project">
                <div className="project-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h1 className="project-title" >Quote Vault</h1>
                <h1 className="project-description" >Social media, but for sharing quotes.</h1>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}