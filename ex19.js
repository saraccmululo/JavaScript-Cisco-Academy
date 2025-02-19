let contacts=[{name:'Maxwell Wright',
    phone: '(0191) 719 6495',
    email: 'Curabitur.egestas.nunc@nonummyac.co.uk' },
    {name:'Raja Villarreal',
    phone: '0866 398 2895',
    email: 'posuere.vulputate@sed.com'},
    {name:'Helen Richards',
    phone: '0800 1111',
    email: 'libero@convallis.edu'}];

let control = true;

while(control){

let choice=prompt("Choose one of the options below: 1) display the first contact on the list; 2) show the last contact on the list, 3) add a new contact to the list, 4) display all contacts, sort the list: 5) by name, 6)by phone, 7) by email, OR 8) exit the program.")

switch (choice){
    case "1":
        alert (`The first contact on the list is: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;
    case "2":
        let lastPosition=contacts.length -1;
        alert (`The last contact on the list is:${contacts[lastPosition].name} / ${contacts[lastPosition].phone} / ${contacts[lastPosition].email}`);
        break;
    case "3":
        let newContact= {};
        newContact.name=prompt("Enter your name:");
            if (newContact.name !=='' /*or !=null*/){ 
                contacts.push(newContact.name); 
            }else{
                alert ("Operation could not be executed. Name field is missing. Please, try again.");
                do{
                    newContact.name=prompt("Enter your name:");
                } while (newContact.name=='')
            }
        newContact.phone=prompt("Enter your phone:");
            if (newContact.phone !==''){ 
                contacts.push(newContact.phone);
            }else{
                alert ("Operation could not be executed. Phone field is missing.");}
        newContact.email=prompt("Enter your email:");
            if (newContact.email !==''){ 
                contacts.push(newContact.email);
            }else{
                alert ("Operation could not be executed. Email field is missing.");}
        alert (`The new contact is:${newContact.name} / ${newContact.phone} / ${newContact.email}`);
        break;
    
    case "4": 
        alert ('Displaying all the contacts:');
        for (eachContact of contacts){ 
            alert(eachContact.name+" / "+eachContact.phone+" / "+eachContact.email);}
        break;

    case "5":
        contacts.sort((a, b) => a.name.localeCompare(b.name));
            for (eachContact of contacts){
                console.log(`${eachContact.name}/${eachContact.phone}/${eachContact.email}`);}
        break;
        
    case "6":
        contacts.sort((a, b) =>a.phone.localeCompare(b.phone));
            for (eachContact of contacts){
                console.log(`${eachContact.phone}/${eachContact.name}/${eachContact.email}`);}
    break;
          
    case "7":
        contacts.sort((a, b) => a.email.localeCompare(b.email));
            for (eachContact of contacts){
                console.log(`${eachContact.email}/${eachContact.name}/${eachContact.phone}`);}
    break;
    
    case "8":
        alert('Quitting the program');
        control = false;
        break;
    
    default:
        alert('This is not an valid option');
        break;
    }
}

let showContact=function(contacts,i){
    if(contacts.instanceOfArray && contacts[i]){
        console.log(`${contacts[i].name}/${contacts[i].phone}/${contacts[i].email}`);
    }
}
let showAllContacts=function(contacts){
    if(contacts.instanceOfArray){
        for(contact of contacts){
        console.log(`${contact.name}/${contact.phone}/${contact.email}`);
        }   
    }
}
let addNewContact=function(contacts, name, phone, email){
    if(contacts.instanceOfArray && name && phone && email){
       contacts.push({name: name,
                    phone: phone,
                    email: email});
       }
    }
