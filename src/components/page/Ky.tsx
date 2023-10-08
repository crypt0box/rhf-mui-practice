import { useEffect } from 'react';
import { useInternalApi } from '../../hooks/useInternalApi';

export const Ky = () => {
  const { _get } = useInternalApi();
  useEffect(() => {
    (async () => {
      const res = await _get('/user').json();
      console.log('🚀 ~ file: Ky.tsx:9 ~ res:', res);
    })();
  }, []);
  return <></>;
};
