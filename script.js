const myApp = new Vue ({
    el : '#vue-js-container',

    data : {
        messageToRemove :0,

        keyWord : '',
        
        myTimeOut : '',

        removedContact : 0,

        activeContact: 0,

        lastMessage : 0,

        newAnswer : {
            day: '',
            hours:'',
            text: 'ok',
            status: 'received'
        },

        newMessage :{
            day: '',
            hours:'',
            text: '',
            status: 'sent'
        },

        contacts : [
            {
                name : 'Luke Skywalker',
                image : 'https://www.cinemascomics.com/wp-content/uploads/2020/08/luke-star-wars-heroe-960x720.jpg?mrf-size=m',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {      
                name : 'Anakin Skywalker',
                image : 'https://lamenteemeravigliosa.it/wp-content/uploads/2018/07/giovane-anakin-skywalker.jpg',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {               
                name : 'Qui-Gon Jinn',
                image : 'https://www.ciakmagazine.it/wp-content/uploads/2022/04/liam-neeson-obi-quan-qui-gon-jinn.webp',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '23/03/2020',
                        hours:' 16:44',
                        text: 'wewe',
                        status: 'received',
                        display : false,
                        hide : false
                    }

                ]
            },
            {
                name : 'R2-D2',
                image : 'https://insolenzadir2d2.it/wp-content/uploads/2016/09/why-luke-skywalker-left-r2d2-behind-in-star-wars-7-the-force-awakens-797755.jpg',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'Maestro Yoda',
                image : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'Ahsoka Tano',
                image : 'https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_47d8386d.jpeg?region=271%2C0%2C951%2C536',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'Mace Windu',
                image : 'https://images.everyeye.it/img-notizie/star-wars-samuel-l-jackson-mace-windu-vivo-v3-476725-1280x960.jpg',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'Padm?? Amidala',
                image : 'https://static.wikia.nocookie.net/disney/images/3/3f/Padm%C3%A9_Amidala.jpg/revision/latest?cb=20210213151958&path-prefix=it',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'Jango Fett',
                image : 'https://insolenzadir2d2.it/wp-content/uploads/2020/12/databank_jangofett_01_169_884cefab.jpeg',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'Jabba the Hutt',
                image : 'https://bbts1.azureedge.net/images/p/full/2018/03/f0b85712-a6b9-4944-8f48-4e3d68a1cf95.jpg',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
            {
                name : 'C-3PO',
                image : 'https://deseret.brightspotcdn.com/dims4/default/83f4e55/2147483647/strip/true/crop/516x344+162+0/resize/740x493!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fxs5sk8ymwGjdUBfvj6hkugozDlc%3D%2F0x0%3A840x344%2F840x344%2Ffilters%3Afocal%28419x99%3A420x100%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F19118460%2FScreen_Shot_2019_08_26_at_10.16.19_AM.png',
                active : false,
                show : true,
                messages : [
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        display : false,
                        hide : false

                    },
                    {
                        day: '20/03/2020',
                        hours:' 16:30',
                        text: 'Bene grazie! Tu tutto bene?',
                        status: 'received',
                        display : false,
                        hide : false
                    }
                ]
            },
        ],
    },

    methods : {

        activeChat (newChat) {
            this.newMessage = {
                day: '',
                hours:'',
                text: '',
                status: 'sent'
            }  

            this.contacts.forEach(element => {
                element.active = false;
            });
            
            newChat.active = true;

            this.lastMessage = newChat.messages.length - 1;
            this.activeContact = newChat;
            
            return this.lastMessage;
        },

        addNewMessage () {
            this.getDateAndHours();

            if (this.newMessage.text !== '') {
                this.activeContact.messages.push(this.newMessage);
                this.myTimeOut = setTimeout(this.addNewAnswer, 1000);
            };
                  
            this.newMessage = {
                day: '',
                hours:'',
                text: '',
                status: 'sent'
            }  
        },

        addNewAnswer () {
            this.activeContact.messages.push(this.newAnswer);
        },

        getDateAndHours () {
            now = new Date();
            this.newMessage.day = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
            this.newAnswer.day = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

            this.newMessage.hours = `${now.getHours()}:${now.getMinutes()}`;
            this.newAnswer.hours = `${now.getHours()}:${now.getMinutes()}`;
        },

        searchContact () {
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.keyWord)) {
                    element.show = true;
                } else {
                    element.show = false;
                };
            });           

        },

        displayBlock (messageMenu) {
            this.messageToRemove = messageMenu;
            messageMenu.display = true;
        },

        displayNone (leaveMenu) {
            this.messageToRemove = leaveMenu;
            leaveMenu.display = false;
        },

        removeMessage (deleteMessage) {
            this.messageToRemove = deleteMessage;
            deleteMessage.hide = true;
            
        }
        
    },
});
