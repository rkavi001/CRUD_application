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
                    <button>Edit</button>
                    <button>Delete</button>
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



