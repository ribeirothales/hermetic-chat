import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
    },
});

export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

// store dos usuarios online  
const userSocketMap = {};

io.on("connection", (socket) => {
    console.log("Um usuário conectou", socket.id);
    const userId = socket.handshake.query.userId;
    if(userId) userSocketMap[userId] = socket.id;

    // usado pra enviar eventos para todos os usuarios conectados
    io.emit("getOnlineUsers", Object.keys(userSocketMap));


    socket.on("disconnect", () => {
        console.log("Um usuário desconectou", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };