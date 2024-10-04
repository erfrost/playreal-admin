import React, { useState } from "react";
import {
  Create,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import createGame from "../../api/games/createGame";

const GameCreate = () => {
  const [newGame, setNewGame] = useState(null);

  const handleSubmit = async (payload) => {
    setNewGame(await createGame(payload));
  };

  return (
    <Create title="Создание игры">
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput
          source="title"
          label="Название игры"
          validate={[required()]}
        />
        <TextInput
          source="description"
          label="Описание игры. Находится в хедере на странице игры"
          multiline
          validate={[required()]}
        />
        <ImageInput
          source="image"
          label="Логотип игры. Желательно только png"
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        {newGame && (
          <div>
            <h4>Игра успешно создана: </h4>
            {Object.entries(newGame).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </div>
        )}
      </SimpleForm>
    </Create>
  );
};

export default GameCreate;
