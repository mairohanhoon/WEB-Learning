import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { Button, Container, TextField, Typography } from "@mui/material";

function App() {
  const socket = useMemo(() => io("http://localhost:3000", {
    transports: ["websocket"],
  }), []);

  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("receive-message",(data)=>{
      console.log(data);
      
    })
    socket.on("welcome", (msg) => {
      console.log(msg);
    });

  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Welcome to Socket.io
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Type message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
}

export default App;
