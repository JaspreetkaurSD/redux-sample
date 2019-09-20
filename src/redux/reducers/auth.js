export default function reducer(state = {
    auth: null,
    loading: false,
    error: null
}, action) {
    
    switch (action.type) {

        case 'AUTH_PENDING':
            return { ...state, loading: true, error: null, auth: null };
        case 'AUTH_FULLFILLED':
            return { ...state, auth: action.response, loading: false }
        case 'AUTH_REJECTED':
            return { ...state, error: action.error, loading: false }
            
        default: 
            return state;
    }
  }