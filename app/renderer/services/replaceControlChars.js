let replaceControlCharacters = (input) => {
    
    // eslint-disable-next-line
    var str = input.replace(/\x1E/g, "<span style='background-color:blue;color:white;'>[RS]</span>");
    // eslint-disable-next-line
    str = str.replace(/\x1D/g, "<span style='background-color:blue;color:white;'>[GS]</span>");
    str = str.replace(/\x1C/g, "<span style='background-color: blue;color:white;'>[FS]</span>");
    str = str.replace(/\x02/g, "<span style='background-color: blue;color:white;'>[STX]</span>");
    str = str.replace(/\x03/g, "<span style='background-color: blue;color:white;'>[ETX]</span>");
    return str;
}

export default replaceControlCharacters;

