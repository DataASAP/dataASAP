import SCRIPT_20170714_Config from '../configs/SCRIPT_20170714_Config';
import fastXmlParser from 'fast-xml-parser';
var Parser = require("fast-xml-parser").j2xParser;
import _ from 'lodash';
import he from 'he';
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

        const rootNode = Object.keys(jsonObj.Message.Body);
        if (rootNode.length === 1) {
            const transaction = jsonObj.Message.Body[rootNode];
        }
        _.forOwn(SCRIPT_20170714_Config, function(value, key) {
            if(value.deidentify){
                if(_.has(transaction, value.location.dataElementId)) {
                
                }
                else {
                    _.set(transaction, value.location.dataElementId, "<span class='deid' style='background-color: white;'>" + value.defaultValue + "</span>");
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