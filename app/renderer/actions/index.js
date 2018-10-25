import { ADD_FILE, ADD_FILES, REMOVE_FILE, REMOVE_ALL_FILES, FILE_PROGRESS, FILE_COMPLETE } from "./types";

// TODO: Communicate to MainWindow process that files
// have been added and are pending conversion
export const addFiles = files => dispatch => {

};


// TODO: Communicate to MainWindow that the user wants
// to start converting files.  Also listen for feedback
// from the MainWindow regarding the current state of
// conversion.
export const convertFiles = () => (dispatch, getState) => {

};

// TODO: Open the folder that the newly created file
// exists in
// TODO: Open the folder that the newly created video
// exists in
//export const showInFolder = (outputPath) => dispatch => {
//    console.log("Calling showInFolder with ", outputPath);
//    ipcRenderer.send('folder:open', outputPath);
//  };

export const addFile = file => {
  return {
    type: ADD_FILE,
    payload: { ...file }
  };
};

export const setFormat = (file, format) => {
  return {
    type: ADD_FILE,
    payload: { ...file, format, err: "" }
  };
};

export const removeFile = file => {
  return {
    type: REMOVE_FILE,
    payload: file
  };
};

export const removeAllFiles = () => {
  return {
    type: REMOVE_ALL_FILES
  };
};
