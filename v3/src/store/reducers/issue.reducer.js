import produce from "immer";
import { normalizeLevel1 } from "../json.normalizr";
import {
    ISSUE_ADD_SUCCESS,
    ISSUE_LIST_SUCCESS,
    ISSUE_GET_SUCCESS,
    ISSUE_CLEAR
} from "../action.types";

const initialState = {
    list: null,
    lastCreated: null,
    current: null
};

const onIssueAdd = (state, { issue }) => {
    state.lastCreated = issue;
};

const onIssueGet = (state, { issue }) => {
    state.current = issue;
};

const onIssueList = (state, { issues }) => {
    state.list = normalizeLevel1(issues, { entity: "issues" });
};

const onIssueClear = state => {
    state.current = null;
};

export default produce((state = initialState, { type, data }) => {
    switch (type) {
        case ISSUE_ADD_SUCCESS:
            return onIssueAdd(state, data);
        case ISSUE_GET_SUCCESS:
            return onIssueGet(state, data);
        case ISSUE_LIST_SUCCESS:
            return onIssueList(state, data);
        case ISSUE_CLEAR:
            return onIssueClear(state);
        default:
            return state;
    }
});
