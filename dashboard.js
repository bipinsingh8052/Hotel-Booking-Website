async function data_display(){
    // console.log("nakjcn")
    let fet =await fetch("http://localhost:3000/HotelData");
    let dat= await fet.json();
    let all_data_info = dat.map((v)=>{
        return `
         <tr>
            <td>${v.id}</td>
            <td>${v.booking.number}</td>
            <td>${v.name}</td>
            <td>${v.booking.addharno}</td>
            <td>${v.booking.date}</td>
            <td>${v.booking.room}</td>
            <td>${v.booking.name}</td>
        </tr>
        ` 
    }).join("")
    let allFile=document.querySelector(".all_file");
    // console.log(allFile);
    // console.log(all_data_info)

    let information =`<div class="bookdetails">
        <table>
              <tr>
                            <th>Booking ID</th>
                            
                            <th>Mobile No: </th>
                            <th>Hotel Name</th>
                            <th>Addhar No:</th>
                            <th>Booking Date</th>
                            <th>Rooms:</th>
                            <th>Coustmor Name</th>
                        </tr>
            ${all_data_info}
        </table>
    </div>`;

     allFile.innerHTML=information; 

    // console.log(information)
}
data_display();