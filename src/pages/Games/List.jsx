import { useEffect, useState } from "react";
import getAllGames from "../../api/games/getAllgames";
import Box from "@mui/system/Box";

const GamesList = () => {
  const [games, setGames] = useState([]);

  // Получаем все доступные игы при монтировании компонента
  useEffect(() => {
    (async () => {
      setGames(await getAllGames());
    })();
  }, []);

  if (!games.length) return null;

  return (
    <div>
      <h3>Список Игр:</h3>

      {games.map((game) => (
        <Box
          display="flex"
          flexDirection="column"
          gap="25px"
          padding="25px 0"
          bordeTop="1px solid white"
          borderBottom="1px solid white"
          key={game._id}
        >
          <span style={{ fontSize: "24px" }}>_id: {game._id}</span>
          <span style={{ fontSize: "24px" }}>title: {game.title}</span>
          <span>description: {game.description || "Пусто"}</span>
          <img style={{ maxWidth: "250px" }} src={game.image} alt="image" />
        </Box>
      ))}
    </div>
  );
};

export default GamesList;
