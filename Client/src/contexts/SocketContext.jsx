import { useContext, useEffect, useState, createContext } from 'react';
import { io } from 'socket.io-client';
const apiUrl = import.meta.env.VITE_API_URL;

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const SERVER_URL = 'https://binh-an-duoc-api.onrender.com';
  useEffect(() => {
    const socketIntance = io(SERVER_URL);
    setSocket(socketIntance);

    return () => {
      socketIntance.disconnect();
    };
  }, []);
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  return useContext(SocketContext);
};

export default SocketProvider;
