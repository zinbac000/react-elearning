import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default () => {
  const { modeParams } = useParams();

  const [mode, setMode] = useState(modeParams === 'signin' ? true : false);

  const history = useHistory();

  const handleToSignup = () => {
    setMode(false);
    history.replace('/auth/signup');
  };

  const handleToSignin = () => {
    setMode(true);
    history.replace('/auth/signin');
  };

  const exports = {
    mode,
    handleToSignup,
    handleToSignin,
  };

  return exports;
};
