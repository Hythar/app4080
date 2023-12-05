import PropTypes from 'prop-types';
import { MdLocationOn } from 'react-icons/md'; // For Material Design icons
import { AiFillGithub } from 'react-icons/ai'; // For Ant Design icons
import { SiTwitter } from 'react-icons/si'; // For Simple Icons
import { FaLinkedin } from 'react-icons/fa'; // For Font Awesome icons

import { skeleton } from '../../helpers/utils';

const ListItem = ({ icon, title, value, link, loading }) => {
  const itemStyle = 'flex items-center my-2'; // Adjust styles as needed
  const iconStyle = 'text-lg mr-2'; // Adjust icon size and margin as needed
  const titleStyle = 'font-medium'; // Adjust font styling as needed
  const valueStyle = 'text-sm ml-auto'; // Adjust text size and alignment as needed

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={itemStyle}>
      <div className={iconStyle}>{icon}</div>
      <div className={titleStyle}>{title}</div>
      {loading ? (
        skeleton({ width: 'w-20', height: 'h-4' })
      ) : (
        <div className={valueStyle}>{value}</div>
      )}
    </a>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  link: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const Details = ({ profile, loading, social, github }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            <div>{skeleton({ width: 'w-full', height: 'h-24' })}</div>
          ) : (
            <>
              <ListItem
                icon={<MdLocationOn />}
                title="Location:"
                value={profile.location}
                link="#"
                loading={loading}
              />
              <ListItem
                icon={<AiFillGithub />}
                title="GitHub:"
                value={github.username}
                link={`https://github.com/${github.username}`}
                loading={loading}
              />
              <ListItem
                icon={<SiTwitter />}
                title="Twitter:"
                value={social.twitter}
                link={`https://twitter.com/${social.twitter}`}
                loading={loading}
              />
              <ListItem
                icon={<FaLinkedin />}
                title="LinkedIn:"
                value={social.linkedin}
                link={`https://www.linkedin.com/in/${social.linkedin}`}
                loading={loading}
              />
              {/* Repeat ListItem for other social networks as needed */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

export default Details;
