import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  if (!friends.length)
    return <h2 style={{ padding: "20px" }}>Начните добавлять друзей!</h2>;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
