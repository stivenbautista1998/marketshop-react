import * as React from 'react';
import { useNavigate } from "react-router-dom";

const withStorageListener = (WrapperElement) => {
    return function SyncAlertWithProps(props) {
        const [ visibility, setVisibility ] = React.useState(false);
        const [ cacheInfo, setCacheInfo ] = React.useState({ key: "", newValue: "" });
        let navigation = useNavigate();

        React.useEffect(() => {
            const gettingStorageChanges = (event) => {
                // if there is a new order done or if the current user info has 
                // been changed on a new tab this will be executed.
                const { key, newValue } = event;
                if(key === "ORDERS_V1" || key === "CURRENT_USER_V1") {
                    console.log(event);
                    setVisibility(true);
                    setCacheInfo({ key, newValue });
                }
            }

            window.addEventListener("storage", gettingStorageChanges);

            return () => {
                window.removeEventListener("storage", gettingStorageChanges);
            }
        }, []);

        function toggleSync() {
            if(cacheInfo.key === "ORDERS_V1") {
                props.synchronize(false);
                setVisibility(false);
            };
            if(cacheInfo.key === "CURRENT_USER_V1") {
                props.setSyncAuth(false);
                setVisibility(false);
                if(JSON.parse(cacheInfo.newValue) === null) {
                    navigation("/login", { replace: true });
                }
            };
        }

        return (
            <WrapperElement 
                showElement={visibility} 
                onCLickHandler={toggleSync} 
            />
        );
    }
};

export default withStorageListener;