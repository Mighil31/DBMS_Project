const OrderToggle=document.querySelector('.DC .Toggle .Order');
const CustomerToggle=document.querySelector('.DC .Toggle .Customer');
const Customer=document.querySelectorAll('.DC .Clerk-Customer');
const Order=document.querySelectorAll('.DC .Clerk-Orders');
const OrderDetails=document.querySelectorAll('.DC .Clerk-Orders .Order-details');
const CustomerDetails=document.querySelectorAll('.DC .Clerk-Customer .Customer-details');
const RefreshButton=document.querySelector('.DC .Refresh');

//Toggle
OrderToggle.addEventListener('click',(e)=>{
  e.preventDefault();
  Order[0].classList.add('Clerk-Orders');
  OrderToggle.classList.add('Active');
  CustomerToggle.classList.remove('Active');
  OrderToggle.classList.remove('Order');
  CustomerToggle.classList.add('Customer');
  Order[0].classList.remove('OffScreen');
  Customer[0].classList.add('OffScreen');
  Customer[0].classList.remove('Clerk-Customer');
});

CustomerToggle.addEventListener('click',(e)=>{
 
  Customer[0].classList.add('Clerk-Customer');
  e.preventDefault();
  CustomerToggle.classList.add('Active');
  CustomerToggle.classList.remove('Customer');
  OrderToggle.classList.remove('Active');
  OrderToggle.classList.add('Order');
  Customer[0].classList.remove('OffScreen');
  Order[0].classList.add('OffScreen');
  Order[0].classList.remove('Clerk-Orders');
});


// Pass these to a function for dynamic record
// <div class="detail">
//                 <h3>Order ID:123123123</h3>
//                 <p><span>Customer Name:</span>Rajan</p>
//                 <p><span>Dellivery address:</span>221B Bakers Street,Rajapalayam,Newyork</p>
//                 <p><span>Order total:</span>$943</p>             
// </div>

// <div class="detail">
//             <h3>Customer name:Holmes</h3>
//             <p><span>Address:</span>221B Bakers Street,Rajapalayam,newyork</p>
//             <p><span>Phone number:</span>93849091294</p>
//             <button>Details</button>
// </div>



const CustomerData={
  "CustomerName":"",
  "Address":"",
  "Phone":"",
  "Email":""
}

function getCustomerDetail(CustName,Address,Phone,Email){

  return(
    `<div class="detail">
    <h3>Customer name:${CustName}</h3>
    <p><span>Address:</span>${Address}</p>
    <p><span>Phone number:</span>${Phone}</p>
    <p><span>Email:</span>${Email}</p>
    <button>Details</button>
    </div>`
  );
}
async function FetchCustomerDetails(){
  
  let url = 'https://randomuser.me/api/?results=1';
  let response = await fetch(url);
  let commits = await response.json();
  CustomerData.CustomerName=commits.results[0].name.first;
  CustomerData.Address=FetchAddress(commits);
  CustomerData.Email=commits.results[0].email;
  CustomerData.Phone=commits.results[0].phone;
  return true;
}

async function AddCustomerDetail(){
  
  await FetchCustomerDetails();
  const DetailRaw1=getCustomerDetail(CustomerData.CustomerName,CustomerData.Address,CustomerData.Phone,CustomerData.Email);
  const DetailParsed1=new DOMParser().parseFromString(DetailRaw1,"text/xml").childNodes[0];
  const Detail1=DetailParsed1.cloneNode(true);
  CustomerDetails[0].appendChild(Detail1)
};




//general functions

function FetchAddress(commits){
  const number=commits.results[0].location.street.number;
  const street=commits.results[0].location.street.name;
  const city=commits.results[0].location.city;
  const state=commits.results[0].location.state;
  const country=commits.results[0].location.country;
  const postcode=commits.results[0].location.postcode;
  const Address=StringifyAddress(number,street,city,state,country,postcode);
  return Address;
}

function StringifyAddress(number,street,city,state,country,postcode){
  const Address=`${number},${street},${city},${state},${country},${postcode}`
  return Address;

}

//general functions


///FETCHING ORDER DETAILS DYNAMICALLY
const OrderData={
  "OrderID":"",
  "Customername":"",
  "Address":"",
  "Total":"",
}

function getOrderDetail(ID,CustName,Address,Total){

  return(
    `<div class="detail">
        <h3>Order ID:${ID}</h3>
        <p><span>Customer Name:</span>${CustName}</p>
        <p><span>Delivery address:</span>${Address}</p>
        <p><span>Order total:</span>${Total}</p>
    
    </div>`
  );
}




async function FetchOrderDetails(){
  
    let url = 'https://randomuser.me/api/?results=1';
    let response = await fetch(url);
    let commits = await response.json();
    OrderData.OrderID=commits.info.seed;
    OrderData.Customername=commits.results[0].name.first;
    OrderData.Total=commits.results[0].dob.age*10;
    OrderData.Address=FetchAddress(commits);
    return true;
}

async function AddOrderDetail(){
  
    await FetchOrderDetails();
    const DetailRaw=getOrderDetail(OrderData.OrderID,OrderData.Customername,OrderData.Address,OrderData.Total);
    const DetailParsed=new DOMParser().parseFromString(DetailRaw,"text/xml").childNodes[0];
    const Detail=DetailParsed.cloneNode(true);
    OrderDetails[0].appendChild(Detail);
};




RefreshButton.addEventListener('click',async ()=>{


  let i=0;
  let Random=Math.ceil(Math.random()*4);
  while(i<Random)
  {
  await AddOrderDetail();
  await AddCustomerDetail();
  i++
  }

});

//AOS INITIALISTAION
AOS.init({
  duration: 800,
  easing: 'ease-out-back',
  delay: 100,
});