import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const AvatarCard = ({ profile, loading, avatarRing, resume }) => {
  const cardStyle = `card shadow-lg compact bg-base-100`; // Adjust this to match your design
  const avatarStyle = `mb-8 rounded-full w-32 h-32`; // Adjust avatar size as needed
  const nameStyle = `font-bold text-2xl`; // Adjust the font size and weight as needed
  const bioStyle = `mt-3`; // Add additional styling for bio as needed
  const buttonStyle = `btn btn-primary btn-sm text-xs mt-6`; // Style this to match your design

  return (
    <div className={cardStyle}>
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className={avatarStyle}>
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: 'rounded-full',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div className={`${avatarStyle} ${avatarRing ? 'ring ring-primary ring-offset-base-100 ring-offset-2' : ''}`}>
              <LazyImage
                src={profile.avatar ? profile.avatar : fallbackImage}
                alt={profile.name}
                placeholder={skeleton({
                  width: 'w-full',
                  height: 'h-full',
                  shape: 'rounded-full',
                })}
              />
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className={nameStyle}>
            {loading || !profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              profile.name
            )}
          </h5>
          <div className={bioStyle}>
            {loading || !profile
              ? skeleton({ width: 'w-48', height: 'h-5' })
              : profile.bio}
          </div>
        </div>
        {resume?.fileUrl && !loading && (
          <a
            href={resume.fileUrl}
            target="_blank"
            className={buttonStyle}
            download
            rel="noreferrer"
          >
            Download Resume
          </a>
        )}
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
