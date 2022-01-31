import React, { useEffect, useState } from "react";
import { AutoComplete, Radio, Select, Table } from "antd";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import * as divisionAction from "../../redux/actions/division";

import "./style.scss";
import _ from "lodash";

import { Input } from "antd";
import { useTable } from "./../../hooks/useTable";
import { useFilterData } from "./../../hooks/useFilterData";

const Index = () => {
  const dispatch = useDispatch();
  const { filterData } = useFilterData();
  const { divisions, isLoading, filteredData, setFilteredData, columns } =
    useTable();

  const [totalRecords, setTotalRecords] = useState(divisions.length);
  const [selectedColumn, setSelectedColumn] = useState("all");

  const [autocompleteOptions, setAutoCompleteOptions] = useState([]);

  useEffect(() => {
    dispatch(divisionAction.LIST_DIVISIONS_REQUESTED_ACTION());
  }, [dispatch]);

  useEffect(() => {
    let col = "name";

    switch (selectedColumn) {
      case "level":
        col = "level";
        break;
      case "parent_division":
        col = "parent_division";
        break;

      default:
        break;
    }
    const opts = [];
    let unikeValues = [];
    if (col === "parent_division") {
      unikeValues = _.uniqWith(
        filterData(divisions)((i) => i.parent_division?.name ?? "Sin asignar"),
        _.isEqual
      );
    } else {
      unikeValues = _.uniqWith(
        filterData(divisions)((i) => i[col]),
        _.isEqual
      );
    }

    unikeValues.map((val) =>
      opts.push({ label: val.text.toString(), value: val.text.toString() })
    );

    setAutoCompleteOptions(opts);
  }, [divisions, selectedColumn]);

  function onChange(pagination, filters, sorter, extra) {
    setFilteredData(filters);

    setTotalRecords(extra.currentDataSource.length);
  }

  const onSearch = (value) => {
    if (value.trim().length < 1) {
      setFilteredData(null);
    } else {
      if (selectedColumn === "all") {
        setFilteredData({ ...filteredData, name: [value] });
      } else {
        setFilteredData({ ...filteredData, [selectedColumn]: [value] });
      }
    }
  };
  return (
    <Row className="w-90 center">
      <Col span={24}>
        <div className="table-toolbar">
          <div className="left">
            <Radio.Group value="large">
              <Radio.Button value="large">Listado</Radio.Button>
              <Radio.Button value="default">Árbol</Radio.Button>
            </Radio.Group>
          </div>
          <div className="right">
            <Select
              defaultValue="all"
              onChange={(value) => {
                setSelectedColumn(value);
              }}
            >
              <Select.Option value="all">Columnas</Select.Option>
              <Select.Option value="name">División</Select.Option>
              <Select.Option value="parent_division">
                División superior
              </Select.Option>
              <Select.Option value="level">Nivel</Select.Option>
            </Select>
            <AutoComplete
              dropdownMatchSelectWidth={252}
              options={autocompleteOptions}
              onSelect={(e) => onSearch(e)}
            >
              <Input.Search
                allowClear
                placeholder="Buscar"
                onChange={(e) => onSearch(e.target.value)}
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </AutoComplete>
          </div>
        </div>
        <Table
          rowSelection
          loading={isLoading}
          columns={columns}
          dataSource={divisions}
          bordered
          rowKey={(record) => record.id}
          pagination={{
            showTotal: (total) => `Total de registros : ${total}   `,
            total: totalRecords,
          }}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default Index;
