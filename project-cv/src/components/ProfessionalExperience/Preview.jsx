import { formatMonthYear } from "../utils";
function ProfessionalExperiencePreview({ jobTitle, company, skillDesc, yearBegin, yearEnd }) {
  const entryDate = yearBegin && yearEnd ? `${formatMonthYear(yearBegin)} - ${formatMonthYear(yearEnd)}` : "";

  return (
    <section className="cv__section cv__section--experience">
      <h2 className="cv__section-title">Experience</h2>

      <div className="cv__entry--job">
        <div className="cv__entry">
          <h3 className="cv__entry-title">{jobTitle}</h3>
          <span className="cv__entry-date ">{entryDate}</span>
        </div>

        <div className="cv__entry-meta">
          <span className="cv__entry-org">{company}</span>
        </div>

        <p className="cv__entry-desc">{skillDesc}</p>
      </div>
    </section>
  );
}

export default ProfessionalExperiencePreview;
