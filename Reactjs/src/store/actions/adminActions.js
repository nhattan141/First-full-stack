import actionTypes from './actionTypes';
import { getAllCodeService } from "../../services/userService";

// export const fetchgGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchgGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchgGenderSuccess(res.data))
            } else {
                dispatch(fetchgGenderFailed());
            }
        } catch (e) {
            dispatch(fetchgGenderFailed());
            console.log(">>>fetchgGenderStart err", e)
        }
    }

}

export const fetchgGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchgGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})