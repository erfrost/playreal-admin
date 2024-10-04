import React, { useState } from "react";
import { Create, SimpleForm, ImageInput, ImageField } from "react-admin";
import uploadImage from "../../api/files/uploadImage";

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (data) => {
    try {
      setImageUrl(await uploadImage(data.image.rawFile));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Create title="Загрузка изображения">
      <SimpleForm redirect="list" onSubmit={handleSubmit}>
        <ImageInput source="image" accept="image/*" label="Изображение">
          <ImageField source="src" title="title" />
        </ImageInput>
        {imageUrl && (
          <div>
            <h4>Изображение успешно загружено:</h4>
            <p>{imageUrl}</p>
          </div>
        )}
      </SimpleForm>
    </Create>
  );
};

export default UploadImage;
