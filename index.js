function superbowlWin(record){
    const winList = record.find(obj => obj.result === 'W'); //return an element if condition met
    //if (record.find(obj => obj.result === 'W') ) 
    if (winList) { //if winList is "true" meaning it has an element, then return the year; if its "false" meaning it's empty, then undefined
        return winList.year
    } else {return undefined}
    // const winList = record.find(obj => obj.result === 'W');
    //return winList.year; //passes 1st part
    //return winList; ==> passes 2nd part (undefined)
}