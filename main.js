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

const pushCustomer= async (customer)=>{
    customerDatabase.push(customer);
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
    if (true) {
        if(
            console.log(document.getElementById('btnSaveUpdate')
                .innerHTML.includes('Save Customer'))
        ){
            let name =
                document.getElementById('#name').value;
            let address =
                document.getElementById('#address').value;
            let salary =
                parseInt(document.getElementById('#salary').value);
            let dob =
                document.getElementById('#datepicker').value;
            let customer = new Customer(
                generateCustomerId(),
                name,
                address,
                salary,
                dob
            );
            pushCustomer(customer);
        }

    } else {
        //update
    }
}
