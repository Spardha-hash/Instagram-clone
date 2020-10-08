import React,{createContext} from 'react'
export const ContextProvider= createContext();

const Context = (props) => {
    const [model, setModel] = React.useState(false)
    const openModel = () =>{
        setModel(true);
    };
    const closeModel = () => {
        setModel(false);
    };
    return (
        <ContextProvider.Provider value={{model, openModel, closeModel}}>
            {props.children}
        </ContextProvider.Provider>
    )
}

export default Context;
