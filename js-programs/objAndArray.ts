const obj = {
     "english": ["john", "Albert", "Ronny"],
     "hindi": ["john", "peter", "steve"],
     "french": ["john", "steve", "tim"]
};

// Function to transform the original object into the desired format
function transformObject(inputObj: { [key: string]: string[] }): { [key: string]: string[] } {
     const result: { [key: string]: string[] } = {};

     for (const language in inputObj) {
          const speakers = inputObj[language];
          speakers.forEach(speaker => {
               result[speaker] = result[speaker] || [];
               result[speaker].push(language);
          });
     }

     return result;
}

// Transform the original object into the desired format
const outputObj = transformObject(obj);

console.log(outputObj);
