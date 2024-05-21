var obj = {
    "english": ["john", "Albert", "Ronny"],
    "hindi": ["john", "peter", "steve"],
    "french": ["john", "steve", "tim"]
};
// Function to transform the original object into the desired format
function transformObject(inputObj) {
    var result = {};
    var _loop_1 = function (language) {
        var speakers = inputObj[language];
        speakers.forEach(function (speaker) {
            result[speaker] = result[speaker] || [];
            result[speaker].push(language);
        });
    };
    for (var language in inputObj) {
        _loop_1(language);
    }
    return result;
}
// Transform the original object into the desired format
var outputObj = transformObject(obj);
console.log(outputObj);
