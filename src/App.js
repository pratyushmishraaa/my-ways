// client/src/App.js
import React from 'react';
import ChatRoom from "./components/ChatRoom.js"
import KanbanBoard from './components/KanbanBoard.js';

function App() {
  return (
    <div>

      <ChatRoom />
      <KanbanBoard />
    </div>
  );
}

export default App;
