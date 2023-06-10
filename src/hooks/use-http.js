import { useCallback, useState } from "react";

const exampleData = {
  request: {
    url: "",
    method: "",
    headers: [{ headerKey: "" }],
    body: {},
  },
  responseCallback: (response = {}) => {},
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      options = exampleData.options,
      responseCallback = exampleData.responseCallback
    ) => {
      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch(options.url, {
          method: options.method ?? "GET",
          headers: options.headers,
          body: options.payload && JSON.stringify(options.payload),
        });

        if (!response.ok) {
          const errorData = response.text();
          const errorMessage =
            errorData ?? "Неизвестная ошибка при выполнении запроса.";
          throw new Error(errorMessage);
        }

        const data = await response.json();
        responseCallback(data);
      } catch (err) {
        setError(`Что-то пошло не так. ${err.message}`);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useHttp;
