// console.log(":bipinsnf");
// console.log("bnacbehjbchje");
run();
async function run(){
    let data = await fetch("http://localhost:3000/Hotel");
    let resol = await data.json();
    let show_hotel= document.querySelector(".simple_container");

    show_hotel.style.display="none";

    let show_book= document.querySelector(".show_data");

    show_book.style.display="none";
    // console.log(resol);
    let all_data =resol.map((v)=>{
        return `
        <div class="card">
                    <div class="image_card">
                        <img src='${v.image}' alt="">
                    </div>
                    <div class="card_details">
                        <h1 class="name">${v.name}</h1>
                        <div class="adress"><p>${v.address}</p></div>
                        <div class="rating">
                            <p>${v.Rating}<i class="fa-solid fa-star"></i> </p>
                            <span>(228 Rating)</span>
                            <pre>.Very Good</pre>
                        </div>
                        <div class="allinfo">
                            <p><i class="fa-solid fa-boxes-packing"></i>Elevator</p>
                            <p> <i class="fa-solid fa-wifi"></i>Free Wifi</p>
                            <p><i class="fa-solid fa-ring"></i>Geyser</p>
                            <p><i class="fa-solid fa-tv"></i>TV</p>
                        </div>
                        <div class="button_rate">
                            <div class="pricelist">
                                <div class="rate">
                                    <p>₹${v.price.price}</p>
                                    <del>₹${v.price.Mainprice}</del>
                                    <span>${v.price.offer}</span>
                                </div>
                                <div class="extra">
                                    <p>+ ₹ ${v.price.tax} taxes & fees . per room . per night</p>
                                </div>
                            </div>
                            <div class="button_all">
                                <button class="viewDetails" onclick="ShowDetail('${v.id}','${v.name}')">View Details</button>
                                <button class="bookNow" onclick=" BookNow('${v.id}','${v.name}','${v.image}','${v.Rating}','${v.price.price}','${v.price.Mainprice}')">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>`
    }).join("");
    // console.log(all_data);
    let card=document.querySelector(".card_all_hotels .card_all_hotels_inner ").innerHTML=all_data;
    // console.log(card);
}



 function BookNow(id,name ,img,rating,price,Mainprice){
    let show_hotel= document.querySelector(".simple_container");
    show_hotel.style.display="block";
    show_hotel.innerHTML=`
     <div class="show_outer">
            <div class="show" >
                <div class="inner">
                    <i class="fa-solid fa-xmark" onclick="Close_hotel()"></i>
                </div>
                <div class="card_conatiner">
                    <div class="all_information">
                        <div class="from">
                            <h1>Yay! you just saved 1976 on this booking!</h1>
                        </div>
                        <div class="main_from">
                            <h1> <span>1</span> Enter your details</h1>
                            <p>We will use these details to share your booking infromation</p>
                            <div class="name">
                                <div class="fullname">
                                    <label for="name">Full Name</label>
                                    <input type="text" placeholder="Enter First and last name">
                                </div>
                                <div class="email">
                                    <label for="email">Email Address</label>
                                    <input type="email" placeholder="name@abc.com">
                                </div>
                            </div>
                            <div class="number">
                                <div class="no_main">
                                    <label for="number">Mobile Number</label>
                                    <input type="tel" placeholder="e.g. 1234567890">
                                </div>
                                <div class="addarno">
                                    <label for="addhar_no">Addhar Number</label>
                                    <input type="text" placeholder="e.g. 2112-3332-8877" >
                                </div>
                            </div>
                            <div class="room">
                                <div class="date">
                                    <label for="date"> Enter How many dates Stay</label>
                                    <input type="date" placeholder="Enter the date">
                                </div>
                                <div class="book_room">
                                    <label for="room">How many room you booking </label>
                                    <input type="number" placeholder="Enter rooms Numbers">
                                </div>
                            </div>
                        </div>
                        <button onclick=" return Booking('${id}')">Conform Booking</button>
                    </div>
                    <div class="info_of_hotel">
                        <div class="hotel_name">
                            <div class="main_hotel_info">
                                <div class="para">
                                    <h1> ${name}</h1>
                                    <div class="reating">
                                        <p>${rating}<i class="fa-solid fa-star"></i></p>
                                        <span>(228 Ratings)</span>
                                        <pre>. Very Good</pre>
                                    </div>
                                    <p>1 Night</p>
                                </div>
                                <div class="image">
                                    <img src="${img}" alt="">
                                </div>
                            </div>

                            <div class="roomco">
                                 <p>Classic</p>
                            </div>
    
                            <div class="room_price">
                                <p>Room price for 1 Night X 1 Guest</p>
                                <span>₹4999</span>
                            </div>
                            <div class="discount">
                                <p>Instant discount</p>
                                <span>-₹${Mainprice}</span>
                            </div>
                            <div class="coupon">
                                <p>61% Coupon Discount</p>
                                <span>-₹988</span>
                            </div>
                            <div class="amount">
                                <p>Payable Amount</p>
                                <span>₹${price}</span>
                            </div>
                            <button onclick="pay('${id}')"> Pay Amount </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    console.log(id,name,rating,img)

   

}
function Booking(id){
    console.log(id)
    console.log("booking");
    let name=document.querySelector(".show .card_conatiner .all_information .main_from .name .fullname input")
    let email=document.querySelector(".show .card_conatiner .all_information .main_from .name .email  input")
    let date =document.querySelector(".show .card_conatiner .all_information .main_from .room .date input")
    let room =document.querySelector(".show .card_conatiner .all_information .main_from .room .book_room input")
    let no =document.querySelector(".show .card_conatiner .all_information .main_from .number .no_main input")
        let addhar =document.querySelector(".show .card_conatiner .all_information .main_from .number .addarno input")
    // console.log(name.value,email.value,date.value,room.value,no.value);
    //  console.log(name,email,date,room,no);
     console.log(name);
     console.log(email);
     console.log(date);
     console.log(room);
     console.log(no);
     console.log(addhar);
     if(name.value== ""){
        name.focus();
        return false;
    }
    else if(!(email.value.includes('@') && email.value.includes(".com")))
    {
        email.focus();
        email.value="";
        return false;
    }
  
    else if(no.value.length !==10 ){   
            no.focus();
            no.value="";
            return false;
    } 
    else if(addhar.value.length !==12){
        addhar.focus();
        addhar.value="";
        return false;
    }
    else if(date.value == "")
        {
                 date.focus();
                 return false;
          }
    else if(room.value >0){
        room.focus();
        return false;
    }

    else{
        window.alert("Successful");
        Close_hotel();
        return true;
    }

}
function pay(){
   window.alert("Successful");
   console.log("successful")
   Close_hotel();
}
function Close_hotel(){
    let show_hotel= document.querySelector(".simple_container");
    show_hotel.style.display="none";
}

async function ShowDetail(id,name){
    let data= await fetch(`http://localhost:3000/Hotel/${id}`);
    let resol=await data.json();
    let show_booking= document.querySelector(".show_data");
    show_booking.style.display="block";
    show_booking.innerHTML=`
         <div class="show_data_list">
         <div class="all_data_inner">
         <div class="data_close">
             <i class="fa-solid fa-xmark" onclick="Close()"></i>
         </div>
         <div class="data_Show">
             <div class="images_all">
                 <div class="big_images">
                     <img src='${resol.image}'  alt="">
                 </div>
                 <div class="all_images">
                     <div class="image_one">
                         <img src="${resol.images.one}" onmouseenter="img_one('${resol.images.one}')" alt="">
                     </div>
                     <div class="image_two">
                         <img src="${resol.images.two}" onmouseenter="img_two('${resol.images.two}')" alt="">
                     </div>
                     <div class="image_three">
                         <img src="${resol.images.three}" onmouseenter="img_three('${resol.images.three}')" alt="">
                     </div>
                     <div class="image_four">
                         <img src="${resol.images.four}" onmouseenter="img_four('${resol.images.four}')" alt="">
                     </div>
                     <div class="image_five">
                         <img src="${resol.images.five}" onmouseenter="img_five('${resol.images.five}')" alt="">
                     </div>
                 </div>
             </div>
             <div class="info_of_hotels">
                 <div class="name_addre">
                     <h1>${resol.name}</h1>
                     <p>${resol.address}</p>
                 </div>
                 <div class="rating_hotel">
                     <p>${resol.Rating}<i class="fa-solid fa-star"></i></p>
                     <span>(6777 revenabhe)</span>
                     <pre>. Very good</pre>
                 </div>
                 <div class="room_info">
                     <h1>Hotel policies  </h1>
                     <div class="room_option">
                         <div class="room_size">
                             <h1>Room size:</h1>
                             <p>${resol.Roomsize}</p>
                         </div>
                         <div class="bed">
                             <h1>
                                 Bed Size:
                             </h1>
                             <p>${resol.bed}</p>
                         </div>
                         <div class="smoking">
                             <h1>Smoking Info:</h1>
                             <p>${resol.smoking}</p>
                         </div> 
                     </div>
                     <div class="about_hotel">
                         <h1>About this Hotel</h1>
                        <div class="all_info">
                         <p>${resol.paragraph.allInformation}</p>
                         <p>${resol.paragraph.short}</p>
                         <p>${resol.paragraph.main}</p>
                        </div>
                     </div>
                     <div class="price">
                             <p>₹${resol.price.price}</p>
                             <del>₹${resol.price.Mainprice}</del>
                             <span>${resol.price.offer}</span>         
                     </div>
                 </div>
                 <button onclick="Close()">Back to home page</button>
             </div>
         </div>
            </div> 
            </div>
         `;

    //    console.log(all_data_store);

    
    console.log(resol);
}
function Close(){
    let show_book= document.querySelector(".show_data");
    show_book.style.display="none";
}



function img_one(i){
    let imga=document.querySelector(".show_data .show_data_list .all_data_inner .data_Show .images_all .big_images img");
    // console.log(imga)
    imga.src=i;
    // console.log(1);
}
function img_two(i){
    console.log(2);
    let imga=document.querySelector(".show_data .show_data_list .all_data_inner .data_Show .images_all .big_images img");
    // console.log(imga)
    imga.src=i;
}
function img_three(i){
    console.log(3);
    let imga=document.querySelector(".show_data .show_data_list .all_data_inner .data_Show .images_all .big_images img");
    // console.log(imga)
    imga.src=i;
}
function img_four(i){
    console.log(4);
    let imga=document.querySelector(".show_data .show_data_list .all_data_inner .data_Show .images_all .big_images img");
    // console.log(imga)
    imga.src=i;
}
function img_five(i){
    console.log(5);
    let imga=document.querySelector(".show_data .show_data_list .all_data_inner .data_Show .images_all .big_images img");
    // console.log(imga)
    imga.src=i;
}