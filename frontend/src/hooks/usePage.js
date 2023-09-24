import { useHistory, useLocation } from 'react-router-dom';

export const usePage = (defaultPage = 1) => {
  const history = useHistory();
  const location = useLocation();

  const getCurrentPage = () => {
    const searchParams = new URLSearchParams(location.search);
    return Number(searchParams.get('page')) || defaultPage;
  };

  const page = getCurrentPage();

  const setPage = newPage => {
    const currentSearchParams = new URLSearchParams(location.search);
    currentSearchParams.set('page', newPage);
    history.push(`${location.pathname}?${currentSearchParams.toString()}`);
  };

  return [page, setPage];
};
