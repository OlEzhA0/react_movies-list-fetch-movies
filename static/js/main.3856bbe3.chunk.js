(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),l=(a(16),a(10)),c=a(1),o=a(2),m=a(4),d=a(3),u=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,n=void 0===a?"":a,r=e.imgUrl,s=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null),i.a.createElement("a",{href:s},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(u,Object.assign({key:e.imdbId},e))})))},p=(a(20),a(5)),v=a.n(p),b=a(9),f=function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n,i,r,s,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://www.omdbapi.com/?apikey=12dad60c&t=".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(i=e.sent).hasOwnProperty("Error")){e.next=9;break}return e.abrupt("return",!1);case 9:r={description:"",title:"",imdbId:"",imdbUrl:"",imgUrl:""},e.t0=v.a.keys(i);case 11:if((e.t1=e.t0()).done){e.next=27;break}s=e.t1.value,e.t2=s,e.next="Title"===e.t2?16:"Plot"===e.t2?18:"Poster"===e.t2?20:"imdbID"===e.t2?22:24;break;case 16:return r.title=i[s],e.abrupt("break",25);case 18:return r.description=i[s],e.abrupt("break",25);case 20:return r.imgUrl=i[s],e.abrupt("break",25);case 22:return r.imdbId=i[s],e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:e.next=11;break;case 27:return l="https://www.imdb.com/title/".concat(r.imdbId,"/?ref_=nv_sr_srsg_0"),r.imdbUrl=l,e.abrupt("return",r);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={searchValue:"",newMovie:null,errorInput:!1,isFinded:!1},e.handleInput=function(t){var a=t.target.value;e.setState((function(){return{searchValue:a}}),(function(){e.state.searchValue?e.setState({errorInput:!1}):e.setState({errorInput:!0,newMovie:null})}))},e.findMovie=function(){var t=e.state.searchValue;if(t){e.setState({errorInput:!1});var a=t.replace(/ /g,"+");f(a).then((function(t){return e.setState({newMovie:t},(function(){e.state.newMovie&&e.setState({isFinded:!0})}))}))}else e.setState({errorInput:!0})},e.reset=function(){e.setState({searchValue:"",newMovie:null,errorInput:!1,isFinded:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.searchValue,n=t.newMovie,r=t.errorInput,s=t.isFinded,l=this.props,c=l.hasAlready,o=l.addFilm;return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault()}},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",value:a,placeholder:"Enter a title to search",className:r?"is-danger input":"input",onChange:this.handleInput})),r&&i.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:this.findMovie},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary",disabled:!s,onClick:function(){n&&o(n),e.reset()}},"Add to the list")))),i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),n?i.a.createElement(u,n):i.a.createElement("p",null,"Write correctly film title."),c&&i.a.createElement("p",null,"This movie already there")))}}]),a}(i.a.Component),w=a(6),M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:w,hasAlready:!1},e.addFilm=function(t){e.setState({hasAlready:!1}),e.state.movies.some((function(e){return e.imdbId===t.imdbId}))?e.setState({hasAlready:!0}):e.setState({movies:[].concat(Object(l.a)(w),[t])})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.movies,a=e.hasAlready;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(h,{movies:t})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(g,{hasAlready:a,addFilm:this.addFilm})))}}]),a}(n.Component);s.a.render(i.a.createElement(M,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3856bbe3.chunk.js.map