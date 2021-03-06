import {
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE,
} from "./actionType";
import axios from "axios";

export const getItem = (payload) => (dispatch) => {
    // console.log(payload.prodId);
    const item_req = get_item_request();
    dispatch(item_req);
    axios
        .get(`https://glacial-atoll-43442.herokuapp.com/${payload.prodEndpoint}/${payload.prodId}`)
        .then((resp) => {
            const item_success = get_item_success(resp.data);
            dispatch(item_success);
        })
        .catch((err) => {
            const item_error = get_item_failure();
            dispatch(item_error);
        });
};

const get_item_request = () => {
    return {
        type: GET_ITEM_REQUEST,
    };
};

const get_item_success = (payload) => {
    return {
        type: GET_ITEM_SUCCESS,
        payload,
    };
};

const get_item_failure = () => {
    return {
        type: GET_ITEM_FAILURE,
    };
};

