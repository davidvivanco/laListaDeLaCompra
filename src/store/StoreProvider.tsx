const { createContext } = require('react');

const StoreContext = createContext();

const StoreProvider = ({ children }: any) => {
    return (
        <StoreContext.StoreProvider value={{}}>
            {children}
        </StoreContext.StoreProvider>
    )
}

export { StoreContext };
export default StoreProvider; 