export default function reducer(state = {
    response: null,
    loading: false,
    error: null
}, action) {
    
    switch (action.type) {

        case 'SETTING_PENDING':
            return { ...state, loading: true, error: null, response: null };
        case 'SETTING_FULLFILLED':
            return { ...state, response: action.response, loading: false }
        case 'SETTING_REJECTED':
            return { ...state, error: action.error, loading: false }
            
        default: 
            return state;
    }
  }