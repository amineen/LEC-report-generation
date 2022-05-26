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



const results = plantData.filter(pd=>pd.plantType === "Mt. Coffee Hydro Plant").reduce((result, item) => {
    const {_id, period, plantName, plantType, ...rest} = item;

        Object.keys(rest).forEach(key => {
            const value = rest[key];
            if(!result[key]) {
                result[key] = [];       
            }
            const dataEntry = result[key].find(d=>d.plantName === item.plantName);
            if(dataEntry) {
                dataEntry[`${period}`] = value;
            } else {
                result[key].push({plantName, [`${period}`]: value});
            }                   
        }); 
        
    return result;
},
{});

console.log(results);



