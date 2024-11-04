type MenuListTypeChildren = {
    title: string
    path: string
}

type MenuListType = {
    title: string
    path: string
    protected: boolean
    children?: MenuListTypeChildren[]
}

export const MENU_LIST: MenuListType[] = [
    {
        title: 'Статьи',
        path: '/articles',
        protected: false,
    },
    // {
    //     title: 'Выпускники',
    //     path: '/graduates',
    // },
    {
        title: 'Летопись',
        path: '/letopis',
        protected: false,
    },
    {
        title: 'Админ',
        path: '/admin',
        protected: true,
    },
    // {
    //     title: 'Сертификат',
    //     path: '/pdf/sertificat',
    // },
]
