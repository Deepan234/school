import { ActionTypes } from "../Action/ActionTypes";
import SchoolListing from "../Component/Pages/SchoolListing";

const initialState = {
    school: [],
    schools: [],
    user:[],
    deleteschool:[]
}

const SchoolReducers = (state = initialState, action) => {

    let newState = { ...state };
    console.log(action);
    console.log(ActionTypes.INDUIVAL_SCHOOLS === action.type)
    switch (action.type) {
        case ActionTypes.GET_SCHOOLS:

            newState.school = action.payload;

            break;

        case ActionTypes.INDUIVAL_SCHOOLS:

             console.log(action.payload);
             newState.schools = action.payload;
             console.log(newState);

             break;


        case ActionTypes.LOGIN:

             newState.user = action.payload;
             break;


        case ActionTypes.UPDATE_SCHOOL:

           newState.school = action.payload;
           break;
             
        case ActionTypes.DELETE_SCHOOL:

           newState.deleteschool = action.payload;
           break;


        case ActionTypes.ADD_SCHOOL:

        newState.school = action.payload;
        break;

        default:

            newState = state;

    }

    return newState;

}

export default SchoolReducers;