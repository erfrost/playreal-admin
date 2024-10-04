import React from "react";
import ReactDOM from "react-dom/client";
import { Admin, Resource } from "react-admin";
import GameCreate from "./pages/Games/Create";
import restProvider from "ra-data-simple-rest";
import MainLayout from "./layouts/MainLayout";
import UploadImage from "./pages/Files/UploadImage";
import ServiceCreate from "./pages/Services/Create";
import HomePage from "./pages/Home/HomePage";
import { ToastContainer } from "react-toastify";
import GamesList from "./pages/Games/List";

const customDataProvider = (baseDataProvider) => ({
  ...baseDataProvider,

  getList: async (resource) => {
    if (resource === "games") {
      return { data: [], total: 0 };
    }

    return baseDataProvider.getList(resource);
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Admin
      layout={MainLayout}
      dashboard={HomePage}
      dataProvider={customDataProvider(
        restProvider("http://localhost:8000/api/")
      )}
    >
      <Resource name="files" create={UploadImage} />
      <Resource name="games" list={GamesList} create={GameCreate} />
      <Resource name="services" create={ServiceCreate} />
    </Admin>
    <ToastContainer />
  </>
);
