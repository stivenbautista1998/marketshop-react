import * as React from 'react';

const withStorageListener = (WrapperElement) => {
    return function SyncAlertWithProps(props) {
        const [ visibility, setVisibility ] = React.useState(false);

        React.useEffect(() => {
            const gettingStorageChanges = (event) => {
                // if there is a new order done or if the current user info has 
                // been changed on a new tab this will be executed.
                if(event.key === "ORDERS_V1" || event.key === "CURRENT_USER_V1") {
                    console.log(event);
                    setVisibility(true);
                }
            }

            window.addEventListener("storage", gettingStorageChanges);

            return () => {
                window.removeEventListener("storage", gettingStorageChanges);
            }
        }, []);

        function toggleSync() {
            props.synchronize(false);
            setVisibility(false);
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