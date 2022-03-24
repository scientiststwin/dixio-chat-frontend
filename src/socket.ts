import io from "socket.io-client";

const socketAddress = process.env.REACT_APP_SOCKET as string;
export const socket = io(socketAddress);
