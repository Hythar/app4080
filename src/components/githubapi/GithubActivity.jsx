import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './GithubActivity.css'; // Make sure to create a corresponding CSS file

const GithubActivity = ({ username }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/events`
        );
        setActivities(response.data.slice(0, 5)); // Limit to 5 activities
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub activities:', error);
        setLoading(false);
      }
    };

    fetchGithubActivity();
  }, [username]);

  return (
    <div className="github-activity">
      {loading ? (
        <div>Loading...</div>
      ) : (
        activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <div className="activity-icon">
              {/* Placeholder for activity icon */}
            </div>
            <div className="activity-info">
              <div className="activity-type">{activity.type}</div>
              <div className="activity-repo">{activity.repo.name}</div>
              <div className="activity-date">
                {new Date(activity.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

GithubActivity.propTypes = {
  username: PropTypes.string.isRequired
};

export default GithubActivity;
