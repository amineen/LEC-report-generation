const dataService = require("./data");
const  groupBy = ( data, key) => data.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }), 
    {},
  );

const plantData = dataService.powerPlantData;

const results = plantData.reduce((result, item) => {
    const {period, plantName, plantType, ...rest} = item;
    let newDoc = {}
    newDoc.
},
[]);



