import { createSlice } from "@reduxjs/toolkit";



export const globalReducer = createSlice({
    name: 'global',
    initialState: {
        // Объект с основной информацией фонда
        mainInfo: {
            footerText: 'Charitable giving is the act of giving money, goods or time to the unfortunate, either directly or by means of a charitable trust or other worthy cause. Charitable giving as a religious act or duty is referred to as almsgiving or alms.',
            phone: '+46-766-92-00-94',
            email: 'eaf.fond@help.com',
            address: 'London, 45 Maydwell House',
            socials: [
                {
                    social: 'twi',
                    link: 'https://twitter.com/?lang=en',
                },
                {
                    social: 'fb',
                    link: 'https://www.facebook.com/',
                },
                {
                    social: 'inst',
                    link: 'https://www.instagram.com/',
                },
                {
                    social: 'in',
                    link: 'https://www.linkedin.com/',
                },
            ],
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72953682608!2d-0.24202321966301887!3d51.52877143099761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1663230076450!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
        },
        // Объект содержащий контент для страницы о нас
        aboutPage: {
            mission: [
                {
                    id: 1,
                    images: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg'],
                    smallTitle: 'mission',
                    bigTitle: 'Our mission',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
                },
                {
                    id: 2,
                    video: 'video1.mp4',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
                },
            ],
            history: [
                {
                    year: '2008',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2008',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2012',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2012',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2016',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2016',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2019',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2019',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2022',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2022',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
            ]
        },
        // Массив со всеми новостями
        news: [
            {
                id: 1,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America1',
                newDate: 1662685455341,
                categories: ['charity', 'education'], // Это слаги категорий новостей из объекта newsCategories
                views: 498,
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'Lorem7 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 2,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America2',
                newDate: 1662885455341,
                categories: ['charity', 'ukrain2022'],
                views: 135,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 3,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America3',
                newDate: 1662185455341,
                categories: ['charity'],
                views: 468,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 4,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America4',
                newDate: 1662185455341,
                categories: ['charity', 'ukrain2022'],
                views: 4568,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 5,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America5',
                newDate: 1662185455341,
                categories: ['charity', 'ukrain2022', 'education'],
                views: 10,
                content: [
                    {
                        type: 'text',
                        text: 'It Lorem7 is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 6,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America6',
                newDate: 1662185455341,
                categories: ['charity'],
                views: 84,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 7,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America7',
                newDate: 1663055455341,
                categories: ['charity', 'education'],
                views: 8,
                content: [
                    {
                        type: 'text',
                        text: 'Lorem7 It is a long established7 fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            },
        ],
        // Массив со всеми событиями
        events: [
            {
                id: 1,
                eventStart: 1663109046985, // Время начала события
                eventEnd: 1663116246985, // Время окончания события
                title: 'Sending humanitarian aid to Kyiv1',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 2,
                eventStart: 1663209046985,
                eventEnd: 1663126246985,
                title: 'Sending humanitarian aid to Kyiv2',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 3,
                eventStart: 1663409046985,
                eventEnd: 1663416246985,
                title: 'Sending humanitarian aid to Kyiv3',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 4,
                eventStart: 1663309046985,
                eventEnd: 1663316246985,
                title: 'Sending humanitarian aid to Kyiv4',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 5,
                eventStart: 1663509046985,
                eventEnd: 1663516246985,
                title: 'Sending humanitarian aid to Kyi5',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 6,
                eventStart: 1663609046985,
                eventEnd: 1663616246985,
                title: 'Sending humanitarian aid to Kyiv6',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 7,
                eventStart: 1663609046985,
                eventEnd: 1663616246985,
                title: 'Sending humanitarian aid to Kyiv7',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
        ],
        // Массив для блока со статистикой
        stats: [
            {
                id: 1,
                title: 'Happy People',
                value: '1350 +',
            },
            {
                id: 2,
                title: 'Dedicated Volunteers',
                value: '180 +',
            },
            {
                id: 3,
                title: 'Implemented Сompanies',
                value: '370 +',
            },
        ],
        // Массив со всеми донатами
        causes: [
            {
                id: 1,
                img: 'causeImg.jpg',
                title: 'Restoration of Ukraine1',
                text: 'Ukraine suffered a lot from the war, in order to help it, we opened a collection, the money of which will be used to rebuild cities',
                goal: 100,
                raised: 80,
                supporter: 8215,
                donators: 90560,
                categories: ['charity', 'education'], // Это слаги категорий донатов из объекта causesCategories
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'Lorem7 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        // Если блок с вопросом в аккордеоне то type question
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                ],
            }, {
                id: 2,
                img: 'causeImg.jpg',
                title: 'Restoration of Ukraine2',
                text: 'Ukraine suffered a lot from the war, in order to help it, we opened a collection, the money of which will be used to rebuild cities',
                goal: 16500,
                raised: 12000,
                supporter: 8215,
                donators: 36560,
                categories: ['education'],
                content: [
                    {
                        type: 'text',
                        text: 'Lorem7 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                ],
            }, {
                id: 3,
                img: 'causeImg.jpg',
                title: 'Restoration of Ukraine3',
                text: 'Ukraine suffered a lot from the war, in order to help it, we opened a collection, the money of which will be used to rebuild cities',
                goal: 1000000,
                raised: 483000,
                supporter: 8215,
                donators: 80560,
                categories: ['charity'],
                content: [
                    {
                        type: 'text',
                        text: 'Lorem7 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                ],
            }, {
                id: 4,
                img: 'causeImg.jpg',
                title: 'Restoration of Ukraine4',
                text: 'Ukraine suffered a lot from the war, in order to help it, we opened a collection, the money of which will be used to rebuild cities',
                goal: 1000000,
                raised: 483000,
                supporter: 8215,
                donators: 80560,
                categories: ['charity'],
                content: [{
                        type: 'text',
                        text: 'Lorem7 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                ],
            },
        ],
        // Объект категорий новостей
        newsCategories: {
            charity: {
                slug: 'charity',
                title: 'Charity',
            },
            education: {
                slug: 'education',
                title: 'Education',
            },
            ukrain2022: {
                slug: 'ukrain2022',
                title: 'Ukrain 2022',
            },
            donation: {
                slug: 'donation',
                title: 'Donation',
            },
            food: {
                slug: 'food',
                title: 'Food',
            },
            camp: {
                slug: 'camp',
                title: 'Camp',
            },
        },
        // Объект категорий донатов
        causesCategories: {
            charity: {
                slug: 'charity',
                title: 'Charity',
            },
            education: {
                slug: 'education',
                title: 'Education',
            },
            ukrain2022: {
                slug: 'ukrain2022',
                title: 'Ukrain 2022',
            },
            donation: {
                slug: 'donation',
                title: 'Donation',
            },
            food: {
                slug: 'food',
                title: 'Food',
            },
            camp: {
                slug: 'camp',
                title: 'Camp',
            },
        },
        // Это массив для выбранных категорий. При выборе категории в сайдбаре, слаг категории попадает в этот
        // массив, затем происходит фильтрация новостей или донатов по наличию у них категорий из этого массива
        selectedNewsCategs: [],
        selectedCausesCategs: [],
    },
    reducers: {
        setSelectedNewsCategs: (state, action) => {
            let categ = action.payload
            if (state.selectedNewsCategs.includes(categ)) {
                let index = state.selectedNewsCategs.indexOf(categ)
                if (index == 0) {
                    state.selectedNewsCategs.splice(0, 1)
                } else {
                    state.selectedNewsCategs.splice(index, index)
                }
            } else {
                state.selectedNewsCategs.push(action.payload)
            }
        }
    }
})


export const {
    setSelectedNewsCategs
} = globalReducer.actions

export default globalReducer.reducer