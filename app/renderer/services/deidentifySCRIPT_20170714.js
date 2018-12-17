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


}

export default deidentifySCRIPT_20170714;