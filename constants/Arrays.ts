export const Arrays = {
    banners: [
        { img: require('@/assets/images/banners/banner1.png') },
        { img: require('@/assets/images/banners/banner2.png') },
        { img: require('@/assets/images/banners/banner3.png') }
    ],

    // Menu Buttons
    menuButtons: {
        firstRowButtons: [
            {
                icon: require('@/assets/images/icons/clothes.webp'),
                title: 'clothes.',
                iconSize: [70, 70]
            },
            {
                icon: require('@/assets/images/icons/cap.webp'),
                title: 'caps.',
                iconSize: [50, 50]
            },
        ],

        secondRowButtons: [
            {
                icon: require('@/assets/images/icons/dress.webp'),
                title: 'dress.',
                iconSize: [45, 45]
            },
            {
                icon: require('@/assets/images/icons/bag.webp'),
                title: 'bags.',
                iconSize: [45, 45]
            },
            {
                icon: require('@/assets/images/icons/sneaker.webp'),
                title: 'sneakers.',
                iconSize: [45, 45]
            },
        ],
        
        thirRowButtons: [
            {
                icon: require('@/assets/images/icons/new.webp'),
                title: 'new arrivals.',
                iconSize: [45, 45]
            },
        ]
    }
}
