import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private arrPosts: Post[];



  constructor() {

    this.arrPosts = [
      {

        titulo: "Akihabara - La zona de electrónica en Tokyo",
        texto: "La primera vez que fuí a Akihabara pensé que había ido a otro planeta. Es alucinante la cantidad de tiendas, gente, luces y ofertas de todo tipo que puedes encontrar. Desde tiendas otakus, a enormes edificios de electronica, tiendas de belleza y edificios enormes llenos de todo tipo de restaurantes.",
        autor: "Susana S.",
        imagen: "https://japonpop.japonshop.com/wp-content/uploads/2020/04/descarga.jpeg",
        fecha: "04/05/2021",
        categoria: "Barrios"
      },
      {

        titulo: "Kyoto",
        texto: "Kyoto es una ciudad que enamora, llena de tradiciones y mucho mas tranquila que Tokyo. Aquí tienes posibilidades de ver autenticas Geishas, intentar subir el Fushimi Inari, visitar el Templo Heian, el Kiyomizudera,Kinkaku-ji y Ginkaku-ji",
        autor: "Daniel S.",
        imagen: "https://ikigaimatsuri.com/wp-content/uploads/2019/07/sorasak-_UIN-pFfJ7c-unsplash.jpg",
        fecha: "07/04/2019",
        categoria: "Ciudades"
      },
      {
        titulo: "Castillo Okayama",
        texto: "Llamado el Castillo del Cuervo por su color negro, no es un castillo de los mas grandes de Japón pero es uno, desde mi punto de vista, de los mas bonitos que he podido ver. Construido en 1597 y destruido en la Segunda Guerra Mundial, fue reconstruido en 1966",
        autor: "R.Carpin",
        imagen: "https://www.reservasdecoches.com/blog/wp-content/uploads/Castillo-de-Okayama.jpg",
        fecha: "15/03/2018",
        categoria: "Castillos"
      },

      {

        titulo: "Zunda mochi",
        texto: "Es un dulce tipico de Sendai que consiste en un mochi de edamame. Es bastante dulceSe dice que lo inventó Masamune Date. ",
        autor: "Susana S",
        imagen: "https://previews.123rf.com/images/yasuhiroamano/yasuhiroamano1511/yasuhiroamano151100021/49124802-zundamochi-dulce-japon%C3%A9s.jpg",
        fecha: "24/04/2019",
        categoria: "Comida"
      },
      {

        titulo: "Castillo de Himeji",
        texto: "Otro de los castillos mas bonitos que he podido visitar. Su caracteristica principal y una de las cosas que mas llama la atencion es su color blanco. Fue construido como una fortaleza en 1346 y reconstruido en 1580 por Toyotomi Hideyoshi. También conocido como el castillo de la garza blanca, fue declarado Patrimonio de la Humanidad por la Unesco en 1993",
        autor: "R.Carpin",
        imagen: "https://images.adsttc.com/media/images/592d/1906/e58e/ce98/ac00/00e2/slideshow/CO_Wikimedia_user_Oren_Rozen_under_CC_BY-SA_2.0_--_1.jpg?1496127743",
        fecha: "25/07/2020",
        categoria: "Castillos"
      },
      {

        titulo: "Ramen",
        texto: "En mis multiples visitas a Japón, he probado distintos restaurantes de ramen, sin duda para mi uno de los mejores es Sen no Kaze en Kyto. El ramen mas tipico son fideos en una sopa muy sabrosa y normalmente con Chashu como topping, aunque depende la zona hay variaciones",
        autor: "Daniel S.",
        imagen: "https://i.redd.it/qnnqkzn9sjq11.jpg",
        fecha: "01/02/2020",
        categoria: "Comida"
      },

      {

        titulo: "Kiyomizu-dera",
        texto: "Llamado el Templo del Agua Pura, tiene en su complejo la cascada Otowa la cual tiene propiedades terapeuticas, dependiendo de cual de los tres chorros de agua bebas obtendras salud, larga vida o exito en el amor o negocios. Está situado en Kyoto. Es patrimonio de la humanidad desde 1994",
        autor: "Daniel S.",
        imagen: "https://www.iagua.es/sites/default/files/styles/thumbnail-1180x647/public/templo-kiyomizudera.jpg?itok=JasdZEyA",
        fecha: "03/09/2018",
        categoria: "Templos"
      },
      {

        titulo: "Tokyo Tower",
        texto: "Uno de los edificios emblematicos de Tokyo, se trata en realidad de una torre de telecomunicadones y de observacion de 333 metros de altura. En su interior tiene varios miradores y un ascensor exterior que hace que la experiencia de subir al mirador sea inolvidable, tambien hay multitud de tiendas. Las luces nocturas cambian depende la estacion del año",
        autor: "Daniel S.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Tokyo_tower_world_trade.jpg",
        fecha: "09/10/2020",
        categoria: "Edificios"
      },

    ]
  }

  //TODO - concatenar los dos arrays(local y a pincho)
  getAllPosts() {
    let postsString = localStorage.getItem('posts');
    let postArray = postsString ? JSON.parse(postsString) : [];
    return this.arrPosts.concat(postArray);
  }

  agregarPost(post) {
    let postsString = localStorage.getItem('posts');
    let postArray = postsString ? JSON.parse(postsString) : [];


    postArray.push(post)
    localStorage.setItem('posts', JSON.stringify(postArray))

  }

  getCategorias() {
    return [...new Set(this.arrPosts.map(post => post.categoria))]

  }

  getPostsByCategoria(cat) {
    return this.arrPosts.filter(post => post.categoria === cat)
  }



}


