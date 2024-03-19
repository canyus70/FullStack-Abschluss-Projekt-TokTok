import { useEffect, useState } from "react";
import { doSilentRefresh, silentRefreshLoop } from "../../utils/token.js";
import { Navigate, useLocation } from "react-router-dom";

const LoadingWrapper = ({ authorization, saveAuthorization, children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation(); // Verschoben innerhalb der Komponente

    useEffect(() => {
        async function tryRefreshToken() {
            if (!isLoading || authorization) {
                setIsLoading(false);
                return;
            }
            console.log("trying to refresh token");
            try {
                const accessToken = await doSilentRefresh();
                const newAuthorization = `Bearer ${accessToken}`; // Verändert für Klarheit
                saveAuthorization(newAuthorization);
                setIsLoading(false);

                silentRefreshLoop(accessToken, (newAccessToken) => {
                    const loopAuthorization = `Bearer ${newAccessToken}`;
                    saveAuthorization(loopAuthorization);
                });
            } catch (error) {
                console.log("Fehler im LW", error);
                setIsLoading(false);
            }  
        }

        tryRefreshToken();
    }, [authorization, isLoading, saveAuthorization]); // Überprüfe, ob du diese Abhängigkeiten wirklich hinzufügen möchtest

    if (isLoading) {
        return <p>Loading...</p>;
    } else if (authorization) {
        return <>{children}</>;
    } else {
        return location.pathname === "/" ? <>{children}</> : <Navigate to={"/signin"} />; // Geändert zu "/signin"
    }
};

export default LoadingWrapper;
