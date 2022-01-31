export const useFilterData = () => {
  const filterData = (data) => (formatter) =>
    data.map((item) => {
      let text = formatter(item);
      let value = formatter(item);

      return {
        text,
        value,
      };
    });

  return { filterData };
};
