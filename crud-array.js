var id = document.getElementById('id')
var Name = document.getElementById('name')
var qty = document.getElementById('qty')
var price = document.getElementById('price')
var total = document.getElementById('total')
var btn_add = document.getElementById('btn-add')
var btn_update = document.getElementById('btn-update')

btn_add.style.display='flex'
btn_update.style.display='none'


var index=0;
index++
id.value=index;


arrayitemList = [
    // {
    //     'id': 123,
    //     'Name': 'sdda',
    //     'qty': 2,
    //     'price': 100,
    //     'total': 200
    // }
];

getData = () => {
    var texts = ' ';
    texts += `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>QTY</th>
        <th>Price</th>
        <th>Total</th>
        <th>Action</th>
    </tr>
`
    arrayitemList.forEach(item => {
        texts += `
        <tr>
            <td>${item.id}</td>
            <td>${item.Name}</td>
            <td>${item.qty}</td>
            <td>${item.price}$</td>
            <td>${item.total}$</td>
            <td>
                <button class="btn btn-warning btn_update" id="update">Update</button>
                <button class="btn btn-danger btn_delete" id="delete">Delete</button>
            </td>
        </tr>
    `
    });
    document.getElementsByClassName('table')[0].innerHTML = texts;

    function Update()
{
    var update = document.querySelectorAll('#update');
    update.forEach((element,i)=>{
        element.addEventListener('click',function(){
            // alert(888)
            id.value = arrayitemList[i]['id'];
            Name.value = arrayitemList[i]['Name'];
            qty.value = arrayitemList[i]['qty'];
            price.value = arrayitemList[i]['price'];
            total.value = arrayitemList[i]['total'];

            btn_add.style.display='none'
            btn_update.style.display='flex'
            index=i;
        })
    })
}
Update()
}
getData();

btn_add.addEventListener('click', function () {

if(id.value!='' && Name.value!='' && qty.value!='' && price.value!=''){
    arrayitemList.push(
        {
            'id': id.value,
            'Name': Name.value,
            'qty': qty.value,
            'price': price.value,
            'total': total.value
        }
    )
    index++
    id.value=index;
    getData()
    clearField()
    Swal.fire({
        title: "Completed",
        text: "Add data Successfully...",
        icon: "success"
      }); 
}
else{
    Swal.fire({
        title: "Failled!",
        text: "Add data Unsuccessfully!...",
        icon: "error"
      });
}
})
clearField=()=>{
    // id.value='',
    Name.value='',
    qty.value='',
    price.value='',
    total.value=''
}

qty.addEventListener('keyup',function(){
    total.value=qty.value*price.value;
})
price.addEventListener('keyup',function(){
    total.value=qty.value*price.value;
})


// UPDATE INTO TABLE

btn_update.addEventListener('click',function(){
    // alert(123)
    arrayitemList[index]['id']=id.value;
    arrayitemList[index]['Name']=Name.value;
    arrayitemList[index]['qty']=qty.value;
    arrayitemList[index]['price']=price.value;
    arrayitemList[index]['total']=total.value;
    getData();
    clearField();

    index=arrayitemList.length+1;
    id.value=index;

    btn_add.style.display='flex'
    btn_update.style.display='none'
})


