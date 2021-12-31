const userReducerDefaultState = {firstName:'', lastName: '', emailId: '', gender: '', age: 0, maritalStatus: '', qualification: ''};

const userReducer = (state = userReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_FIRSTNAME':
            return {
                ...state,
                firstName: action.firstName
            };
        case 'SET_LASTNAME':
            return {
                ...state,
                lastName: action.lastName
            };
        case 'SET_EMAILID':
            return {
                ...state,
                emailId: action.emailId
            };            
        case 'SET_GENDER':
            return {
                ...state,
                gender: action.gender
            };            
        case 'SET_AGE':
            return {
                ...state,
                age: action.age
            }
        case 'SET_MARITALSTATUS':
            return {
                ...state,
                maritalStatus: action.maritalStatus
            }
        case 'SET_QUALIFICATION':
            return {
                ...state,
                qualification: action.qualification
            }        
        default:
            return state;
    }
};

export default userReducer;