import tokyoImage from '../assets/images/tokyo.png';
import osakaImage from '../assets/images/osaka.png';
import hiroshimaImage from '../assets/images/Hiroshima.png';
import kyotoImage from '../assets/images/Kyoto.png';
import hotelOne from '../assets/images/hotels/hotel-1.jpg'
import hotelTwo from '../assets/images/hotels/hotel-2.jpg'
import hotelThree from '../assets/images/hotels/hotel-3.jpg'
import hotelFour from '../assets/images/hotels/hotel-4.jpg'
import hotelFive from '../assets/images/hotels/hotel-5.jpg'
import hotelSix from '../assets/images/hotels/hotel-6.jpg'
import hotelSeven from '../assets/images/hotels/hotel-7.jpg'
import hotelEigth from '../assets/images/hotels/hotel-8.jpg'
import hotelNine from '../assets/images/hotels/hotel-9.jpg'
import hotelTen from '../assets/images/hotels/hotel-10.jpg'
import hotelEleven from '../assets/images/hotels/hotel-11.jpg'
import hotelTwelve from '../assets/images/hotels/hotel-12.jpg'


export const DESTINATIONS = [
    {
        id : "tokyo",
        cityImage: tokyoImage,
        title: "Tokyo",
        description: "Tokyo es una ciudad vibrante y cosmopolita, con sus templos históricos, museos de arte moderno y rascacielos icónicos. No pierdas la oportunidad de sumergirte en su fascinante atmósfera.",
        hotels: [
            { id: 1, name: 'Sakura Hotel', rating: 4.7, address: 'Rue de Rivoli', hotelImage : hotelOne },
            { id: 2, name: 'APA Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelTwo },
            { id: 3, name: 'Tokyo Bay', rating: 4.1, address: 'Rue de Louvre', hotelImage : hotelThree },
            { id: 4, name: 'Conrad Osaka', rating: 4.7, address: 'Rue de Rivoli', hotelImage : hotelFour },
            { id: 5, name: 'Mimaru Osaka', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelFive },
            { id: 6, name: 'Holiday Inn', rating: 4.1, address: 'Rue de Louvre', hotelImage : hotelSix },
            

        ]
    },
    {
        id : "osaka",
        cityImage: osakaImage,
        title: "Osaka",
        description: "Osaka es una ciudad animada y moderna en Japón. La ciudad es famosa por su deliciosa gastronomía y por ser un excelente punto de partida para explorar otras ciudades japonesas cercanas.",
        hotels: [
            { id: 1, name: 'Conrad Osaka', rating: 4.7, address: 'Rue de Rivoli', hotelImage : hotelFour },
            { id: 2, name: 'Mimaru Osaka', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelFive },
            { id: 3, name: 'Holiday Inn', rating: 4.1, address: 'Rue de Louvre', hotelImage : hotelSix },
            { id: 4, name: 'Sakura Hotel', rating: 4.7, address: 'Rue de Rivoli', hotelImage : hotelOne },
            { id: 5, name: 'APA Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelTwo },
            { id: 6, name: 'Tokyo Bay', rating: 4.1, address: 'Rue de Louvre', hotelImage : hotelThree },
        ]
    },
    {
        id : "hiroshima",
        cityImage: hiroshimaImage,
        title: "Hiroshima",
        description: "Ciudad ubicada en el suroeste de Japón, conocida mundialmente por haber sido el objetivo del primer bombardeo atómico de la historia. Hoy en día, la ciudad es un símbolo de paz y reconciliación. Además, Hiroshima también es conocida por su gastronomía.",
        hotels: [
            { id: 1, name: 'Hotel The Knot', rating: 4.7, address: 'Rue de Rivoli', hotelImage : hotelSeven },
            { id: 2, name: 'Hotel Granvia', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelEigth },
            { id: 3, name: 'Hilton Hiroshima', rating: 3.1, address: 'Rue de Louvre', hotelImage : hotelNine },
            { id: 4, name: 'Ryotei Rangetsu', rating: 3.7, address: 'Rue de Rivoli', hotelImage : hotelTen },
            { id: 5, name: 'Grandbell Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelEleven },
            { id: 6, name: 'Garria Nijo', rating: 5, address: 'Rue de Louvre', hotelImage : hotelTwelve }
        ]
    },
    {
        id : "kyoto",
        cityImage: kyotoImage,
        title: "Kyoto",
        description: "Kioto es una ciudad ubicada en el centro de Japón, conocida por ser la antigua capital del país y preservar muchas tradiciones culturales japonesas. Con sus templos históricos, jardines tradicionales y ceremonias de té, es una inmersión en la cultura japonesa.",
        hotels: [
            { id: 1, name: 'Ryotei Rangetsu', rating: 3.7, address: 'Rue de Rivoli', hotelImage : hotelTen },
            { id: 2, name: 'Grandbell Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelEleven },
            { id: 3, name: 'Garria Nijo', rating: 5, address: 'Rue de Louvre', hotelImage : hotelTwelve },
            { id: 4, name: 'Hotel The Knot', rating: 4.7, address: 'Rue de Rivoli', hotelImage : hotelSeven },
            { id: 5, name: 'Hotel Granvia', rating: 4.4, address: 'Champ de Mars', hotelImage : hotelEigth },
            { id: 6, name: 'Hilton Hiroshima', rating: 3.1, address: 'Rue de Louvre', hotelImage : hotelNine },
        ]
    },
];
