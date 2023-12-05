import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const ExperienceItem = ({ role, company, period, companyLink, loading }) => {
  const itemStyle = 'flex flex-col'; // Adjust as needed for layout
  const roleStyle = 'text-lg font-bold'; // Adjust as needed for role title
  const companyStyle = 'text-sm'; // Adjust as needed for company name
  const periodStyle = 'text-xs mb-2'; // Adjust as needed for period

  return (
    <div className={itemStyle}>
      {loading ? (
        skeleton({ width: 'w-full', height: 'h-6' })
      ) : (
        <>
          <span className={roleStyle}>{role}</span>
          <a href={companyLink} target="_blank" rel="noreferrer" className={companyStyle}>
            {company}
          </a>
          <span className={periodStyle}>{period}</span>
        </>
      )}
    </div>
  );
};

ExperienceItem.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  companyLink: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const Experience = ({ experiences, loading }) => {
  const containerStyle = 'card shadow-lg compact bg-base-100'; // Card container styles
  const headerStyle = 'text-center font-bold text-xl mb-4'; // Header styles

  return (
    <div className={containerStyle}>
      <div className="card-body">
        <h5 className={headerStyle}>
          {loading ? skeleton({ width: 'w-32', height: 'h-8' }) : 'Experience'}
        </h5>
        <div className="space-y-4">
          {loading ? (
            <div>{skeleton({ width: 'w-full', height: 'h-24' })}</div>
          ) : (
            experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                role={exp.position}
                company={exp.company}
                period={`${exp.from} - ${exp.to}`}
                companyLink={exp.companyLink}
                loading={loading}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      companyLink: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Experience;
