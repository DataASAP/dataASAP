import SCRIPT_10_6_Config from '../configs/SCRIPT_10_6_Config';
import fastXmlParser from 'fast-xml-parser';
var Parser = require("fast-xml-parser").j2xParser;
import _ from 'lodash';
import he from 'he';

let deidentifySCRIPT_10_6 = (input, transactionInfo) => {

    var xmlOptions = {
        attributeNamePrefix : "",
        attrNodeName: "attr", //default is 'false'
        textNodeName : "#text",
        ignoreAttributes : false,
        ignoreNameSpace : false,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        localeRange: "", //To support non english character in tag/attribute values.
        parseTrueNumberOnly: false,
        attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
        tagValueProcessor : a => he.decode(a) //default is a=>a
    };
    
    var deidentifiedData;
    if(fastXmlParser.validate(input)=== true){//optional
        
        var ind = input.indexOf('>');
        var xmlTag = "";
        if(ind > -1) {
            xmlTag = input.substring(0, ind+1);
        }
        var jsonObj = fastXmlParser.parse(input, xmlOptions);

        
        const { NewRx } = jsonObj.Message.Body;
        console.log("Json is ", NewRx);
        _.forOwn(SCRIPT_10_6_Config, function(value, key) {
            if(value.deidentify){
                // communication types can have BN|CP|FX|HP|NP|TE|WP|EM
                
                if(_.has(NewRx, value.location.dataElementId)) {
                    if(value.location.dataElementId === "Patient.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "Pharmacy.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "Prescriber.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "Supervisor.CommunicationNumbers.Communication") {
                        var comms = "";
                        switch(value.location.dataElementId) {
                            case "Patient.CommunicationNumbers.Communication":
                                var { Communication } = NewRx.Patient.CommunicationNumbers;
                                break;
                            case "Pharmacy.CommunicationNumbers.Communication":
                                var { Communication } = NewRx.Pharmacy.CommunicationNumbers;                               
                                break;
                            case "Prescriber.CommunicationNumbers.Communication":
                                var { Communication } = NewRx.Prescriber.CommunicationNumbers;
                                break;
                           case "Supervisor.CommunicationNumbers.Communication":                            
                                var { Communication } = NewRx.Supervisor.CommunicationNumbers;            
                                break;
                            default:
                                break;
                        }
                        
                        if(Communication !== "") {
                            if(Communication.hasOwnProperty('length')) {
                                comms = Communication;
                            } else {
                                comms = new Array(Communication);
                            }
                            _.forEach(comms, function(cValue, cKey) {
                                if(value.defaultValue.hasOwnProperty(cValue.Qualifier)){
                                    var newNumber = value.defaultValue[cValue.Qualifier];
                                    cValue.Number = "<span class='deid' style='background-color: white;'>" + newNumber + "</span>";
                                }
                            });
                        }
                    } else if (value.location.dataElementId === "Patient.Identification.ID" ||
                                value.location.dataElementId === "Pharmacy.Identification.ID"  ||
                                value.location.dataElementId === "Prescriber.Identification.ID" ||
                                value.location.dataElementId === "Supervisor.Identification.ID" ) {
                        var ids = "";
                        switch(value.location.dataElementId) {
                            case "Patient.Identification.ID":
                                var { ID } = NewRx.Patient.Identification;
                                break;
                            case "Pharmacy.Identification.ID":
                                var { ID } = NewRx.Pharmacy.Identification;                               
                                break;
                            case "Prescriber.Identification.ID":
                                var { ID } = NewRx.Prescriber.Identification;
                                break;
                            case "Supervisor.Identification.ID":                            
                                var { ID } = NewRx.Supervisor.Identification;         
                                break;
                            default:
                                break;
                        }
                        if(ID !== "") {

                            if(ID.hasOwnProperty('length')) {
                                ids = ID;
                            } else {
                                ids = new Array(ID);
                            }       
                            _.forOwn(ids, function(cValue, cKey) {
                                if(value.defaultValue.hasOwnProperty(cValue.IDQualifier)){
                                    var newNumber = value.defaultValue[cValue.IDQualifier];
                                    cValue.IDValue = "<span class='deid' style='background-color: white;'>" + newNumber  + "</span>";
                                }
                            });
                        }
                    } else {
                        _.set(NewRx, value.location.dataElementId, "<span class='deid' style='background-color: white;'>" + value.defaultValue + "</span>");
                    }
                }
            }
        });

        // put back into xml
        var parser = new Parser(xmlOptions);
        deidentifiedData = deidentifiedData = xmlTag + parser.parse(jsonObj);;
        
    } else {
        deidentifiedData = input;
    }
    return deidentifiedData;
}

export default deidentifySCRIPT_10_6;