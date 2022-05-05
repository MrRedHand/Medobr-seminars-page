import {writeCatsAction, writeNmoVmpAction, writeNmoSmpAction} from "../reducers/seminarsFiltration";

export const createStartData = (fullData) => {
    return function (dispatch) {
        let catsArray = []
        let nmoVmpSpecsArray = []
        let nmoSmpSpecsArray = []

        //Ищу все категории в джейсоне
        fullData.map(elem => {
            if (elem.categories !== null) {
                elem.categories.map(innerCat => {
                    //слайс вместо пуша массива
                    catsArray = [...catsArray, innerCat]
                })
            }
        })

        //Ищу все НМО-специальности ВМП
        fullData.map(elem => {
            if (elem.nmoSpecialties.length !== 0) {
                if (elem.nmoSpecialties.vmp != null && elem.nmoSpecialties.vmp.length !== 0) {
                    elem.nmoSpecialties.vmp.map(innerElem => {
                        //удаляю approvedStatus, чтобы не мешался
                        delete innerElem.approvedStatus
                        nmoVmpSpecsArray = [...nmoVmpSpecsArray, innerElem]
                    })
                }

                if (elem.nmoSpecialties.smp != null && elem.nmoSpecialties.smp.length !== 0) {
                    elem.nmoSpecialties.smp.map(innerElem => {
                        //удаляю approvedStatus, чтобы не мешался
                        delete innerElem.approvedStatus
                        nmoSmpSpecsArray = [...nmoSmpSpecsArray, innerElem]
                    })
                }
            }
        })

        //Удаляю все дубли категорий из массива
        catsArray = removeDoubles(catsArray)
        nmoVmpSpecsArray = removeDoubles(nmoVmpSpecsArray)
        nmoSmpSpecsArray = removeDoubles(nmoSmpSpecsArray)

        dispatch(writeCatsAction(catsArray))
        dispatch(writeNmoVmpAction(nmoVmpSpecsArray))
        dispatch(writeNmoSmpAction(nmoSmpSpecsArray))
        // dispatch({type: ADD_CATEGORIES_ARRAY, payload: catsArray})
        // dispatch({type: ADD_NMO_VMP_ARRAY, payload: nmoVmpSpecsArray})
        // dispatch({type: ADD_NMO_SMP_ARRAY, payload: nmoSmpSpecsArray})

        console.log('fullData', fullData)
        console.log('storedCats', catsArray)
        console.log('storedVmp', nmoVmpSpecsArray)
        console.log('storedSmp', nmoSmpSpecsArray)

        //Метод удаления копий из массивов
        function removeDoubles(arr) {
            arr = arr.filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.place === value.place && t.name === value.name
                    ))
            )
            //Сортирую все по алфавиту в параметре name у каждого объекта массива
            return arr.sort((a,b) => {
                const x = a.name; const y = b.name;
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            })
        }
    }
}