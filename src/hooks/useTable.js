import { useSelector } from "react-redux";
import { PlusCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import _ from "lodash";
import { useFilterData } from "./useFilterData";
export const useTable = () => {
  const { isLoading, divisions } = useSelector(({ division }) => ({
    isLoading: division.isLoading,
    divisions: division.divisions,
  }));

  const [filteredData, setFilteredData] = useState({
    parent_division: null,
    level: null,
    name: null,
  });

  const { filterData } = useFilterData();

  const columns = [
    {
      title: "División",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      defaultSortOrder: "ascend",
      showSorterTooltip: false,
      filteredValue: filteredData?.name || null,
      filters: _.uniqWith(
        filterData(divisions)((i) => i.name),
        _.isEqual
      ),
      filterSearch: true,
      onFilter: (value, record) =>
        record.name.toLowerCase().includes(value.toLowerCase()),
     
    },
    {
      title: "División superior",
      dataIndex: "parent_division",
      key: "parent_division",
      render: (parent_division) => {
        return parent_division?.name ?? "Sin asignar";
      },
      sorter: (a, b) =>
        a.parent_division?.name.localeCompare(b.parent_division?.name),
      showSorterTooltip: false,
      filters: _.uniqWith(
        filterData(divisions)((i) => i.parent_division?.name ?? "Sin asignar"),
        _.isEqual
      ),
      filterSearch: true,
      filteredValue: filteredData?.parent_division || null,
      onFilter: (value, record) => {
        let isInclude = record.parent_division?.name
          .toLowerCase()
          .includes(value.toLowerCase());

        if (value === "Sin asignar") {
          if (isInclude === undefined) {
            return true;
          }
        }

        return isInclude;
      },
    },
    {
      title: "Colaboradores",
      dataIndex: "collaborators",
      key: "collaborators",
      sorter: (a, b) => a.collaborators - b.collaborators,
      showSorterTooltip: false,
    },
    {
      title: "Nivel",
      key: "level",
      dataIndex: "level",
      sorter: (a, b) => a.level - b.level,
      showSorterTooltip: false,
      filteredValue: filteredData?.level || null,
      filters: _.uniqWith(
        filterData(divisions)((i) => i.level),
        _.isEqual
      ).sort(function (a, b) {
        return a.text - b.text;
      }),
      filterSearch: true,

      onFilter: (value, record) => record.level === value,
    },
    {
      title: "Subdivisiones",
      key: "sub_divisions_count",
      dataIndex: "sub_divisions_count",
      render: (sub_divisions_count) => {
        return (
          <div className="subdivisiones">
            <div className="d-flex">
              <a href="#!">{sub_divisions_count}</a>

              <PlusCircleFilled className="text-success mouse" />
            </div>
          </div>
        );
      },
      sorter: (a, b) => a.sub_divisions_count - b.sub_divisions_count,
      showSorterTooltip: false,
    },
    {
      title: "Embajadores",
      key: "ambassador",
      dataIndex: "ambassador",
    },
  ];

  return {
    divisions,
    isLoading,
    columns,
    setFilteredData,
    filterData,
  };
};
