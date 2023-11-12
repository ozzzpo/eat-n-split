import { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "./UI/Button";

export default function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !image) return;

    const id = uuid();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>💁‍♂️Имя друга</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌆Ссылка на картинку</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button type='submit'>Добавить</Button>
    </form>
  );
}
