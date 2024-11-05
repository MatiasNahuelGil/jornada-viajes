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
        id: "tokyo",
        cityImage: tokyoImage,
        title: "Tokyo",
        description: "Tokyo es una ciudad vibrante y cosmopolita, con sus templos históricos, museos de arte moderno y rascacielos icónicos. No pierdas la oportunidad de sumergirte en su fascinante atmósfera.",
        hotels: [
            { id: 1, name: 'Sakura Hotel', rating: 4.7, address: 'Rue de Rivoli', hotelImage: hotelOne, description: 'Sakura Hotel ofrece una experiencia única con su encantadora decoración inspirada en la flor de cerezo.' },
            { id: 2, name: 'APA Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelTwo, description: 'APA Hotel es conocido por su comodidad y servicios excepcionales, ideal para viajeros de negocios.' },
            { id: 3, name: 'Tokyo Bay', rating: 4.1, address: 'Rue de Louvre', hotelImage: hotelThree, description: 'Tokyo Bay ofrece impresionantes vistas al mar y es perfecto para disfrutar de una escapada romántica.' },
            { id: 4, name: 'Conrad Osaka', rating: 4.7, address: 'Rue de Rivoli', hotelImage: hotelFour, description: 'Conrad Osaka es un lujo moderno, fusionando elegancia y sofisticación en el corazón de la ciudad.' },
            { id: 5, name: 'Mimaru Osaka', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelFive, description: 'Mimaru Osaka es ideal para familias, ofreciendo espacios amplios y cómodos.' },
            { id: 6, name: 'Holiday Inn', rating: 4.1, address: 'Rue de Louvre', hotelImage: hotelSix, description: 'Holiday Inn es conocido por su hospitalidad cálida y servicios confiables.' },
        ]
    },
    {
        id: "osaka",
        cityImage: osakaImage,
        title: "Osaka",
        description: "Osaka es una ciudad animada y moderna en Japón. La ciudad es famosa por su deliciosa gastronomía y por ser un excelente punto de partida para explorar otras ciudades japonesas cercanas.",
        hotels: [
            { id: 7, name: 'Conrad Osaka', rating: 4.7, address: 'Rue de Rivoli', hotelImage: hotelFour, description: 'Conrad Osaka es sinónimo de lujo y confort, con servicios de clase mundial.' },
            { id: 8, name: 'Mimaru Osaka', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelFive, description: 'Mimaru Osaka proporciona una experiencia familiar inolvidable en un ambiente acogedor.' },
            { id: 9, name: 'Holiday Inn', rating: 4.1, address: 'Rue de Louvre', hotelImage: hotelSix, description: 'Holiday Inn es un lugar cómodo donde los viajeros se sienten como en casa.' },
            { id: 10, name: 'Sakura Hotel', rating: 4.7, address: 'Rue de Rivoli', hotelImage: hotelOne, description: 'Sakura Hotel resalta la belleza del diseño japonés contemporáneo con una atmósfera serena.' },
            { id: 11, name: 'APA Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelTwo, description: 'APA Hotel es conocido por su ubicación conveniente y sus confortables habitaciones.' },
            { id: 12, name: 'Tokyo Bay', rating: 4.1, address: 'Rue de Louvre', hotelImage: hotelThree, description: 'Tokyo Bay ofrece un ambiente tranquilo y vistas espectaculares que invitan al relax.' },
        ]
    },
    {
        id: "hiroshima",
        cityImage: hiroshimaImage,
        title: "Hiroshima",
        description: "Ciudad ubicada en el suroeste de Japón, conocida mundialmente por haber sido el objetivo del primer bombardeo atómico de la historia. Hoy en día, la ciudad es un símbolo de paz y reconciliación. Además, Hiroshima también es conocida por su gastronomía.",
        hotels: [
            { id: 13, name: 'Hotel The Knot', rating: 4.7, address: 'Rue de Rivoli', hotelImage: hotelSeven, description: 'Hotel The Knot ofrece una experiencia acogedora, conectando a los huéspedes con la historia de Hiroshima.' },
            { id: 14, name: 'Hotel Granvia', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelEigth, description: 'Hotel Granvia es un punto de partida ideal para explorar la ciudad, con fácil acceso a transportes.' },
            { id: 15, name: 'Hilton Hiroshima', rating: 3.1, address: 'Rue de Louvre', hotelImage: hotelNine, description: 'Hilton Hiroshima combina la hospitalidad tradicional con el lujo moderno.' },
            { id: 16, name: 'Ryotei Rangetsu', rating: 3.7, address: 'Rue de Rivoli', hotelImage: hotelTen, description: 'Ryotei Rangetsu ofrece una auténtica experiencia japonesa con su cocina y su diseño.' },
            { id: 17, name: 'Grandbell Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelEleven, description: 'Grandbell Hotel destaca por su diseño contemporáneo y su atención al detalle.' },
            { id: 18, name: 'Garria Nijo', rating: 5, address: 'Rue de Louvre', hotelImage: hotelTwelve, description: 'Garria Nijo es un hotel exclusivo que promete una estancia inolvidable.' },
        ]
    },
    {
        id: "kyoto",
        cityImage: kyotoImage,
        title: "Kyoto",
        description: "Kioto es una ciudad ubicada en el centro de Japón, conocida por ser la antigua capital del país y preservar muchas tradiciones culturales japonesas. Con sus templos históricos, jardines tradicionales y ceremonias de té, es una inmersión en la cultura japonesa.",
        hotels: [
            { id: 19, name: 'Ryotei Rangetsu', rating: 3.7, address: 'Rue de Rivoli', hotelImage: hotelTen, description: 'Ryotei Rangetsu ofrece un ambiente sereno y la auténtica experiencia de la cultura japonesa.' },
            { id: 20, name: 'Grandbell Hotel', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelEleven, description: 'Grandbell Hotel combina el estilo moderno con la elegancia tradicional de Kioto.' },
            { id: 21, name: 'Garria Nijo', rating: 5, address: 'Rue de Louvre', hotelImage: hotelTwelve, description: 'Garria Nijo promete un refugio de lujo con una atención excepcional al cliente.' },
            { id: 22, name: 'Hotel The Knot', rating: 4.7, address: 'Rue de Rivoli', hotelImage: hotelSeven, description: 'Hotel The Knot es ideal para los que buscan confort en un ambiente estiloso y moderno.' },
            { id: 23, name: 'Hotel Granvia', rating: 4.4, address: 'Champ de Mars', hotelImage: hotelEigth, description: 'Hotel Granvia destaca por su conveniente ubicación y su atención al detalle en el servicio.' },
            { id: 24, name: 'Hilton Hiroshima', rating: 3.1, address: 'Rue de Louvre', hotelImage: hotelNine, description: 'Hilton Hiroshima ofrece una experiencia de lujo con vistas impresionantes.' },
        ]
    },
];