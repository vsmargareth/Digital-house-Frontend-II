let contentRef = document.querySelector('#content');


let noticias = [
  {
    titulo: 'Esse é nosso primeiro post',
    descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur?',
    url: '#',
  },
  {
    titulo: 'Esse é nosso segundo post',
    descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur?',
    url: '',
  },
  {
    titulo: 'Esse é nosso terceiro post',
    descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, consectetur?',
    url: '',
  }
]

//precisamos percorrer esse array,
// usaremos o for mais no futuro usaremos o map
for (let noticia of noticias) {
  contentRef.innerHTML += `
    <article>
        <h1>${noticia.titulo}</h1>
        <p>${noticia.descricao}</p>
        <a href="#">acesse a notícia</a>
    </article>
  `
}