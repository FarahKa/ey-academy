//getting the results from the api

export const selectTraining = (training) => {
    // do api stuff
    return {
        type : "TRAINING_SELECTED",
        payload : training
    }
}