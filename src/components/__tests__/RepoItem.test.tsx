import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoItem from '../RepoItem';

describe('RepoItem Component', () => {
    it('should render the repository name and stars', () => {
        render(
            <RepoItem name="Test Repo" url="#" stars={100} />
        );

        expect(screen.getByText('Test Repo')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });
});
