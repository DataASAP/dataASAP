let restoreControlCharacters = (input) => {

    var str = input.replace( /\[RS\]/g, "\x1E");
    str = str.replace(/\[GS\]/g, "\x1D" );
    str = str.replace(/\[FS\]/g, "\x1C" );
    str = str.replace(/\[STX\]/g, "\x02" );
    str = str.replace(/\[ETX\]/g, "\x03" );

    return str;
}

export default restoreControlCharacters;

