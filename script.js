const myApp = new Vue ({
    el : '#vue-js-container',

    data : {
        contacts : [
            {
                name : 'Luke Skywalker',
                image : 'https://www.cinemascomics.com/wp-content/uploads/2020/08/luke-star-wars-heroe-960x720.jpg?mrf-size=m',
                active : true,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Anakin Skywalker',
                image : 'https://lamenteemeravigliosa.it/wp-content/uploads/2018/07/giovane-anakin-skywalker.jpg',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Qui-Gon Jinn',
                image : 'https://www.ciakmagazine.it/wp-content/uploads/2022/04/liam-neeson-obi-quan-qui-gon-jinn.webp',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'R2-D2',
                image : 'https://insolenzadir2d2.it/wp-content/uploads/2016/09/why-luke-skywalker-left-r2d2-behind-in-star-wars-7-the-force-awakens-797755.jpg',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Maestro Yoda',
                image : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Ahsoka Tano',
                image : 'https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_47d8386d.jpeg?region=271%2C0%2C951%2C536',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Mace Windu',
                image : 'https://images.everyeye.it/img-notizie/star-wars-samuel-l-jackson-mace-windu-vivo-v3-476725-1280x960.jpg',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Padmé Amidala',
                image : 'https://static.wikia.nocookie.net/disney/images/3/3f/Padm%C3%A9_Amidala.jpg/revision/latest?cb=20210213151958&path-prefix=it',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Jango Fett',
                image : 'https://insolenzadir2d2.it/wp-content/uploads/2020/12/databank_jangofett_01_169_884cefab.jpeg',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'Jabba the Hutt',
                image : 'https://bbts1.azureedge.net/images/p/full/2018/03/f0b85712-a6b9-4944-8f48-4e3d68a1cf95.jpg',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
            {
                name : 'C-3PO',
                image : 'https://deseret.brightspotcdn.com/dims4/default/83f4e55/2147483647/strip/true/crop/516x344+162+0/resize/740x493!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fxs5sk8ymwGjdUBfvj6hkugozDlc%3D%2F0x0%3A840x344%2F840x344%2Ffilters%3Afocal%28419x99%3A420x100%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F19118460%2FScreen_Shot_2019_08_26_at_10.16.19_AM.png',
                active : false,
                messages : [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received'
                    }
                ]
            },
        ],
    },

    methods : {
        activeChat (newChat) {
            this.contacts.forEach(element => {
                element.active = false;
                console.log(element.active);
            });

            newChat.active = true;

        }
    }

});





