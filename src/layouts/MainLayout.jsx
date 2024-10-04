import { Layout } from "react-admin";
import CustomMenu from "../components/CustomMenu";

const MainLayout = ({ children }) => {
  return <Layout menu={CustomMenu}>{children}</Layout>;
};

export default MainLayout;
