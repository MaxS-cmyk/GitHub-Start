import React from 'react';

import RepoItem from './RepoItem';

import "../App.css"

interface Repo {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
}

interface RepoListProps {
    repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    return (
        <ul className="repo-list">
            {repos.map((repo) => (
                <RepoItem
                    key={repo.id}
                    name={repo.name}
                    url={repo.html_url}
                    stars={repo.stargazers_count}
                />
            ))}
        </ul>
    );
};

export default RepoList;
