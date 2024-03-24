import {
    createElement, 
    createHeader,
} from '../../script/layout'


//===========================

const page = document.querySelector('.page')

//=============================================

const header = createHeader()
page.append(header)

//====================


const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

// =========================================================

const COMMUNITY_INFO = {
    tabs: [
        {
            name: 'База знань',
            status: 0,
        },
        {
            name: 'Інформація',
            status: 1,
        },
    ],
    info: {
        image: '/img/community_image.png',
        title: 'Що таке база знань?',
        text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
    },
    buttons: [
        {
            name: `Перейти до ком'юніті у Телеграмі`,
            link: '#',
        },

    ]
}

const createInfo = () => {
    const communityInfo = createElement('main', 'community__info')

    const tabs = createElement('div', 'tabs')
    communityInfo.append(tabs)

    COMMUNITY_INFO.tabs.forEach((tabData) => {
        const tab = createElement(
            'div', 
            tabData.status 
                ? 'tab tab_active' 
                : 'tab tab_inactive',
            tabData.name
        )
        tabs.append(tab)
    })
    
    //====================

    const img = createElement('img', 'community_image')
    img["src"] = COMMUNITY_INFO.info.image
    communityInfo.append(img)

    //==========================

    const title = createElement(
        'div', 
        'title',
        COMMUNITY_INFO.info.title
    )
    communityInfo.append(title)

    //==========================

    const text = createElement(
        'div', 
        'text',
        COMMUNITY_INFO.info.text
    )
    communityInfo.append(text)


    //===========================
    const buttons = createElement('div', 'buttons')
    communityInfo.append(buttons)

    COMMUNITY_INFO.buttons.forEach((btnData) => {
        const button = createElement(
            'a',
            'btn',
            btnData.name
        )
        button["href"] = btnData.link
        buttons.append(button)
    })
    
    return communityInfo
}
 //=====================

 const info = createInfo()
 page.append(info)

 //=========================