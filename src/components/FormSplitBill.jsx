import { useEffect, useState } from "react";
import Button from "./UI/Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  useEffect(() => {
    setBill("");
    setPaidByUser("");
  }, [selectedFriend]);

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Раздельный счёт: Вы и {selectedFriend.name}</h2>

      <label>💰 Сумма счёта</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🚶‍♂️ Сколько потратили вы</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>💁‍♂️ Сколько потратил {selectedFriend.name}</label>
      <input disabled type='text' value={paidByFriend} />

      <label>🤑 Кто платит?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>Вы</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button type='submit'>Разделить счёт!</Button>
    </form>
  );
}
