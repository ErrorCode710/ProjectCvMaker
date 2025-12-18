import { formatMonthYear } from "../utils";

function EducationalExperiencePreview({ educationalInfo }) {
  return (
    <section className="cv__section cv__section--education">
      <h2 className="cv__section-title">Education</h2>

      <ul>
        {educationalInfo.map((edu, index) => {
          const entryDate =
            edu.yearBegin && edu.yearEnd ? `${formatMonthYear(edu.yearBegin)} - ${formatMonthYear(edu.yearEnd)}` : "";
          return (
            <li key={index} className="cv__entry-details">
              <div className="cv__entry">
                {edu.degree && <h3 className="cv__entry-title">{edu.degree}</h3>}{" "}
                {edu.yearBegin && edu.yearEnd && <span className="cv__entry-date">{entryDate}</span>}
              </div>

              <div className="cv__entry-meta">
                {edu.school && <span className="cv__entry-org">{edu.school}</span>}
                {edu.city && edu.country && (
                  <span className="cv__entry-location">
                    {edu.city}, {edu.country}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default EducationalExperiencePreview;
