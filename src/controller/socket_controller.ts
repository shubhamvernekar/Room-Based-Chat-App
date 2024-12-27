import { randomUUID } from "crypto";
import { Server } from "socket.io";

const rooms: Record<string, any> = {};

const setUpChatSocket = (io: Server): void => {
    io.on('connection', (socket: any) => {
        socket.on('create-room', () => {
            const roomId = randomUUID();
            rooms[roomId] = [{userId: socket.id}];
            socket.join(roomId);
            socket.emit('room-created', roomId);
        })
    
        socket.on('join-room', (roomId: string | number) => {
            const users = rooms[roomId];
            if(!users) {
                socket.emit('join-room', "room doesn't existes");
                return;
            }
            if(users.find((user: { userId: any; }) => user.userId === socket.id)) {
                socket.emit('join-room', "user already connected to room");
                return;
            }
            users.push({userId: socket.id});
            socket.join(roomId);
            socket.emit('join-room', "jointed to room");
        })
    
        socket.on('disconnect', () => {
            for(const roomId in rooms) {
                rooms[roomId] = rooms[roomId].filter((user: { userId: any; }) => user.userId !== socket.id);
                if(rooms[roomId].length == 0) delete rooms[roomId];
            }
            console.log("User disconnected from room ", socket.id);
            console.log("rooms ", rooms);
        })
    
        socket.on("send-message", ({ roomId, msg }: any) => {
            if(rooms[roomId]) {
                socket.to(roomId).emit('received-message', {userId: socket.id, msg});
            }
        })
    })
}

module.exports = setUpChatSocket