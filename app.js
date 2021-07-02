var phones={
  oppo:{
      oppof5:{
        name:"oppof5",
        color:"blue",
        price:"20k",
        url:"oppo/f5.jpg"
      } , 
      oppof9:{
        name:"oppof9",
        color:"white",
        price:"25k",
        url:"oppo/f9.jpg"
      }  ,
      oppof11:{
        name:"oppof11",
        color:"black",
        price:"30k",
        url:"oppo/f11.jpg"
      }  
  },
  iphone:{
      iphone5:{
          name:"iphone5",
          color:"black",
          price:"10k",
          url:"iphone/i5.jpg"
        },
      iphonex:{
          name:"iphonex",
          color:"white",
          price:"100k",
          url:"iphone/ix.jpg"
        },
      iphone12:{
          name:"iphone12",
          color:"black",
          price:"10k",
          url:"iphone/i12.jpg"
        },
  },
  samsung:{
      samsungs4:{
          name:"samsungs4",
          color:"grey",
          price:"12k",
          url:"samsung/s4.jpg"
        },    
      samsungs8:{
          name:"samsungs8",
          color:"black",
          price:"60k",
          url:"samsung/s4.jpg"
        },    
      samsungs10:{
          name:"samsungs10",
          color:"white",
          price:"100k",
          url:"samsung/s4.jpg"
        },    
  }
}


function search(){
  var getElement = document.getElementById("search")
  var userInput =getElement.value;
  var mainDiv =document.getElementById("main")
  if (userInput == "oppo"){
    for(var a in phones.oppo){
      var div= document.createElement("div")
      div.setAttribute("class","col-3")
      var img=document.createElement("img")
      img.setAttribute("class","img")
      img.setAttribute("src",phones.oppo[a].url)
      // console.log(phones.oppo[a].url)
    div.appendChild(img);
    mainDiv.appendChild(div)
  
    }
  }
  else if(userInput== "samsung"){
    for(var a in phones.samsung ){
      var div= document.createElement("div")
      div.setAttribute("class","col-3")
      var img=document.createElement("img")
      img.setAttribute("class","img")
      img.setAttribute("src",phones.samsung[a].url)
    
    div.appendChild(img);
    mainDiv.appendChild(div)
    console.log(div)
    }
  }

  
}
