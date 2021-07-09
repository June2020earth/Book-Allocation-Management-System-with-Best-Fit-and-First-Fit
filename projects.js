
let shelfSpaces = [500,500,500,500,500,1000,1000,1000,1000,1000];
// let categories = ["Thriller","Thriller","Thriller","Thriller","Thriller","Thriller","Thriller","Thriller","Thriller","Thriller"];
let categories = ["Thriller", "Fiction", "Sci-Fi", "Horror","Thriller", "Fiction", "Sci-Fi", "Horror","Sci-Fi", "Horror"];
let takenSpaces = [0,401,302,200,121,543,992,100,777,239];
let freeSpaces=[];
for (let i = 0; i < shelfSpaces.length; i++) {
    freeSpaces.push(shelfSpaces[i]-takenSpaces[i]);
    
}


var newBooks, category;




for (let i = 0; i < 10; i++) {
    let shelfToChangeText = document.getElementById("shelf" + (i+1)+"Desc");
   console.log("hi");
    shelfToChangeText.innerHTML = "Capacity:" + takenSpaces[i] + "/" + shelfSpaces[i] + "<br> Category:"+ categories[i];  
}	


function firstFit() {

    newBooks = +document.getElementsByName("bookAmount")[0].value;
    category= document.getElementsByName("bookCategory")[0].value;

    console.table(category);
    let placed = false;
    let smallest = -1;
    for (let i = 0; i < freeSpaces.length; i++) {
        if ( category == categories[i]&&newBooks <=freeSpaces[i]){
            console.log(freeSpaces[i]);
            smallest= i;
            placed = true;
      
            break;
        }
    }

    if (placed) {
     
        console.log("Success- firstfit"); 

        freeSpaces[smallest]-=newBooks;
        takenSpaces[smallest] += newBooks;
        
        changeShelf(smallest);
        return true;
    }

    else { 
        createShelf (category, newBooks);
    }

   
}


function bestFit () {
    newBooks = +document.getElementsByName("bookAmount")[0].value;
    category= document.getElementsByName("bookCategory")[0].value;

    console.table(category);
    let small = Infinity;
    let smallest =-1;
    let newSmall = Infinity;

    let placed = false;
    for (let i = 0; i < freeSpaces.length; i++) {
        if ( category === categories[i] && newBooks<=freeSpaces[i]){
            placed = true;
            newSmall = freeSpaces[i];
            if (newSmall < small) {small = newSmall; smallest = i}
        }
    }

    if (placed) {
        console.log(small); 
        freeSpaces[smallest]-=newBooks;
        takenSpaces[smallest] += newBooks;
        changeShelf(smallest);
        return true;
    }
    else{
        createShelf (category, newBooks);
    }

}




function createShelf (category, newBooks) {
    var newShelf = document.createElement("div");
    var shelfNum = document.createElement("p");
    var shelfDesc = document.createElement("p");
    shelfNum.className = "shelfNum";
    shelfDesc.className = "shelfDesc";
    newShelf.className = "Shelve10";
    
    shelfNum.innerHTML = "Shelf";
    shelfDesc.innerHTML = "Capacity:" + newBooks + "/500" + "<br> Category:"+ category;
    newShelf.appendChild(shelfNum);
    newShelf.appendChild(shelfDesc);

    document.getElementById("shelves").appendChild(newShelf);
}   


function changeShelf (smallest) {
    console.log(smallest);

    console.log("shelf" + (smallest+1));
    shelfToChange = document.getElementById("shelf" + (smallest+1));

    shelfToChangeText = document.getElementById("shelf" + (smallest+1)+"Desc");
    shelfToChangeText.innerHTML = "Capacity:" + takenSpaces[smallest] + "/"+ shelfSpaces[smallest]  + "<br> Category:"+ categories[smallest];
    shelfToChange.style.backgroundColor= "green";
}






