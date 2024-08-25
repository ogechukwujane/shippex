export const generateQueryString = (
  parameters: Record<string, string | number | boolean>,
) => {
  const queryStringArray = [];
  for (const key in parameters) {
    if (parameters[key] !== '') {
      queryStringArray.push(
        `${key}=${encodeURIComponent(parameters[key] as string | number)}`,
      );
    }
  }

  return `${queryStringArray.join('&')}`;
};
