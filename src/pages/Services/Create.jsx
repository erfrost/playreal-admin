import React, { useState } from "react";
import {
  ArrayInput,
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  required,
} from "react-admin";
import Box from "@mui/material/Grid";
import createService from "../../api/services/createService";

const ServiceCreate = () => {
  const [newService, setNewService] = useState(null);

  const handleSubmit = async (payload) => {
    setNewService(await createService(payload));
  };
  console.log(newService);
  return (
    <Create title="Создание услуги">
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="game_id" label="_id игры" validate={[required()]} />
        <TextInput
          source="name"
          label="Название услуги"
          validate={[required()]}
        />
        <NumberInput
          source="basePrice"
          label="Базовая (минимальная) стоимость"
          validate={[required()]}
        />
        <NumberInput
          source="coefficientMmr"
          label="Коэффициент увеличения стоимости ммр (за каждые 2500). Я использовал 1.1"
          validate={[required()]}
        />

        <ArrayInput source="params" label="Какие то пункты на карточке товара">
          <SimpleFormIterator inline>
            <TextInput source="text" helperText={false} label="Пункт" />
          </SimpleFormIterator>
        </ArrayInput>

        <NumberInput
          source="baseMmrPrice"
          label="Базовая стоимость 1 ммр. Я использовал 2"
          validate={[required()]}
        />
        <NumberInput
          source="baseMmrDays"
          label="Базовое количество дней на 1 ммр. Я использовал 0.0035"
          validate={[required()]}
        />

        <TextInput
          source="title"
          label="SEO текст под заголовком <Описание услуги>"
          validate={[required()]}
        />

        <ImageInput
          source="backgroundCard"
          accept="image/*"
          label="Изображение для карточки"
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <ImageInput
          source="backgroundHeader"
          accept="image/*"
          label="Изображение в хедере на странице услуги"
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <ImageInput
          source="images"
          accept="image/*"
          multiple
          label="Изображения для слайдера"
        >
          <ImageField source="src" title="title" />
        </ImageInput>

        <TextInput source="requirementsTitle" label="Текст для требований" />

        <ArrayInput source="requirements" label="Требования">
          <SimpleFormIterator inline>
            <TextInput
              source="title"
              helperText={false}
              label="Заголовок требования"
            />
            <TextInput
              source="text"
              multiline
              helperText={false}
              label="Основной текст требования"
            />
          </SimpleFormIterator>
        </ArrayInput>

        <Box sx={{ display: "flex", gap: "10px" }}>
          <NumberInput
            source="min_mmr"
            validate={[required()]}
            label="Минимальное ммр"
          />
          <NumberInput
            source="max_mmr"
            validate={[required()]}
            label="Максимальное ммр"
          />
        </Box>

        <TextInput
          source="boosterLink"
          validate={[required()]}
          label="Ссылка на бустера"
        />

        <ArrayInput source="additionals" label="Платные доп услуги">
          <SimpleFormIterator inline>
            <TextInput
              source="title"
              helperText={false}
              label="Название услуги"
              validate={[required()]}
            />
            <NumberInput
              source="price"
              helperText={false}
              label="Стоимость доп услуги"
              validate={[required()]}
            />
            <NumberInput
              source="days"
              helperText={false}
              label="Срок в днях на доп услугу"
              validate={[required()]}
            />
          </SimpleFormIterator>
        </ArrayInput>

        {newService && (
          <div>
            <h4>Услуга успешно создана: </h4>
            {Object.entries(newService).map(([key, value]) => (
              <p key={key}>
                {key}: {JSON.stringify(value)}
              </p>
            ))}
          </div>
        )}
      </SimpleForm>
    </Create>
  );
};

export default ServiceCreate;
