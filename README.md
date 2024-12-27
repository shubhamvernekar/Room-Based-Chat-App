# Room-Based Chat App

This project is a room-based chat application built using Node.js, TypeScript, Express, and Socket.IO. It allows users to create chat rooms, join rooms using a unique room ID, and exchange messages with other users in the same room. Rooms are automatically cleaned up when all users disconnect.

## Features

- **Create Rooms**: Users can create unique chat rooms.
- **Join Rooms**: Users can join existing rooms using a room ID.
- **Real-Time Messaging**: Users can send and receive messages in real-time.
- **Room Cleanup**: Automatically deletes rooms when no users are connected.

## How It Works

1. **Creating a Room**:
   - A user creates a room, generating a unique room ID.
   - This room ID is shared with other users for them to join.

2. **Joining a Room**:
   - A user enters the room ID to join an existing room.
   - Once connected, the user can start sending and receiving messages.

3. **Messaging**:
   - Messages sent by a user are broadcast to all other users in the same room in real-time.

4. **Room Lifecycle**:
   - When all users leave a room, the room is automatically deleted.

## Tech Stack

- **Backend**: Node.js, Express, Socket.IO
- **Language**: TypeScript

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/room-based-chat-app.git
   cd room-based-chat-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript:

   ```bash
   npm run build
   ```

## Running the Application

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:3000`.

## API Endpoints

- `GET /`: Returns UI(html).

## Real-Time Communication

- **Socket Events**:
  - `create-room`: Creates a new chat room and returns the room ID.
  - `join-room`: Allows a user to join an existing room.
  - `send-message`: Broadcasts a message to all users in the room.
  - `receive-message`: Listens for incoming messages from other users in the room.

## Folder Structure

```
src/
├── server.ts           # Entry point for the application
├── controller/
│   └── socket_controller.ts         # Socket.IO logic
└── public/
│   └── index.html       # UI
└── routes
    └── chat.ts
```

## Contributing

Contributions are welcome! If you'd like to improve the project, feel free to open a pull request or raise an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Socket.IO Documentation](https://socket.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

