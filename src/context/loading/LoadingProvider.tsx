import { createContext, useState } from 'react';
import { LoadingContextState } from '../../shared/models/interfaces';

const LoadingContext = createContext({} as Partial<LoadingContextState>);

const LoadingProvider = ({ children }: any) => {
    const [isLoading, setLoading] = useState(false);


    return (
        <LoadingContext.Provider value={{
            isLoading,
            setLoading
        }}>
            {children}
        </LoadingContext.Provider>
    );
}

export { LoadingContext };
export default LoadingProvider; 