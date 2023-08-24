import React from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom';
import StarRatingStatic from '../../../components/StarRatingStatic';

const Card = (props) => {
  const {
    projekt: { title, level, description, date, tags, link, icon , react},
  } = props;

  return (
    <li>
      <div className="m-card">
        <div className="year">
          <p>{date}</p>
        </div>
        <div className="info">
        {react?  <Link to={link}>
            <h3>
              <span>{title}</span>
              <span className="card-icon">{icon}</span>
            </h3>
            <div>
              <StarRatingStatic defaultRating={level} size={17} color="#5eead4" />
            </div>
            <p>{description}</p>
          </Link> : <a href={link}> <h3>
              <span>{title}</span>
              <span className="card-icon">{icon}</span>
            </h3>
            <div>
              <StarRatingStatic defaultRating={level} size={17} color="#5eead4" />
            </div>
            <p>{description}</p></a>}
          <div className="tag-container">
            {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
