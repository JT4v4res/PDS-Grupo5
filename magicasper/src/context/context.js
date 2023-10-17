import api from "../Componentes/apis";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState(-2);
    const [signed, setSigned] = useState(false);

    async function signIn(email, password){
        await api.post("/user/login", {
            email: email,
            senha: password,
        })
        .then((response) => {
            if (response !== undefined && response !== null) {
                setToken(response.data.access_token);
                setUserId(response.data.id);
                setSigned(true);
            } else {
                alert('Usuário não encontrado!');
            }
        })
        .catch((err) => {
            if (err.response) {
                alert(`Ocorreu um erro: ${err.response.data}`);
            } else {
                alert('Ocorreu um erro desconhecido.');
            }
        });
    }

    function logOut() {
        setToken('');
        setUserId(-2);
        setSigned(false);
    }

    return (<AuthContext.Provider value={{signed: signed, userId: userId, authToken: token, signIn, logOut}}>
        {children}
    </AuthContext.Provider>)
}