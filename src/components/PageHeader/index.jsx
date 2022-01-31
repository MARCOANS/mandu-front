import React from "react";
import "./style.scss";
import { Button, Radio } from 'antd';
import { DownloadOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <div className="title">
          <h1>Organización</h1>
          
        </div>
        <div className="nav-page">
          <a href="#!" className="active">Divisiones</a>
          <a href="#!">Colaboradores</a>
        </div>
      </div>
      <div className="page-header-right">
      <Button type="primary" className="radius-4" icon={<PlusOutlined />}  />
      <Button className="text-blue radius-4" icon={<UploadOutlined />}  />
        <Button className="text-blue radius-4" icon={<DownloadOutlined />}  />
      </div>
    </div>
  );
};

export default PageHeader;
