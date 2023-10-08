import ky from 'ky';

export const useInternalApi = () => {
  const api = ky.create({
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

  const _get: (typeof ky)['get'] = (url, options) => {
    return api.get(url, options);
  };

  return { _get };
};
