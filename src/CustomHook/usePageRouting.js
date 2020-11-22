const { alertActions } = require('core/redux/actions/alert.actions');
const { useEffect, useState } = require('react');
const { useDispatch } = require('react-redux');
const { useHistory } = require('react-router-dom');

export const usePageRouting = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    history.listen(() => {
      dispatch(alertActions.clear());
      setIsLoading(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return [isLoading];
};
