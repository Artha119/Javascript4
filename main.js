class Customer {
    #id;
    #name;
    #address;
    #salary;
    #dob;

    constructor(id, name, address, salary, dob) {
        this.#id = id;
        this.#name = name;
        this.#address = address;
        this.#salary = salary;
        this.#dob = dob;
    }
    getCustomerId(){
        return this.#id;
    }
}

let name =
    document.getElementById('name');
let address =
    document.getElementById('address');
let salary =
    document.getElementById('salary');
let dob =
    document.getElementById('datepicker');


const displayAlert =()=>{
    let alert =
        document.getElementById('save_alert');
    alert.style.display='block';
    setTimeout(()=>{
        alert.style.display='none';
    }, 3000)
}

const pushCustomer= async (customer)=>{
    if(customerDatabase.push(customer)){
        displayAlert();
        clearFields();
    }
}

const clearFields=()=>{
    name.value='';
    address.value='';
    salary.value='';
    dob.value='';
}
const loadTable=()=>{

}

let customerDatabase = []; //['','']

function generateCustomerId() {
    // customer id Format [C-1]
    if (customerDatabase.length == 0) {
        return 'C-1';
    }
    let selectedData =
        customerDatabase[customerDatabase.length - 1];
    if (selectedData) {
        return null;
    } else {
        let selectedLastId =
            selectedData.getCustomerId().toString().split('-')[1]; // [C,5]
        selectedLastId++;
        return 'C-' + selectedLastId;
    }

}

const createUpdateCustomer = () => {
    if(
        document.getElementById('btnSaveUpdate')
            .innerHTML.includes('Save Customer')
    ){

        let customer = new Customer(
            generateCustomerId(),
            name.value,
            address.value,
            parseInt(salary.value),
            dob.value
        );
        pushCustomer(customer);
    }else{

    }


}
