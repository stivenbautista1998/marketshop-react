import React from 'react';
import withStorageListener from './withStorageListener';
import { Modal } from '../Modal';
import './SyncAlert.css';

const SyncAlert = ({ showElement, onCLickHandler }) => {
    if(showElement) {
        return (
            <Modal>
                <div className="sync-alert-wrapper">
                    There are new changes.<br />
                    <button onClick={onCLickHandler} className="sync-alert-wrapper__button">
                        Synchronize
                    </button>
                </div>
            </Modal>
        );
    } else {
        return null;
    }
};

const SyncAlertWithProps = withStorageListener(SyncAlert);

export { SyncAlertWithProps };