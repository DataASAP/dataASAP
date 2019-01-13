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
        const bodyNode = Object.keys(jsonObj.Message.Body);        
        const headerNode = jsonObj.Message.Header;
        var transaction = "";
        if (bodyNode.length === 1) {
            transaction = jsonObj.Message.Body[bodyNode];
        }
 
        function deid(dataset) {
            var node;
            _.forOwn(SCRIPT_10_6_Config, function(value, key) {
                if(value.deidentify){
                
                    if(_.has(dataset, value.location.dataElementId)) {
                        if(value.location.dataElementId === "MedicationDispensed.Pharmacy.CommunicationNumbers.Communication" ||
                            value.location.dataElementId === "MedicationDispensed.Prescriber.CommunicationNumbers.Communication" ) { 
                                var comms = "";
                                switch(value.location.dataElementId) {
                                    case "MedicationDispensed.Pharmacy.CommunicationNumbers.Communication":
                                    var { Communication } = dataset.MedicationDispensed.Pharmacy.CommunicationNumbers;                             
                                    break;

                                    case "MedicationDispensed.Prescriber.CommunicationNumbers.Communication":
                                        var { Communication } = dataset.MedicationDispensed.Prescriber.CommunicationNumbers;           
                                        break;
                                    default:
                                        break;
                                }

                                if(Communication !== "" && Communication.hasOwnProperty('length')) {
                                    comms = Communication;
                                } else {
                                    comms = new Array(Communication);
                                }
                                _.forEach(comms, function(cValue, cKey) {
                                    if(value.defaultValue.hasOwnProperty(cValue.Qualifier)){
                                        var newNumber = value.defaultValue[cValue.Qualifier].substring(0, value.maxFieldLength);
                                        cValue.Number = "<span class='deid' style='background-color: white;'>" + newNumber + "</span>";
                                    }
                                });
                                
                        } else if(value.location.dataElementId === "MedicationDispensed.Pharmacy.Identification.ID" ||
                            value.location.dataElementId === "MedicationDispensed.Prescriber.Identification.ID") { 
                            var ids = "";
                            switch(value.location.dataElementId) {
                                case "MedicationDispensed.Pharmacy.Identification.ID": 
                                    var { ID } = dataset.MedicationDispensed.Pharmacy.Identification;
                                break;

                                case "MedicationDispensed.Prescriber.Identification.ID": 
                                    var { ID } = dataset.MedicationDispensed.Prescriber.Identification;
                                    break;
                                default:
                                    break;
                            }

                            if(ID !== "" && ID.hasOwnProperty('length')) {
                                ids = ID;
                            } else {
                                ids = new Array(ID);
                            }
                        
                            _.forOwn(ids, function(cValue, cKey) {
                                if(value.defaultValue.hasOwnProperty(cValue.IDQualifier)){
                                    var newNumber = value.defaultValue[cValue.IDQualifier].substring(0, value.maxFieldLength);
                                    cValue.IDValue = "<span class='deid' style='background-color: white;'>" + newNumber  + "</span>";
                                }
                            });

                        } else {
                            node = dataset[value.location.dataElementId];
                            if(typeof(node) === 'object') {
                                _.set(node, '#text', "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");
                                _.set(dataset, value.location.dataElementId, node);
                            } else {
                                _.set(dataset, value.location.dataElementId, "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");                        
                            }
                        }
                    }
                }
            });
        }


        _.forEach(transaction, function(value, key) {
            if(value.hasOwnProperty('length')) {
                var obj={};
                obj[key] =  value;
                _.forEach(obj[key], function(v, k){
                    var tObj ={};
                    tObj[key]=v;
                    deid(tObj);
                })
            }

        });

        _.forOwn(SCRIPT_10_6_Config, function(value, key) {
            var node;
            if(value.deidentify){
               
                // need to see if it's an object or array, like medicationPrescribed, maybe u just deal with Medicatino Prescribed
                if(_.has(transaction, value.location.dataElementId)) {
                    if(value.location.dataElementId === "Patient.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "Pharmacy.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "Prescriber.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "Supervisor.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "MedicationDispensed.Pharmacy.CommunicationNumbers.Communication" ||
                        value.location.dataElementId === "MedicationDispensed.Prescriber.CommunicationNumbers.Communication") {
                        var comms = "";
                        switch(value.location.dataElementId) {
                            case "Patient.CommunicationNumbers.Communication":
                                var { Communication } = transaction.Patient.CommunicationNumbers;
                                break;
                            case "Pharmacy.CommunicationNumbers.Communication":                          
                                var { Communication } = transaction.Pharmacy.CommunicationNumbers;                               
                                break;
                            case "Prescriber.CommunicationNumbers.Communication":
                                var { Communication } = transaction.Prescriber.CommunicationNumbers;
                                break;
                           case "Supervisor.CommunicationNumbers.Communication":                            
                                var { Communication } = transaction.Supervisor.CommunicationNumbers;            
                                break;
                            case "MedicationDispensed.Pharmacy.CommunicationNumbers.Communication":
                                var { Communication } = transaction.MedicationDispensed.Pharmacy.CommunicationNumbers;            
                                break;

                            case "MedicationDispensed.Prescriber.CommunicationNumbers.Communication":
                                var { Communication } = transaction.MedicationDispensed.Prescriber.CommunicationNumbers;            
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
                                    var newNumber = value.defaultValue[cValue.Qualifier].substring(0, value.maxFieldLength);
                                    cValue.Number = "<span class='deid' style='background-color: white;'>" + newNumber + "</span>";
                                }
                            });
                        }
                    } else if (value.location.dataElementId === "Patient.Identification.ID" ||
                                value.location.dataElementId === "Pharmacy.Identification.ID"  ||
                                value.location.dataElementId === "Prescriber.Identification.ID" ||
                                value.location.dataElementId === "Supervisor.Identification.ID" || 
                                value.location.dataElementId === "BenefitsCoordination.PayerIdentification" ||
                                value.location.dataElementId === "MedicationDispensed.Pharmacy.Identification.ID" ||
                                value.location.dataElementId === "MedicationDispensed.Prescriber.Identification.ID") {
                        var ids = "";
                        switch(value.location.dataElementId) {
                            case "Patient.Identification.ID":
                                var { ID } = transaction.Patient.Identification;
                                break;
                            case "Pharmacy.Identification.ID":
                                var { ID } = transaction.Pharmacy.Identification;                               
                                break;
                            case "Prescriber.Identification.ID":
                                var { ID } = transaction.Prescriber.Identification;
                                break;
                            case "Supervisor.Identification.ID":                            
                                var { ID } = transaction.Supervisor.Identification;         
                                break;
                            case "BenefitsCoordination.PayerIdentification":
                                var { ID } = transaction.BenefitsCoordination.PayerIdentification;
                                break;
                            case "MedicationDispensed.Pharmacy.Identification.ID":
                                var { ID } = transaction.MedicationDispensed.Pharmacy.Identification;
                                break;
                            case "MedicationDispensed.Prescriber.Identification.ID":
                                var { ID } = transaction.MedicationDispensed.Prescriber.Identification;
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
                                    var newNumber = value.defaultValue[cValue.IDQualifier].substring(0, value.maxFieldLength);
                                    cValue.IDValue = "<span class='deid' style='background-color: white;'>" + newNumber  + "</span>";
                                }
                            });
                        }
                    } else {
                        node = transaction[value.location.dataElementId];
                        // the below check is needed to determin if the node contains attributes, if it does
                        // you just want to update the #text component
                        if(typeof(node) === 'object') {
                            _.set(node, '#text', "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");
                            _.set(transaction, value.location.dataElementId, node);                        
                        } else {
                            if(typeof(value.defaultValue) !== 'string'){
                            }
                            else
                                _.set(transaction, value.location.dataElementId, "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");                        
                        }    
                    }
                } else if(_.has(headerNode, value.location.dataElementId)) {
                    node = headerNode[value.location.dataElementId];
                    if(typeof(node) === 'object') {
                        _.set(node, '#text', "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");
                        _.set(headerNode, value.location.dataElementId, node);
                    } else {
                        _.set(headerNode, value.location.dataElementId, "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");
                    }
                }
            }
        });

        // put back into xml
        var parser = new Parser(xmlOptions);
        deidentifiedData = deidentifiedData = xmlTag + parser.parse(jsonObj);
        
    } else {
        deidentifiedData = input;
    }
    return deidentifiedData;
}

export default deidentifySCRIPT_10_6;