<template>
  <!--Inicio de código com o catálogo dos filmes-->
  <div class="divMaster">

    <div class="header">
      <h1>Mercadou | App <font>Vue.js</font> - Star Wars API</h1>
    </div>

    <div class="searchCharacter">
      <div class="searchEsquerda">
          <p>Procure por personagens dos filmes:</p>
      </div>
      <div class="searchDireita">
        <input id="pesquisa" type="text" class="inputSearch">
        <button id="btn" v-on:click="pesquisarPersonagens()" class="btnSearch2"><i></i></button>
      </div>
    </div>

    <button id="btn" v-on:click="listarFilmes()" class="btnSearch"><i>Clique para visualizar o catálogo!</i></button>
    
    <!--Exibição dos Filmes-->
    <div v-for="filme in grupoFilmes" :key="filme.title">
      <div class="containerItem">
        <div class="card">
          <div class="title">
            <div class="sliderTitle">
              <h3>{{filme.title}}</h3>
            </div>
          </div>

          <!--Card do Filme-->
          <div class="flip-card">
            <div class="flip-card-inner">

              <!--Parte da Frente-->
              <div class="flip-card-front">
                <div class="sliderBody">
                  
                  <img v-bind:src="`https://starwars-visualguide.com/assets/img/films/${filme.url.replace(/[^1-6 ]/g,'')}.jpg`"/>
                </div>
              </div>

              <!--Parte de Trás-->
              <div class="flip-card-back">
                <div class="back-header">
                  <h2>{{filme.title}}</h2>
                </div>
                <div class="back-footer1">
                  
                  <p>Título: {{filme.title}}</p>
                  <p>Diretor: {{filme.director}} </p> 
                  <p>Produtor: {{filme.producer}}</p>
                  <p>Episódio: {{filme.episode_id}}</p>
                  <p>Data de lançamento: {{filme.release_date}}</p>
                  
                </div>
              </div>

             </div>
           </div>

         </div>
       </div>
       
     </div>  
     

    <!--Exibição dos Personagens-->
    <div v-for="personagem in grupoPersonagens" :key="personagem.name">
      <div class="containerItem">
        <div class="card">
          <div class="title">
            <div class="sliderTitle">
              <h3>{{personagem.name}}</h3>
            </div>
          </div>

          <!--Card do Personagem-->
          <div class="flip-card">
            <div class="flip-card-inner">
              <!--Card - Parte da Frente-->
              <div class="flip-card-front">
                <div class="sliderBody">
                  <img v-bind:src="`https://starwars-visualguide.com/assets/img/characters/${personagem.url.replace(/[^0-83 ]/g,'')}.jpg`"/>
                  
                </div>
              </div>

              <!--Card - Parte de Trás-->
              <div class="flip-card-back">
                <div class="back-header">
                  <h2>{{personagem.name}}</h2>
                </div>
                <div class="back-footer">
                
                  <p>Altura: {{personagem.height}}</p>
                  <p>Data de nascimento: {{personagem.birth_year}} </p> 
                  <p>Cor do Cabelo: {{personagem.hair_color}}</p>
                  <p>Cor do olho: {{personagem.eye_color}}</p>
                  <p>Peso: {{personagem.mass}}</p>
                  <p>Gênero Sexual: {{personagem.gender}}</p>
                  
                </div>
                
              </div>
            
             </div>
           </div>

         </div>
       </div>
     </div>
   </div>  
   
</template>
<script>

</script>
<script>

//Declarando métodos das funções de filmes e personagens
export default {
  name: 'vueExibicao',
  data: function(){
    return {
      grupoFilmes: [],
      grupoPersonagens: []
      
    }

  },
  methods: {
    listarFilmes: function(){ //Função para listar os filmes e declarar as constantes dos filmes, chamando a API
      this.grupoFilmes = [];
      const url = `https://swapi.dev/api/films/?search=${"A New Hope"}`;
      const url2 = `https://swapi.dev/api/films/?search=${"The Empire Strikes Back"}`;
      const url3 = `https://swapi.dev/api/films/?search=${"Return of the Jedi"}`;
      const url4 = `https://swapi.dev/api/films/?search=${"The Phantom Menace"}`;
      const url5 = `https://swapi.dev/api/films/?search=${"Attack of the Clones"}`;
      const url6 = `https://swapi.dev/api/films/?search=${"Revenge of the Sith"}`;
            
       fetch(url)
        
                .then(response => response.json())
                .then(response => {
                    response.results.map(filme => {
                        this.grupoFilmes.push(filme);
                        
                    });
                });

        fetch(url2)
                .then(response => response.json())
                .then(response => {
                    response.results.map(filme => {
                        this.grupoFilmes.push(filme);
                    });
                });

        fetch(url3)
                .then(response => response.json())
                .then(response => {
                    response.results.map(filme => {
                        this.grupoFilmes.push(filme);
                    });
                });

        fetch(url4)
                .then(response => response.json())
                .then(response => {
                    response.results.map(filme => {
                        this.grupoFilmes.push(filme);
                    });
                });

        fetch(url5)
                .then(response => response.json())
                .then(response => {
                    response.results.map(filme => {
                        this.grupoFilmes.push(filme);
                    });
                });

        fetch(url6)
                .then(response => response.json())
                .then(response => {
                    response.results.map(filme => {
                        this.grupoFilmes.push(filme);
                    });
                });
},
    //Função para listar os personagens
    listarPersonagens: function(nome){
      this.grupoPersonagens = [];
      const url = `https://swapi.dev/api/people?search=${nome}`; //chamando a API

            
       fetch(url)
                .then(response => response.json())
                .then(response => {
                    response.results.map(personagem => {
                        this.grupoPersonagens.push(personagem);
                    });
                });
    },
    //Função para a barra de pesquisa dos personagens dos filmes
    pesquisarPersonagens: function(){
      let campo_pesquisa = document.querySelector("#pesquisa").value
      if(campo_pesquisa != ""){
        this.listarPersonagens(campo_pesquisa);
      }
    }
    
  }

  }


