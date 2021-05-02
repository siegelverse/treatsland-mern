const INITIAL_STATE = {
    sections: [
        {
            id: 1, 
            title: 'Puch',
            imageURL: 'https://i.imgur.com/BxSgjPT.jpg',
            linkURL: 'puch'
        },
        {
            id: 2, 
            title: 'Honda', 
            imageURL: 'https://i.imgur.com/c2TjbDk.jpg',
            linkURL: ''
        },
        {
            id: 3, 
            title: 'Peugoet',
            imageURL: 'https://i.imgur.com/M7FpuhL.png',
            linkURL: ''
        }, 
        {
            id: 4,
            title: 'Parts', 
            imageURL: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/Puch-treat-kit-70cc-the-people-2T.jpg',
            size: 'large',
            linkURL: ''
        },
        {
            id: 5, 
            title: 'Apparel',
            imageURL: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/rally-windbreaker-turquoise-2T.jpg?v-cache=1593187036',
            size: 'large',
            linkURL: ''
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default directoryReducer; 