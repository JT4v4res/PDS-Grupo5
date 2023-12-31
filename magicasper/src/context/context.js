import api from "../Componentes/apis";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    // const storedToken = localStorage.getItem('token');
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [signed, setSigned] = useState(false);

    async function signIn(email, password){
        await api.post("/user/login", {
            email: email,
            senha: password,
        })
        .then((response) => {
            console.log("response", response)
            if (response !== undefined && response !== null) {
                localStorage.setItem('token', response.data.access_token);
                setToken(response.data.access_token);
                setUserId(response.data.id);
                setSigned(true);
            } else {
                console.error('Usuário não encontrado!');
            }
        })
        .catch((err) => {
            if (err.response) {
                console.error(`Ocorreu um erro: ${err.response.data}`);
            } else {
                console.error('Ocorreu um erro desconhecido.');
            }
        });
    }

    function logOut() {
      //Remova o token do localStorage ao fazer logout
      localStorage.removeItem('token');

      setToken('');
      setUserId('');
      setSigned(false);
    }

    return (<AuthContext.Provider value={{signed: signed, userId: userId, authToken: token, signIn, logOut}}>
        {children}
    </AuthContext.Provider>)
}