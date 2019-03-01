import React from 'react';
import './style.scss';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <span className="user-info__title">
        Info about {props.data.name}:
      </span>
      <ul className="user-info__list">
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Birth year:</span> {props.data.birth_year}
        </li>
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Gender:</span> {props.data.gender}
        </li>
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Height:</span> {props.data.height}
        </li>
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Mass:</span> {props.data.mass}
        </li>
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Hair color:</span> {props.data.hair_color}
        </li>
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Skin color:</span> {props.data.skin_color}
        </li>
        <li className="user-info__list-item">
          <span className="user-info__text-highlight">Eyes color:</span> {props.data.eye_color}
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;