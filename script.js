function addNextPhoto(){
            for (let i=1; i<=100;i++){
            var elemment=document.createElement("div");
            elemment.setAttribute("id","tile");
            var cont=document.getElementById("container");
            cont.appendChild(elemment);


			var newImage=document.createElement("img");
			var newTitle=document.createElement("h3");
			newTitle.innerText="Елемент каталогу номер"+i;
            newImage.src="https://picsum.photos/290/290/?4"+i
            if (i%2==0){
                newImage.setAttribute("class","elemImgGreen");
                newTitle.setAttribute("class","elemTitleGreen")
        }
           else{ newImage.setAttribute("class","elemImg")}
            
            elemment.appendChild(newTitle);
            elemment.appendChild(newImage);
           
			}}