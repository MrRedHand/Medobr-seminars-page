

document.addEventListener('DOMContentLoaded', function(){

    return

    // const getData = (url) => 
    //     new Promise((resolve, reject) => 

    //     fetch(url)
    //         .then(response => response.json())
    //         .then(json => resolve(json))
    //         .catch(error => reject(error))

    //     )

    // const getData = async (url) => {
    //     const res = await fetch(url)
    //     const json = await res.json()
    //     console.log(json)
    //     return json
    // }

    // getData('https://medobr.com/seminar/get_seminar_list.php?only_new=Y')

    //Табы - контейнер .has-tabs
    //контролы - data-tab-target="#id"
    //контент-табы - data-tab-content=""

    const tabsControls = document.querySelectorAll('[data-tab-target]')

    console.log(tabsControls)

    tabsControls.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabParent = tab.closest('.has-tabs')
            const tabContents = tabParent.querySelectorAll('[data-tab-content]')
            const currTabs = tabParent.querySelectorAll('[data-tab-target]')
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active') 
            })

            currTabs.forEach(tab => {
                tab.classList.remove('active')
            })

            const target = tabParent.querySelector(tab.dataset.tabTarget)
            tab.classList.add('active')
            target.classList.add('active')

            console.log('клик по табу')
        })
    })


    //ищу все фильтры чтобы свернуть их при загрузке
    const filterDiv = document.querySelectorAll('.filter');

    filterDiv.forEach(filter => {
        //Сворачиваю каждый фильтр
        filter.classList.add('folded');

        const labels = filter.querySelectorAll('.filter__label');

        //для каждого лэйбла - добавляю дата-аттрибут с текстом из спана внутри лейбла
        //чтобы работать с сортировкой
        // labels.forEach(label => {
        //     const labelSpanValue = label.querySelector('.span-value')
        //     label.dataset.labelValue = labelSpanValue.textContent
        // })

        //СТИРОВКА (багует на вмп/смп фильтре)        
        //sortLables(filter.querySelector('.filter__labels-wrapper'), labels)

        filter.querySelector('.filter__labels-wrapper').style.maxHeight = labels[0].clientHeight * 10 + 'px';

        for (let index = 0; index < labels.length; index++) {
            if (index > 4) {
                labels[index].classList.add('hidden');
            }
        }
    })




    //ПОИСК внутри фильтров
    const searchInputs = document.querySelectorAll('.filter__search-field');

    searchInputs.forEach(sInput => {
        sInput.addEventListener('input', () => {
            searchFunc(sInput)
        })
    })

    function searchFunc(sInput) {
        //Ищу айдишник блока  по которому буду искать, на основе даты
        const searchArea = document.querySelector(sInput.dataset.searchTarget)
        //Ищу все элементы среди которых буду искать
        const searchElems = searchArea.querySelectorAll('.filter__label')

        searchElems.forEach(elem => {
            const inputSpan = elem.querySelector('span')
            
            if (inputSpan.textContent.toUpperCase().includes(sInput.value.toUpperCase())) {
                elem.classList.remove('hidden')
            } else {
                elem.classList.add('hidden')
            }

        })
    }
    ///////////////////////////////////////////////////


});

/* Функция кнопки для показа скрытых инпутов (баттон блока присылает айди враппера) */
function unfoldFilter(blockID) {
    const block = document.getElementById(blockID);
    const labels = block.getElementsByClassName('filter__label');

    if (block.classList.contains('folded')) {
        block.classList.remove('folded');
        for (let index = 0; index < labels.length; index++) {
            labels[index].classList.remove('hidden');
        }
    } else {
        block.classList.add('folded');
        for (let index = 0; index < labels.length; index++) {
            if (index > 4) {
                labels[index].classList.add('hidden');
            }
        }
    }

}


/* Открытие мобильного меню */
function toogleMobileNav() {
    const nav = document.getElementById('filters-wrap');

    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
}
///////////////////////////////


//СОРТИРОВКА - принимает контейнер элементов и саму коллекцию элементов
function sortLables(parent, labels) {
    const paraArr = [].slice.call(labels).sort(function (a, b) {
        return a.textContent > b.textContent ? 1 : -1;
    });
    paraArr.forEach(function (p) {
        parent.appendChild(p);
    });
}

