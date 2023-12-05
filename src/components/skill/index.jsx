import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const Skill = ({ loading, skills }) => {
  const skillBadgeStyle = 'm-1 text-xs font-bold leading-sm px-3 py-1 bg-opacity-90 rounded-full'; // Adjust badge styles as needed

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <h5 className="card-title text-center font-bold text-xl mb-4">
          {loading ? (
            skeleton({ width: 'w-32', height: 'h-8' })
          ) : (
            'Skills & Expertise' // You can change this title
          )}
        </h5>
        <div className="flex flex-wrap justify-center gap-2">
          {loading
            ? skeleton({ width: 'w-full', height: 'h-24' })
            : skills.map((skill, index) => (
                <span key={index} className={`${skillBadgeStyle} badge badge-primary`}>
                  {skill}
                </span>
              ))}
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skill;
