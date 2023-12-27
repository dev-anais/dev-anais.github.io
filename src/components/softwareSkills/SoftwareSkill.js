import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { ReactComponent as Typescript } from "../../assets/images/typescript.svg";
import { ReactComponent as NextJS } from "../../assets/images/nextjs.svg";

export default function SoftwareSkill() {
  const getIcon = (name) => {
    if (name === "typescript") {
      return <Typescript />;
    }
    if (name === "nextjs") {
      return <NextJS />;
    }
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.isManualIcon ? (
                  <i className={skills.fontAwesomeClassname}>
                    {getIcon(skills.skillName)}
                  </i>
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
