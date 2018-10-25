import deidentifyNCPDP_D0 from './deidentifyNCPDP_D0';
import Constants from '../configs/Constants';


const deidentifyStrategy = (data, transactionInfo) => {
    var type = transactionInfo.type + "_" + transactionInfo.version;
    switch(type){
        case Constants.NCPDP_D0:
            return deidentifyNCPDP_D0(data, transactionInfo);
        default:
            break;
    }


}
export default deidentifyStrategy;