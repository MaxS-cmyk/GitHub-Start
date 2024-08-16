import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RepoList from "./components/RepoList.tsx";
import Pagination from "./components/Pagination.tsx";

import { AppDispatch, RootState } from './store/store';
import { fetchRepos, setPage } from './store/slices/githubSlice';

import './App.css';


const App: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();

    const repos = useSelector((state: RootState) => state.github.repos);
    const status = useSelector((state: RootState) => state.github.status);
    const error = useSelector((state: RootState) => state.github.error);
    const page = useSelector((state: RootState) => state.github.page);

    const totalPages = 10;

    useEffect(() => {
        dispatch(fetchRepos(page));
    }, [page, dispatch]);

    const handlePageChange = (newPage: number) => {
        dispatch(setPage(newPage));
    };

    if (status === 'failed') {
        return <div className="error">{error}</div>;
    }

    return (
        <div>
            <h1 className="title">
                Popular GitHub TypeScript Repositories
            </h1>
            <RepoList repos={repos} />
            <Pagination
                totalPages={totalPages}
                currentPage={page}
                onPageChange={handlePageChange}
            />
            {status === 'loading' && <div className="loading">Loading...</div>}
        </div>
    );
};

export default App;
