import { Menu } from "react-admin";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const CustomMenu = () => {
  return (
    <Menu>
      <Menu.Item
        to="/"
        primaryText="Авторизация"
        leftIcon={<AccountBoxIcon />}
      />
      <Menu.Item
        to="/files/create"
        primaryText="Загрузка изображения"
        leftIcon={<InsertPhotoIcon />}
      />
      <Menu.Item
        to="/games/list"
        primaryText="Список игр"
        leftIcon={<ListAltIcon />}
      />
      <Menu.Item
        to="/games/create"
        primaryText="Создание игры"
        leftIcon={<SportsEsportsIcon />}
      />
      <Menu.Item
        to="/services/create"
        primaryText="Создание услуги"
        leftIcon={<LocalOfferIcon />}
      />
    </Menu>
  );
};

export default CustomMenu;
