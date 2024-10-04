import Box from "@mui/system/Box";
import { PasswordInput, SimpleForm, TextInput, required } from "react-admin";
import signIn from "../../api/auth/signIn";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("playreal_admin_access_token");
    if (accessToken) setIsAuthorized(true);
  }, []);

  const handleSubmit = async (payload) => {
    const res = await signIn(payload);
    console.log("res: ", res);
    if (res) setIsAuthorized(true);
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {isAuthorized && <span>Вы авторизованы</span>}
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="email" validate={[required()]} />
        <PasswordInput source="password" validate={[required()]} />
      </SimpleForm>
    </Box>
  );
};

export default HomePage;
