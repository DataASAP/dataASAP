import SCRIPT_20170714_Config from '../configs/SCRIPT_20170714_Config';
import fastXmlParser from 'fast-xml-parser';
var Parser = require("fast-xml-parser").j2xParser;
import _ from 'lodash';
import he from 'he';
import Store from '../../main/Store';
const storeName = "SCRIPT_20170714";

let deidentifySCRIPT_20170714 = (input, transactionInfo) => {

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
        attrValueProcessor: a => he.decode(String(a), {isAttributeValue: true}),//default is a=>a
        tagValueProcessor : a => he.decode(String(a)) //default is a=>a
    };

    var config;

    const store = new Store({
        configName : 'user-preferences',
        content: {},
        domain: "ncpdp"
    });

    var deidentifiedData;
    if(fastXmlParser.validate(input)=== true){//optional
        var ind = input.indexOf('>');
        var xmlTag = "";
        if(ind > -1) {
            xmlTag = input.substring(0, ind+1);
        }
        var jsonObj = fastXmlParser.parse(input, xmlOptions);
        var header= fastXmlParser.parse(input, xmlOptions);

        // you have to deal with the below
        const headerNode = jsonObj.Message.Header;
    
        console.log("header is ", header);
        const bodyNode = Object.keys(jsonObj.Message.Body);
        var transaction = "";
        if (bodyNode.length === 1) {
            transaction = jsonObj.Message.Body[bodyNode];
        }

        config = SCRIPT_20170714_Config;
        // you need to find the config file in the store

        if(store.exists() && store.get(storeName) != null) {
            config = store.get(storeName);
        } 
        _.forOwn(config, function(value, key) {
            if(value.deidentify){
                var node;
                if(_.has(transaction, value.location.dataElementId)) {
                    node = transaction[value.location.dataElementId];
                    // the below check is needed to determin if the node contains attributes, if it does
                    // you just want to update the #text component
                    if(typeof(node) === 'object') {
                        _.set(node, '#text', "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");
                        _.set(transaction, value.location.dataElementId, node);                        
                    } else {
                        _.set(transaction, value.location.dataElementId, "<span class='deid' style='background-color: white;'>" + value.defaultValue.substring(0,value.maxFieldLength) + "</span>");                        
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

export default deidentifySCRIPT_20170714;