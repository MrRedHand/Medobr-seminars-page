import {
  writeCatsAction,
  writeNmoVmpAction,
  writeNmoSmpAction,
  writeDatesAction,
  sidebarDataAction,
} from "../reducers/seminarsFiltration";

import { monthNames } from "../getMonthName";

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

      month = parseInt(month, 10)

      const newYear = {
        'year': year,
        'months' : monthNames.map(elem => {
          return {'name' : elem, 'count' : 0}
        })
      }

      !datesArray.some(elem => {return elem['year'] === year}) && (datesArray = [...datesArray, newYear])

      datesArray.map(elem => {
        elem.year === year && elem.months[month-1].count++
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
