import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "../App.css"

interface RepoItemProps {
    name: string;
    url: string;
    stars: number;
}

const RepoItem: React.FC<RepoItemProps> = ({ name, url, stars }) => {
    return (
        <li className="repo-item">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href={url} target="_blank" rel="noopener noreferrer" className="repo-link">
                {name}
            </a>
            <span className="stars">
                 {stars}
                <FontAwesomeIcon icon={faStar} className="star-icon" />
            </span>
        </li>
    );
};

export default RepoItem;
