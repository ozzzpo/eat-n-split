import Button from "./UI/Button";

export default function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          Вы должны {friend.name} {Math.abs(friend.balance)}р
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} должен(-на) {Math.abs(friend.balance)}р
        </p>
      )}
      {friend.balance === 0 && <p>Вы и {friend.name} в расчёте</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Закрыть" : "Выбрать"}
      </Button>
    </li>
  );
}
