import {getBlob, ref} from "firebase/storage";

function loadFromStore(setBody: Function, storeRef: any, path: string, ){
    setBody("Loading..");
    let R: FileReader = new FileReader();
    getBlob(ref(storeRef, path))
        .then((blob:Blob) =>{
            R.readAsText(blob);
            R.onloadend = () => {
                setBody(R.result as string);
            }
        })
        .catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    setBody("No file in database yet.");
                    break;
                default:
                    setBody("An unknown error occurred.");
            }
        })
    return null;
}

export default loadFromStore;