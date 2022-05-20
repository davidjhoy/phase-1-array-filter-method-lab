// Code your solution here
function findMatching(arr, name){
    const usedName = name.toUpperCase()
    return arr.filter(item => item.toUpperCase() === usedName)
}

function fuzzyMatch(arr, partial){
    return arr.filter(item => item.slice(0,partial.length)=== partial)
}

function matchName(arr, name){
    return arr.filter(item => item.name === name);
}