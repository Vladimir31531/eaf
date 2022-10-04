import { createSlice } from "@reduxjs/toolkit";



export const globalReducer = createSlice({
    name: 'global',
    initialState: {
        // Объект с основной информацией фонда
        mainInfo: {
            footerText: 'У цьому розділі ви знайдете інформацію про наші контакти. Ви завжди можете написати або зателефонувати, якщо вам потрібна допомога або ви хочете залишити пропозицію та побажання. Чекаємо від вас дзвінків та зворотного зв\'язку.',
            phone: '+38-044-300-2813',
            email: 'found@eaf.world',
            address: 'м. Київ, вул. Хорива 7. м. Тернопіль вул.Об\'їзна 14',
            contactsText: 'У цьому розділі ви знайдете інформацію про наші контакти. Ви завжди можете написати або зателефонувати, якщо вам потрібна допомога або ви хочете залишити пропозицію та побажання. Чекаємо від вас дзвінків та зворотного зв \'язку.',
            socials: [
                {
                    social: 'twi',
                    link: 'https://twitter.com/EuropeanFundEAF',
                },
                {
                    social: 'fb',
                    link: 'https://www.facebook.com/profile.php?id=100085327899179',
                },
                {
                    social: 'inst',
                    link: 'https://www.instagram.com/european.assistance.fund/',
                },
                {
                    social: 'yt',
                    link: 'https://www.youtube.com/channel/UCW4d5wA3u9XEvGlOfo8DeQQ',
                },
                {
                    social: 'tt',
                    link: 'https://www.tiktok.com/@europeanassistance_fund',
                },
                {
                    social: 'wsp',
                    link: 'https://www.notion.so/WhatsApp-7f1d581ee3364c06b533cdb30d511711',
                },
                {
                    social: 'vbr',
                    link: 'https://www.notion.so/Viber-81f5bd6e462446e8a8b4b1b5262b7de8',
                },
                /* {
                    social: 'in',
                    link: 'https://www.linkedin.com/',
                }, */
            ],
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72953682608!2d-0.24202321966301887!3d51.52877143099761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1663230076450!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
        },
        // Объект содержащий контент для страницы о нас
        aboutPage: {
            mission: [
                {
                    id: 1,
                    images: ['about_eaf.jpeg'],
                    smallTitle: 'Про нас',
                    bigTitle: 'ІНФОРМАЦІЯ ПРО ФОНД',
                    text: <><span>Європейський фонд допомоги було засновано 22 червня 2022р. у місті Юрмала.</span><br/><span>Наша команда молодих енергійних людей, яким не чуже почуття співчуття та чуйності. Благодійний фонд реалізує власні проекти, бере участь у фінансуванні волонтерів — однодумців, які так само, як і ми розуміють, що діти — це наше майбутнє.</span></>,
                },
                /* {
                    id: 2,
                    video: 'video1.mp4',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
                }, */
            ],
            /* history: [
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
            ] */
        },
        // Массив со всеми новостями
        news: [
            /* {
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
            }, */
        ],
        // Массив со всеми событиями
        events: [
            {
                id: 1,
                eventStart: 1665668783000, // Время начала события
                eventEnd: 1665668783000, // Время окончания события
                title: 'Повертаємо дитинство, яке вiдiбрала вiйна',
                excerpt: 'Благодійний захід фонду #StandWithUkraine - SUN(Sustainable Ukraine Now): повертаємо дитинство, яке відібрала війна 13 жовтня у передмісті Львова, на території комплексу Edem Resort Medical & SPA, відбудеться благодійний захід під назвою SUN(Sustainable Ukraine Now) міжнародного фонду# Stand WithUkraine.',
                mainText: 'Благодійний захід фонду #StandWithUkraine - SUN(Sustainable Ukraine Now): повертаємо дитинство, яке відібрала війна 13 жовтня у передмісті Львова, на території комплексу Edem Resort Medical & SPA, відбудеться благодійний захід під назвою SUN(Sustainable Ukraine Now) міжнародного фонду# Stand WithUkraine. Головна мета заходу - всебічна допомога українським дітям та сім\'ям, що постраждали від війни та потребують допомоги. Також важливим завданням заходу є збір коштів на відбудову школи у Бучі (селище Бузова), яку зни ЩИВ російський агресор. У програмі заходу SUN благодійного фонду# StandWithUkraine заплановані виступи відомих українських артистів: КА, Злата Огневич, гурт ВВ, Wellboy, які виконають свої пісні разом з дітьми. Ведучими заходу стануть Юрій Ткач та Міла Єремєєва. На благодійному вечорі відбудеться аукціон на підтримку фонду# StandWithUkraine.Усі зібрані кошти будуть передані на допомогу дитячим будинкам, дітям - переселенцям з окупованих територій, дітям, що потребують медичного лікування, та малозабезпеченим сім\'ям.« Ми робимо все можливе сьогодні, щоб подарувати дітям щасливе завтра.Цим проектом ми активно підтримуємо благодійний фонд# StandWithUkraine ma збираємо кошти на допомогу нашим дітям, які вимушено втратили дитинство» -     головний організатор заходу SUN Марта Останкова. Нагадаємо, що# StandWithUkraine - це благодійний фонд, що був створений після повномасштабного вторгнення агресора в Україну, щоб допомагати людям, які потребують підтримки.Фонд займається наданням гуманітарної та тактичної допомоги українцям.У постійні плани роботи# StandWithUkraine спільно з серією заходів SUN також входить підтримка київського міського дитячого будинку у Ворзелі, організація розважальних поїздок для дітей, візити до київського притулку для неповнолітніх. Створюємо майбутне наших дітей прямо зараз!',
                img: 'event1.png',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, /*  {
                id: 2,
                eventStart: 1673209046985,
                eventEnd: 1673126246985,
                title: 'Sending humanitarian aid to Kyiv2',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 3,
                eventStart: 1673409046985,
                eventEnd: 1673416246985,
                title: 'Sending humanitarian aid to Kyiv3',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 4,
                eventStart: 1673309046985,
                eventEnd: 1673316246985,
                title: 'Sending humanitarian aid to Kyiv4',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 5,
                eventStart: 1673509046985,
                eventEnd: 1673516246985,
                title: 'Sending humanitarian aid to Kyi5',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 6,
                eventStart: 1673609046985,
                eventEnd: 1673616246985,
                title: 'Sending humanitarian aid to Kyiv6',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, {
                id: 7,
                eventStart: 1673609046985,
                eventEnd: 1673616246985,
                title: 'Sending humanitarian aid to Kyiv7',
                excerpt: 'We plan to send humanitarian aid packages to people who have been affected by the bombing.',
                mainText: 'We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. We plan to send humanitarian aid packages to people who have been affected by the bombing. ',
                img: 'eventImg.jpg',
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            }, */
        ],
        // Массив для блока со статистикой
        stats: [
            /* {
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
            }, */
        ],
        // Массив со всеми донатами
        causes: [
            {
                id: 1,
                img: 'standWithUkraine.jpg',
                title: '#Stand with UKRAINE',
                text: 'У зв\'язку з військовими діями в Україні та гуманітарними проблемами, що їх супроводжують, члени Фонду вирішили розробити гуманітарну Програму« Stand with Ukraine» Бенефіціари Програми« Stand with Ukraine»',
                goal: 100,
                raised: 80,
                supporter: 8215,
                donators: 90560,
                categories: ['charity', 'education'], // Это слаги категорий донатов из объекта causesCategories
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'У зв\'язку з військовими діями в Україні та гуманітарними проблемами, що їх супроводжують, члени Фонду вирішили розробити гуманітарну Програму« Stand with Ukraine» Бенефіціари Програми« Stand with Ukraine» ',
                    },
                    /* {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    }, */
                    {
                        type: 'text',
                        text: 
                        <ul>
                            <li>Бенефіціари Програми «Stand with Ukraine»:</li>
                            <li>Діти сироти;</li>
                            <li>Діти з особливими потребами;</li>
                            <li>Діти, у яких живим залишився один з батьків;</li>
                            <li>Діти із малозабезпечених сімей;</li>
                            <li>Внутрішньо переміщені особи;</li>
                            <li>Малозабезпечені жителі України, які виїхали до країн Європейського Союзу після 24.02.2022 р.;</li>
                        </ul>,
                    },
                    {
                        type: 'text',
                        text: 'Допомога бенефіціарам Фонд планує надавати адресну допомогу на території всієї України бенефіціарам програми Stand with Ukraine, від яких надійшли запити на надання гуманітарної, фінансової допомоги. Представники Фонду знаходяться у таких містах України, як Київ, Суми, Тернопіль, Вінниця. З розвитком програми« Stand with Ukraine» географія присутності Фонду в Україні може розширитися.У зв\'язку з розвитком поштових сервісів в Україні Фонд може надавати допомогу навіть у містах, де немає представників Фонду.',
                    },
                    {
                        type: 'text',
                        text: 'Допомога установам Представники Фонду фіксуватимуть пошкодження шкіл, дитячих будинків, які постраждали внаслідок військових дій в Україні, для огляду та подальшого надання допомоги. Фонд може відкривати збір та залучати кошти на реконструкцію шкіл, дитячих будинків та інших об\'єктів. Програма Фонду "Європейський фонд допомоги" Stand with Ukraine Фонд« Європейський фонд допомоги»(далі— Фонд) згідно зі статутом створений для виконання таких цілей:',
                    },
                    {
                        type: 'text',
                        text: 
                        <ul>
                            <li>Надання гуманітарної допомоги жертвам війни та стихійних лих;</li>
                            <li>Забезпечення розширення освітніх можливостей та доступності інформаційних технологій;</li>
                            <li>Надання допомоги онкохворим;</li>
                            <li>Надання гуманітарної допомоги постраждалим від війни та стихійних лих в Україні;</li>
                            <li>Підтримка забезпечення ліками нужденних;</li>
                            <li>Надання допомоги у евакуації тварин;</li>
                            <li>Збір пакетів допомоги;</li>
                            <li>Забезпечення підтримки для збору транспортних засобів допомоги;</li>
                            <li>Надання допомоги у наданні тимчасового житла;</li>
                            <li>Надання допомоги у евакуації мирних жителів;</li>
                            <li>Надання підтримки проектам NFT;</li>
                            <li>Надання підтримки у створенні культурних заходів;</li>
                            <li>Надання підтримки в організації заходів щодо зміцнення здоров'я;</li>
                            <li>Підтримка організації спортивних заходів;</li>
                        </ul>,
                    },

                    /* {
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
                    }, */
                ],
            },/*  {
                id: 2,
                img: 'supportInEurope.jpg',
                title: 'Помощь переселенцам в Европе',
                text: 'Программа находится в разработке. Но Вы можете ознакомится с нашими другими программами и поддержать их.',
                goal: 16500,
                raised: 12000,
                supporter: 8215,
                donators: 36560,
                categories: ['education'],
                content: [
                    {
                        type: 'text',
                        text: 'Вы можете поддержать наши другие программы нажав на кнопку "Поддержать".',
                    },
                ],
            } */
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
        globalSearchQuery: '',
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
        },
        setglobalSearchQuery: (state, action) => {
            state.globalSearchQuery = action.payload
        }
    }
})


export const {
    setSelectedNewsCategs,
    setglobalSearchQuery
} = globalReducer.actions

export default globalReducer.reducer