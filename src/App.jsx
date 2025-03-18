import React from "react";
import UserCard from "./components/UserCard";

const users = Array.from({ length: 10 }, (_, index) => ({
  name: `User Name ${index + 1}`,
  email: `user${index + 1}@example.com`,
  phone: `+12345678${index + 1}`,
  address: `${index + 1} Main Street, City ${index + 1}, Country`,
  profilePhoto: "https://via.placeholder.com/80", // Placeholder profile image
}));

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px",
  padding: "16px",
};

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Cards</h1>
      <div style={gridStyle}>
        {users.map((user, index) => (
          <UserCard 
            key={index} 
            name={user.name} 
            email={user.email} 
            phone={user.phone} 
            address={user.address} 
            profilePhoto={user.profilePhoto} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;