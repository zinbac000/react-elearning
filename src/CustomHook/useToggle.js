import { useState } from 'react';

const useToggle = (initialValue) => {
  const [visible, setVisible] = useState(initialValue);

  const setVisibleOn = () => setVisible(true);

  const setVisibleOff = () => setVisible(false);

  return [visible, setVisibleOn, setVisibleOff];
};

export default useToggle;
