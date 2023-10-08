import ky from 'ky';
import { NavigateFunction } from 'react-router-dom';

export const api = (navigate: NavigateFunction) =>
  ky.create({
    hooks: {
      beforeError: [
        (error) => {
          const { response } = error;
          if (response && response.body) {
            error.name = 'GitHubError';
            error.message = `${response.body} (${response.status})`;
          }

          return error;
        },
      ],
    },
  });
