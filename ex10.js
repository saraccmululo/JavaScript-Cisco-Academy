let contacts=[{name:'Maxwell Wright',
    phone: '(0191) 719 6495',
    email: 'Curabitur.egestas.nunc@nonummyac.co.uk' },
    {name:'Raja Villarreal',
    phone: '0866 398 2895',
    email: 'posuere.vulputate@sed.com'},
    {name:'Helen Richards',
    phone: '0800 1111',
    email: 'libero@convallis.edu'}]

let choice=prompt("Choose one of the options below: 1) show the first contact on the list; 2) show the last contact on the list, 3) add a new contact to the list.")
switch (choice){
    case "1":
        alert (`The first contact on the list is: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;
    case "2":
        let lastPosition=contacts.length -1;
        alert (`The last contact on the list is:${contacts[lastPosition].name} / ${contacts[lastPosition].phone} / ${contacts[lastPosition].email}`);
        break;
    case "3":
//         let newContact= {};
//             newContact.name=prompt("Enter your name:");
//             newContact.phone=prompt("Enter your phone:");
//             newContact.email=prompt("Enter your email:");
//         if (newContact.name != '' && newContact.phone != '' && newContact.email != ''){ 
//             contacts.push(newContact);
//             alert (`The newly added contact is:${newContact.name} / ${newContact.phone} / ${newContact.email}`);
//         }else{
//             alert ("Operation could not be executed. At least one of the fields are missing.");
//         }
//         break;
//     default:
//             alert('This is not an valid option');
// }

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
                alert ("Operation could not be executed. Phone field is missing.");throw new Error();}
        newContact.email=prompt("Enter your email:");
            if (newContact.email !==''){ 
                contacts.push(newContact.email);
            }else{
                alert ("Operation could not be executed. Email field is missing.");throw new Error();}
        alert (`The new contact is:${newContact.name} / ${newContact.phone} / ${newContact.email}`);
            break;
        default:
            alert('This is not an valid option');
        }