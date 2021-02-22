import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
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
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...sectionProps }) => (
                    <MenuItem key={id} {...sectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;
