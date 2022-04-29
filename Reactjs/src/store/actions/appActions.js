import actionTypes from './actionTypes';

//khong chuyen data
export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

//chuyen data
export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});

export const changeLanguageApp = (languageInput) => ({
    type: actionTypes.CHANGE_LANGUAGUE,
    language: languageInput
});