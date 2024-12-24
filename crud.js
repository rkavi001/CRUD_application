let data = [

        {id: 1, name: "abcd", email: "abcd@gmail.com"},
        {id: 2, name: "uvwx", email: "uvwx@gmail.com"}

]
function readAll() {
    // Save initial data to localStorage
    localStorage.setItem("object", JSON.stringify(data));

    // Select the table body
    var tabledata = document.querySelector(".data_table");

    // Retrieve the data from localStorage
    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);

    // Construct table rows using a string
    var elements = "";
    objectdata.forEach(record => {
        elements += `
            <tr>
                <td>${record.name}</td>
                <td>${record.email}</td>
                <td>
                    <button class="edit" onclick={edit(${record.id})}>Edit</button>
                    <button class="delete">Delete</button>
                </td>
            </tr>
        `;
    });

    // Append the constructed rows to the table body
    tabledata.innerHTML = elements;
}

function create(){
     document.querySelector(".create_form").style.display = "block";
     document.querySelector(".add_div").style.display = "none";
}

function add(){
    var name=document.querySelector(".name").value;
    var email=document.querySelector(".email").value;

    var newObj = {id: 3, name: name, email: email};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

function edit(id){
    document.querySelector('.update_form').style.display="block";
    var obj=data.find(record => record.id ===id);
    if(obj){
    document.querySelector('.uname').value=obj.name;
    document.querySelector('.uemail').value=obj.email;
    document.querySelector('.id').value=obj.id;
    }
}

function update(){
    var id = parseInt(document.querySelector('.id').value);
    var name = document.querySelector('.uname').value;
    var email = document.querySelector('.uemail').value;

    // Find the index of the object to update
    var index = data.findIndex(rec => rec.id === id);

    if (index !== -1) {
        data[index] = { id, name, email };

        // Update localStorage
        localStorage.setItem("object", JSON.stringify(data));

        // Refresh the table
        readAll();

        // Hide the update form
        document.querySelector('.update_form').style.display = "none";
    }
}

