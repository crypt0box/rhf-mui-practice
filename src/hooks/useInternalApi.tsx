import ky from 'ky';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/ky';

export const useInternalApi = () => {
  const navigate = useNavigate();

  const _get: (typeof ky)['get'] = (url, options) => {
    return api(navigate).get(url, options);
  };

  return { _get };
};
