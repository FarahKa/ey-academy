export function loading (state = false, action) {
    switch(action.type){
        case "START_LOADING":
            return true;
        case "STOP_LOADING":
            console.log("stop")
            return false;

        default:
            return state;
        
    }
}