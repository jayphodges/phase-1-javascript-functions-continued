function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}
function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}
function wrapAdjective (word = "special") {
    return function (flair = `*`) {
        let string = word + flair + word
        return `You are ${string}!`
    }
}