</script>

<!-- Atributos do CSS para a estilização da página web-->
<style scoped>
*{
  font-family: Verdana;
  text-shadow: 1px 1px 10px #e5e900;
}
@media only screen and (max-device-width: 650px) {
  h1{
    font-size: 16px;
    
  }
  p{
    font-size: 12px;
  }
  .header{
    width: 100%;
  }
}
.divMaster{
  width: 100%;
  height: auto;
}
.header{
    background-color: #0a0a0a;
    width: 50%;
    height: 100px;
    padding-top: 1%;
    text-align: center;
    margin-left: 24%;
    font-family: Verdana;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #e5e900;
    text-shadow: 1px 1px 10px #e5e900;
}
h1 font{
  color: #e5e900;
}

.searchCharacter{
    width: 100%;
    height: 80px;
    margin-top: 4%;
    font-family: Verdana;
    color: #ffffff;
    font-size: 14px;
}

.searchCharacter label{
  margin-left: auto;
  margin-top: 0.8%;
  margin-right: 1%;
  float: left;
}

.searchEsquerda{
  width: 40%;
  height: 100%;
  text-align: right;
  float: left;
}

.searchEsquerda p{
  margin-right: 10px;
}

.searchDireita{
  width: 60%;
  height: 100%;
  float: left;
}

.inputSearch{
    width: 45%;
    height: 25px;
    margin-top: 7px;
    float: left;
}

.btnSearch{
    width: 280px;
    height: 30px;
    display: block;
    text-align: center;
    margin-top: 8px;
    margin-left: 10px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
}
.btnSearch1{
    width: 100px;
    height: 35px;
    display: block;
    text-align: center;
    margin-top: -80px;
    margin-left: 10px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
}

.btnSearch2{
    width: 30px;
    height: 30px;
    display: block;
    text-align: center;
    margin-top: 8px;
    margin-left: 10px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    background-image: url(../img/searchIcon.png);
    background-repeat: no-repeat;
    
}

button:focus {outline:0;}
.btnSearch i{
    width: 300px;
    height: 20px;
    background-size: contain;
    background-image: url(../img/searchIcon.png);
    background-repeat: no-repeat;
    display: inherit;
}
.btnSearch:hover{
    background-color: rgb(187, 187, 187);
    transition: 0.2s;
}

.btnSearch2:hover{
  background-color: rgb(187, 187, 187);
    transition: 0.2s;
}

.item{
    width: 15%;
    height: 400px;
    float: left;
    margin-right: 20px;
    margin-left: 40px;
    margin-top: 30px;
}
.sliderTitle{
    width: 100%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    font-family: verdana;
    color: #ffffff;
}
.sliderBody{
    width: 250px;
    height: 500px;
}
.sliderBody img{
    width: inherit;
    height: inherit;
}
.card{
  width: 250px;
  height: 350px;
  margin-top: 80px;
  margin-left: 50px;
  margin-bottom: 150px;
  float: left; 
}
.title{
  text-align: center;
  margin: 40px auto 30px;
}
.flip-card{
  width: 250px;
  height: 500px;
  margin: auto;
  cursor: pointer;
}
.flip-card-back{
  background-color: #000000;
  color: #ffffff;
  transform: rotateY(180deg);
  z-index: 1;
}
.flip-card-back .back-header{
  height: 45%;
  text-align: center;
}
.flip-card-back .back-header img{
  width: 50%;
  margin-top: 20px;
}
.flip-card-inner{
  position: relative;
  height: 100%;
  transition: transform 0.1s;
  transform-style: preserve-3d;
}
.flip-card-back, .flip-card-front{
  position: absolute;
  width: 100%;
  height: 100%;
}
.flip-card:hover .flip-card-inner{
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.flip-card-back .back-footer{
  height: 48%;
  padding: 0 15px;
}
.back-footer p{
  text-align: left;
  margin: 2px;
  padding: 0;
}
</style>