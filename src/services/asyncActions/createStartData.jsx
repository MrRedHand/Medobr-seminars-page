import {
  writeCatsAction,
  writeNmoVmpAction,
  writeNmoSmpAction,
  writeDatesAction,
  sidebarDataAction,
} from "../reducers/seminarsFiltration";

export const createStartData = (fullData) => {
  return function (dispatch) {
    let catsArray = [];
    let nmoVmpSpecsArray = [];
    let nmoSmpSpecsArray = [];
    let datesArray = [];

    //Ищу все категории в джейсоне
    fullData.map((elem) => {
      if (elem.categories !== null) {
        elem.categories.map((innerCat) => {
          //слайс вместо пуша массива
          catsArray = [...catsArray, innerCat];
        });
      }
    });

    //Ищу все НМО-специальности ВМП
    fullData.map((elem) => {
      elem.nmoSpecialties !== null &&
        elem.nmoSpecialties.vmp &&
        elem.nmoSpecialties.vmp.specs.length > 0 &&
        elem.nmoSpecialties.vmp.specs.map((innerElem) => {
          nmoVmpSpecsArray = [...nmoVmpSpecsArray, innerElem];
        }) &&
        elem.nmoSpecialties.smp &&
        elem.nmoSpecialties.smp.specs.length > 0 &&
        elem.nmoSpecialties.smp.specs.map((innerElem) => {
          nmoSmpSpecsArray = [...nmoSmpSpecsArray, innerElem];
        });
    });


    fullData.map((elem, index) => {
      let [day, month, year] = elem.date.split(".");

      year = parseInt(year, 10)

      const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

      const newYear = {
        'year': year,
        'months' : []
      }

      const newMonth = {
        'name' : monthNames[month-1],
        'count' : 0
      }

      !datesArray.some(elem => {return elem['year'] === year}) && datesArray.push(newYear)
      
      datesArray.map(elem => {
        !elem['months'].includes([monthNames[month-1]]) && elem['months'].push([monthNames[month-1]])
        //!elem['months'].some(x => {return x[monthNames[month-1]] === [monthNames[month-1]]}) && elem['months'].push([monthNames[month-1]])
        //!elem.some(x => {return x[monthName] === monthName}) && elem.push(monthInYear)
      })

    });

    console.log("datesArraydatesArray", datesArray);

    //Удаляю все дубли категорий из массива
    catsArray = removeDoubles(catsArray);
    nmoVmpSpecsArray = removeDoubles(nmoVmpSpecsArray);
    nmoSmpSpecsArray = removeDoubles(nmoSmpSpecsArray);

    console.log("catsArray", catsArray);
    console.log("nmoVmpSpecsArray", nmoVmpSpecsArray);
    console.log("nmoSmpSpecsArray", nmoVmpSpecsArray);

    dispatch(writeCatsAction(catsArray));
    dispatch(writeNmoVmpAction(nmoVmpSpecsArray));
    dispatch(writeNmoSmpAction(nmoSmpSpecsArray));
    dispatch(writeDatesAction(datesArray));
    dispatch(sidebarDataAction(true));

    //Метод удаления копий из массивов
    function removeDoubles(arr) {
      arr = arr.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.place === value.place && t.name === value.name
          )
      );
      //Сортирую все по алфавиту в параметре name у каждого объекта массива
      return arr.sort((a, b) => {
        const x = a.name;
        const y = b.name;
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  };
};
