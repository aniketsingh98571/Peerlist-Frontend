import mock from '../assets/images/mock.png'
import reject from  '../assets/images/reject.png'
import applied from  '../assets/images/applied.png'
import shortlisted from  '../assets/images/shortlisted.png'
export const mockData={
    'APPLIED':[
        {
            id:"1",
            name:"Esther Horward",
            bio:"Cloud Consultant at Rapid Circle",
            mobile:"8582525856",
            email:'abc@gmail.com',
            image:mock,
            experience:'11y 6m',
            offer:'Yes',
            notice:'30 days',
            applied:'1d',
            reference:"maddie",
            status:'applied'
        },
        {
            id:"2",
            name:"Esther Alexander",
            bio:"Cloud Consultant at Rapid Square",
            mobile:"8582525826",
            email:'cdb@gmail.com',
            image:mock,
            experience:'11y 7m',
            offer:'No',
            notice:'35 days',
            applied:'1d',
            reference:"",
            status:'applied'
        },
        {
            id:"3",
            name:"Guy Hawkins",
            bio:"Cloud Consultant at Rapid Rectange",
            mobile:"8582525829",
            email:'gef@gmail.com',
            image:mock,
            experience:'12y 7m',
            offer:'No',
            notice:'15 days',
            applied:'1d',
            reference:"",
            status:'applied'
        }
    ],
    'REJECTED':[
        {
            id:"4",
            name:"Ronalds",
            bio:"Cloud Consultant at Rapid Telcom",
            mobile:"8582528826",
            email:'lkg@gmail.com',
            image:mock,
            experience:'11y 9m',
            offer:'No',
            notice:'45 days',
            applied:'2d',
            reference:"",
            status:'rejected'
        }
    ],
    'SHORTLISTED':[
        {
            id:"5",
            name:"Ronalds Jain",
            bio:"Cloud Consultant at Rapid Bluetooth",
            mobile:"8588528826",
            email:'wo@gmail.com',
            image:mock,
            experience:'11y 11m',
            offer:'No',
            notice:'Immediate',
            applied:'5d',
            reference:"",
            status:'shortlisted'
        }
    ]
}
export const lists = [
    {
        name:"APPLIED",
        image:applied,
        background:'applied',
        id:"1"
    },
    {
        name:"REJECTED",
        image:reject,
        background:'rejected',
        id:"2"
    },
    {
        name:"SHORTLISTED",
        image:shortlisted,
        background:'shortlisted',
        id:"3"
    }
];