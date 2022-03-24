import io from "socket.io-client";

const socketAddress = process.env.REACT_APP_SOCKET_ADDRESS as string;
export const socket = io(socketAddress);
