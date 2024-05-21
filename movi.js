
// function myfun(){
//     let search = document.getElementById('search').value;
//     console.log(search);

//     let Api = '1dee4a06'

//     const getmovi = async(movi)=>{
//         const url = ` https://www.omdbapi.com/?t=${movi}&apikey=${Api}`;
//         const result = await fetch(url);
//         const data = await result.json()
//         console.log(data.Poster);
//         let add_card = document.getElementById('car');

     
  
       

//     }
//     getmovi(search)




// }
// let key = '1dee4a06';
// let search = 'rahul'

// const url = ` https://www.omdbapi.com/?t=${search}&apikey=${key}`;

// const getmovi = async(api)=>{
//   const result = await fetch(api);
//   const data = result.json();
//   console.log(data[2].Object);
// }
// getmovi(url);


let form = document.querySelector('form');
// console.log(form);
let search = document.getElementById('search');
let card = document.getElementById('add_card');
let body = document.querySelector('body');
body.style.fontFamily = '"Kanit", sans-serif';
body.style.fontWeight = '200';
card.style.color = 'white'


let Api = '1dee4a06';

let getmovi = async (movi)=>{
	const url = ` https://www.omdbapi.com/?t=${movi}&apikey=${Api}`;
	const responce = await fetch(url);
	const data = await responce.json();
	// console.log(data);
	return shomovi(data)
}

let shomovi = (data)=>{
	
	// if(data.Error == 'Movie not found!'){
	// 	// document.write(data.Response)
	// }
	if(data.Response === 'True'){

	
		card.innerHTML = `
		<center><img class="card-img-top" style="width: 55%;" src=${data.Poster} alt="Card image cap"></center>
		<div class="card-body">
			<h3 class="card-title">Movise: ${data.Title}</h3>
			<p class="card-text">${data.Plot}</p>
		</div>
		<ul class="list-group list-group-flush">
			<li id="add_card1"  class="list-group-item">${data.Year}</li>
			<li id="add_card1"  class="list-group-item">${data.Ratings[0].Value}</li> 
			<li id="add_card1"  class="list-group-item">Language: ${data.Language} ${' '}  </li>
			<li id="add_card1"  class="list-group-item">${'Genre: '+ data.Genre}</li>
		</ul>
		`
	}
	else{
		card.innerHTML = `<h1>${data.Error}</h1>`
	}
}


form.addEventListener(
	'submit',
	async function rd(event){
		// console.log(search.value);
		getmovi(search.value);
		event.preventDefault();
	}
		
)