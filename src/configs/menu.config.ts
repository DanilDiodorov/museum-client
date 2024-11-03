type MenuListTypeChildren = {
    title: string
    path: string
}

type MenuListType = {
    title: string
    path: string
    children?: MenuListTypeChildren[]
}

export const MENU_LIST: MenuListType[] = [
    {
        title: 'Статьи',
        path: '/articles',
    },
    // {
    //     title: 'Выпускники',
    //     path: '/graduates',
    // },
    {
        title: 'Летопись',
        path: '/letopis',
    },
    // {
    //     title: 'Сертификат',
    //     path: '/pdf/sertificat',
    // },
]
