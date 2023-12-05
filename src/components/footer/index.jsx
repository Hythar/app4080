import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const Footer = ({ content, loading }) => {
  if (!content) return null;

  const footerStyle = {
    backgroundColor: '#1A1A1D', // Dark background for a sleek look
    color: '#00FFC6', // Neon-like text color
    padding: '20px',
    fontSize: '14px',
    borderTop: '1px solid #00FFC6', // Neon-like border top
    textAlign: 'center',
    letterSpacing: '1px',
    fontFamily: '"Roboto", sans-serif', // Modern font
  };

  const glowingEffect = {
    textShadow: '0 0 10px #00FFC6, 0 0 20px #00FFC6, 0 0 30px #00FFC6, 0 0 40px #00FFC6',
  };

  return (
    <div className="card-body" style={footerStyle}>
      {loading ? (
        skeleton({ width: 'w-52', height: 'h-6' })
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} style={glowingEffect} />
      )}
    </div>
  );
};

Footer.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Footer;
