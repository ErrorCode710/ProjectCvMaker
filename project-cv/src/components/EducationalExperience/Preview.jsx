import { formatMonthYear } from "../utils";

function EducationalExperiencePreview({ degree, school, city, country, yearBegin, yearEnd }) {
  const entryDate = yearBegin && yearEnd ? `${formatMonthYear(yearBegin)} - ${formatMonthYear(yearEnd)}` : "";

  return (
    <section className="cv__section cv__section--education">
      <h2 className="cv__section-title">Education</h2>

      <div className="cv__entry-details">
        <div className="cv__entry">
          {degree && <h3 className="cv__entry-title">{degree}</h3>}{" "}
          {yearBegin && yearEnd && <span className="cv__entry-date">{entryDate}</span>}
        </div>

        <div className="cv__entry-meta">
          {school && <span className="cv__entry-org">{school}</span>}

          {city && country && (
            <span className="cv__entry-location">
              {city}, {country}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default EducationalExperiencePreview;
