import { formatMonthYear } from "../utils";
function ProfessionalExperiencePreview({ professionalInfo }) {
  // const entryDate = yearBegin && yearEnd ? `${formatMonthYear(yearBegin)} - ${formatMonthYear(yearEnd)}` : "";

  return (
    <section className="cv__section cv__section--experience">
      <h2 className="cv__section-title">Experience</h2>

      <ul>
        {professionalInfo.map((prof, index) => {
          const entryDate =
            prof.yearBegin && prof.yearEnd ? `${formatMonthYear(prof.yearBegin)} - ${formatMonthYear(prof.yearEnd)}` : "";
          return (
            <li key={index} className="cv__entry--job">
              <div className="cv__entry--job">
                <div className="cv__entry">
                  <h3 className="cv__entry-title">{prof.jobTitle}</h3>
                  <span className="cv__entry-date ">{entryDate}</span>
                </div>

                <div className="cv__entry-meta">
                  <span className="cv__entry-org">{prof.company}</span>
                </div>

                <p className="cv__entry-desc">{prof.skillDesc}</p>
              </div>
              ;
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProfessionalExperiencePreview;

// <div className="cv__entry--job">
//   <div className="cv__entry">
//     <h3 className="cv__entry-title">{jobTitle}</h3>
//     <span className="cv__entry-date ">{entryDate}</span>
//   </div>

//   <div className="cv__entry-meta">
//     <span className="cv__entry-org">{company}</span>
//   </div>

//   <p className="cv__entry-desc">{skillDesc}</p>
// </div>;
