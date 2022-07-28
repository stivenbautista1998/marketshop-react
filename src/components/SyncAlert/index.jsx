import React from 'react';
import withStorageListener from './withStorageListener';
import { Modal } from '../Modal';
import './SyncAlert.css';

import refreshIconSvg from '@icons/refresh-icon.svg';

const SyncAlert = ({ showElement, onCLickHandler }) => {
    if(showElement) {
        return (
            <Modal>
                <div className="sync-alert-wrapper">
                    <div className="sync-alert-text">There are new changes.</div>
                    <button onClick={onCLickHandler} className="sync-alert-wrapper__button">
                        <img className="refresh-icon" src={refreshIconSvg} alt="refresh icon" />
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

export { SyncAlertWithProps }; // <br />