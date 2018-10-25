import NCPDP_D0_Config from '../configs/NCPDP_D0_Config';
import _ from 'lodash';

let deidentifyNCPDP_D0 = (input, transactionInfo) => {
    const { segmentSeparator, fieldSeparator, groupSeparator } = transactionInfo;

    var highlightedHeader = "";
    var segmentsObject = {};

    // remove any HTML characaters
    var stripedHtml = input.replace(/<[^>]+>/g, "");
    
    // remove any leading control characters, e.g. stx; 
    // but do not strip out control characters x1C-x1E, hence the gap
    var data = stripedHtml.replace(/[\x00-\x1B\x7F-\x9F]/g, "");

    var segments = data.split(segmentSeparator);   
    // Creates segmentsObject
    for(var i = 0; i < segments.length; i++) {
        var key;
        var start = 1;
        if(i === 0){
            key = "HEADER"
            start = 0; // this is to deal with the fact that the header doesn't have an segment or field separator in its first position
            highlightedHeader = segments[i].substring(start,segments[i].length) + segmentSeparator + fieldSeparator;
        } else {
            key = segments[i].substring(1,5);
        }
        var segment = segments[i].substring(start,segments[i].length) + segmentSeparator + fieldSeparator;

        if(segmentsObject.hasOwnProperty(key))
        {
            segmentsObject[key].segments.push({"segment" : segment, "order": i});
        } else {
            segmentsObject[key] = {segments: [{segment, order: i}]};
        }
    }
    
    
    _.forOwn(NCPDP_D0_Config, function(value, key) { 
        
        if(value.deidentify){
            var segment_1, modifiedSegment;
            var originalData;
            var newData;

            if(segmentsObject.hasOwnProperty(value.location.segment)) {
                const { segments } = segmentsObject[value.location.segment];
                for(var n = 0; n < segments.length; n++) {
                    segment_1 =  segments[n].segment;
                    if(value.location.segment === "HEADER") {
                        if(transactionInfo.isRequest){            
                            switch(value.location.dataElementId) {
                                case "A1":
                                    originalData = segment_1.substring(0,6);
                                    if(value.defaultValue.length > 6) 
                                        newData = value.defaultValue.substring(0,6);
                                    else 
                                        newData = value.defaultValue.padStart(6,'0');
                                    break;
                                case "A2":
                                    originalData = segment_1.substring(6,8);
                                    if(value.defaultValue.length > 2)
                                        newData = value.defaultValue.substring(0,2);
                                    else 
                                        newData = value.defaultValue.padEnd(2," ");
                                    break;
                                case "A3":
                                    originalData = segment_1.substring(8,10);
                                    if(value.defaultValue.length > 2)
                                        newData = value.defaultValue.substring(0,2);
                                    else 
                                        newData = value.defaultValue.padEnd(2," ");
                                    break;
                                case "A4":
                                    originalData = segment_1.substring(10,20);
                                    if(value.defaultValue.length > 10) 
                                        newData = value.defaultValue.substring(0,10);
                                    else 
                                        newData = value.defaultValue.padEnd(10," ");
                                    break;
                                case "A9":
                                    originalData = segment_1.substring(20,21);
                                    if(value.defaultValue.length > 1)
                                    newData = value.defaultValue.substring(0,1);
                                        else 
                                        newData = value.defaultValue.padEnd(1," ");
                                    break;
                                case "B2":
                                    originalData = segment_1.substring(21,23);
                                    if(value.defaultValue.length > 2)
                                    newData = value.defaultValue.substring(0,2);
                                    else 
                                        newData = value.defaultValue.padEnd(2," ");
                                    break;
                                case "B1":
                                    originalData = segment_1.substring(23,38);
                                    if(value.defaultValue.length > 15) 
                                        newData = value.defaultValue.substring(0,15);
                                    else 
                                        newData = value.defaultValue.padEnd(15," ");
                                    break;
                                case "D1":
                                    originalData = segment_1.substring(38, 46);
                                    if(value.defaultValue.length > 8)
                                        newData = value.defaultValue.substring(0,8);
                                    else 
                                        newData = value.defaultValue.padEnd(8," ");
                                    break;
                                case "AK":
                                    originalData = segment_1.substring(46,56);
                                    if(value.defaultValue.length > 10)
                                        newData = value.defaultValue.substring(0,10);
                                    else 
                                        newData = value.defaultValue.padEnd(10," ");
                                    break;
                                default:
                                    break;
                            }
                            
                            highlightedHeader = highlightedHeader.replace(originalData, "<span class='deid' style='background-color: white;'>" + newData + "</span>");
                            modifiedSegment = segment_1.replace(originalData,newData);
                            segments[n].segment = modifiedSegment;
                        } else { 
                            // it's a response
                            switch(value.location.dataElementId) {
                                case "A2":
                                    originalData = segment_1.substring(0, 2);
                                    if(value.defaultValue.length > 2)
                                        newData = value.defaultValue.substring(0,2);
                                    else 
                                        newData = value.defaultValue.padEnd(2," ");
                                    break;
                                case "A3":
                                    originalData = segment_1.substring(2,4);
                                    if(value.defaultValue.length > 2)
                                        newData = value.defaultValue.substring(0,2);
                                    else 
                                        newData = value.defaultValue.padEnd(2," ");
                                break;
                                case "A9":
                                    originalData = segment_1.substring(4,5);
                                    if(value.defaultValue.length > 1)
                                    newData = value.defaultValue.substring(0, 1);
                                        else 
                                        newData = value.defaultValue.padEnd(1," ");
                                    break;
                                case "F1":
                                    originalData = segment_1.substring(5, 6);
                                    if(value.defaultValue.length > 1)
                                    newData = value.defaultValue.substring(0, 1);
                                    else 
                                        newData = value.defaultValue.padEnd(1," ");
                                    break;
                                case "B2":
                                    originalData = segment_1.substring(6, 8);
                                    if(value.defaultValue.length > 2)
                                        newData = value.defaultValue.substring(0,2);
                                    else 
                                        newData = value.defaultValue.padEnd(2," ");
                                    break;
                                case "B1":
                                    originalData = segment_1.substring(8, 23);
                                    if(value.defaultValue.length > 15) 
                                        newData = value.defaultValue.substring(0,15);
                                    else 
                                        newData = value.defaultValue.padEnd(15," ");
                                    break;
                                case "D1":
                                    originalData = segment_1.substring(23,31);
                                    if(value.defaultValue.length > 8)
                                        newData = value.defaultValue.substring(0,8);
                                    else 
                                        newData = value.defaultValue.padEnd(8," ");
                                    break;
                                default:
                                    break;                                    
                            }
                            highlightedHeader = highlightedHeader.replace(originalData, "<span class='deid' style='background-color: white;'>" + newData + "</span>");
                            modifiedSegment = segment_1.replace(originalData, newData);
                            segments[n].segment = modifiedSegment;            
                        } 
                    } else { // It's not a header
                        var deIndex = segment_1.indexOf(fieldSeparator + value.location.dataElementId);
                        if(deIndex !== -1) {
                            // find the ending position of the data field; i.e. postion of the next fieldSeparator
                            var nextIndex = segment_1.indexOf(fieldSeparator, deIndex + 1);
    
                            // check the the previous fields are either segmentSeparator or groupSeparator, we want to preserve these
                            if(segment_1.charAt(nextIndex-1) === segmentSeparator) {
                                nextIndex = nextIndex-1;
                                if(segment_1.charAt(nextIndex-1) === groupSeparator) {
                                    nextIndex = nextIndex-1;
                                }
                            }
                            originalData = segment_1.substring(deIndex + 1, nextIndex);
                            newData = "<span class='deid' style='background-color: white;'>" + value.location.dataElementId + value.defaultValue + "</span>";                            
                            modifiedSegment = segment_1.replace(originalData, newData);
                            segments[n].segment = modifiedSegment;
                        }
                    }
                }
            };

        };
    });
    var deidentifiedData = "";

    if(segmentsObject.hasOwnProperty("HEADER")){
        segmentsObject["HEADER"].segments[0].segment = highlightedHeader;
    }
    var something = [];
    _.forEach(segmentsObject, function(value, key) {
        _.forEach(value, function(segments, key) {
            _.forEach(segments, function(segment, k){
                something.push(segment);
            })
        })
    });

    var orderedsegmentsObject = _.sortBy(something, ['order'], ['asc']);

    for(var h = 0; h < orderedsegmentsObject.length; h++) {
        deidentifiedData += orderedsegmentsObject[h].segment;
    }
    // this removes the segment and field separators added earlier
    deidentifiedData = deidentifiedData.substring(0,deidentifiedData.length - 2); 
    
    // recreate transaction the order it was received and add the group header 
    return deidentifiedData;
}

export default deidentifyNCPDP_D0;