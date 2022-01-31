import "./App.scss";
import { Button, Layout } from "antd";
import Header from "./components/Header/Header";
import PageHeader from "./components/PageHeader/";
import Body from "./components/Body"
function App() {
  return (
    <Layout>
      <Header></Header>
      <PageHeader></PageHeader>
      <Body></Body>
    </Layout>
  );
}

export default App;
