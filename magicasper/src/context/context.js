import api from "../Componentes/apis";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [signed, setSigned] = useState(false);
    const [userType, setUserType] = useState('');

    async function signIn(email, password){
        await api.post("api-casper:8080/auth", {
            email: email,
            password: password,
        })
        .then((response) => {
            if (response !== undefined && response !== null) {
                setToken(response.data.token);
                setUser(response.data.user);
                setUserType(response.data.userType);
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
        setUser('');
        setUserType('');
        setSigned(false);
    }

    return (<AuthContext.Provider value={{signed: signed, user, authToken: token, signIn, logOut, userType: userType}}>
        {children}
    </AuthContext.Provider>)
}