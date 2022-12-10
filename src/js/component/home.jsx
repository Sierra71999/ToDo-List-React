import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
/*h1 = todos

div =
  input
  a list (ul)
    list items of todos (li)
       text (p, label, whatver)
       a button to delete*/

/*{fakeToDos.map(
	()=> {
		return(<p>Hello</p>)
	}
	it will spil out three hellos(line 32) bc the let fakeToDos there are three abc*/
const localStorageKey = "ToDos_key";
const Home = () => {
	const [ToDos, setToDos] = useState (["a","b","c"]);
	/*const [inputValue, setInputValue] = useState("");*/
	const [previousToDos, setPreviousToDos] = useState(ToDos);
    useEffect(() =>{
		//console.log("Run Once");
		//console.log(localStorage.getItem(localStorageKey));
		{/*console.log(localStorage.getItem("ToDos_key")); I changed ToDos_key to localStorageKey on line 27 and line 32 because I defined To-Dos_key on line 21*/}
		let localStorageToDos = JSON.parse(localStorage.getItem(localStorageKey));
		setToDos(localStorageToDos);
		setPreviousToDos(localStorageToDos);
		//getAlltoDos();
	}, []);
	/*The useEffect on line 33 deals with length of the To Do List it changes everytime it gets added or deleted which changes the length*/
    useEffect(() =>{
		//console.log("everytime todos changes");
		//console.log(JSON.stringify(ToDOs));
		localStorage.setItem(localStorageKey,JSON.stringify(ToDos));
	}, [ToDos.length]);
    //spread syntax puts array content into the 
       
	console.log(previousToDos);
	console.log(ToDos);
	console.log("=====");
	//why are lines 36 37 27 28 no longer needed after creating line 42
	   let onType =(event)=>{
		if (event.code=="Enter"){
			let newToDos =[...ToDos];
			newToDos.push(event.target.value);
			setToDos(newToDos);
			setPreviousToDos(ToDos);
			/*clear input*/
			event.target.value="";
			
		 }
		 else {
			//setInputValue(event.target.value);
			//console.log(inputValue);
		 }
		
		//console.log(event);

				}
      /* Line 52 input onKeyUp ={onType}. onType is from line 32 onType is a variable*/
	return (
		<div className="text-center">
			<h1>Todos</h1>
			<div>
				{/*add event listener */}
				<input onKeyUp={onType} placeholder ="Enter ToDo"/>
				
				
				<ul>

					{ToDos.map(
						(todo, index)=> {
							return(<li key= {index} >
								<p>{todo}</p>
								
                                <button onClick ={() => {
									let newToDos = [...ToDos];
									newToDos.splice(index,1);
									setToDos(newToDos);
									setPreviousToDos(ToDos)
								}}>X</button>
						         </li>)
						}
					)}
					
				</ul>
				</div>
				<p>
					{ToDos.length}
					{/*This is the Clear Button as well as the action that causes the deleting action(onClick)*/}
					<button onClick ={() => {
						             //setting to an empty array
						             setToDos([]);
									//let newToDos = [];{/*Why is This line empty*/}
									//newToDos.splice(index,1);
                                    //setToDos(newToDos); Theseworked without line 81
									setPreviousToDos(ToDos);
								}}>Erase</button>>
					
				</p>
		{/*This is Undo button*/}
				<button onClick ={() => {
								setToDos(previousToDos);
								}}>Undo</button>
					
				
			</div>
	);
};

export default Home;
