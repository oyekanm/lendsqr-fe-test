
interface data {
    name: string,
    email: string,
    phone: string,
    date: string,
    organization: string,
    status: string
    id:string,
    gender:string
}
export const OtherDetailData =({date,email,gender,id,name,organization,phone,status}:data) =>{
  return [
    {
        grid:5,
        header:"Personal Information",
        sub:[
            {
                title:"full name",
                text:name
            },
            {
                title:"phone number",
                text:phone
            },
            {
                title:"email address",
                text:email
            },
            {
                title:"bvn",
                text:phone
            },
            {
                title:"gender",
                text:gender
            },
            {
                title:"marital status",
                text:"single"
            },
            {
                title:"children",
                text:"none"
            },
            {
                title:"type of residence",
                text:"parent's apartment"
            },
        ]
    },
    {
        grid:4,
        header:"Education and Employment",
        sub:[
            {
                title:"level of education",
                text:"B.Sc"
            },
            {
                title:"employment status",
                text:"employed"
            },
            {
                title:"sector of employment",
                text:"fintech"
            },
            {
                title:"duration of employment",
                text:"2 years"
            },
            {
                title:"office email",
                text:email
            },
            {
                title:"monthly income",
                text:"₦200,000.00- ₦400,000.00"
            },
            {
                title:"loan repayment",
                text:"40,000"
            }
        ]
    },
    {
        grid:4,
        header:"Socials",
        sub:[
            {
                title:"twitter",
                text:`@${name?.split(" ").join("_")}`
            },
            {
                title:"facebook",
                text:name
            },
            {
                title:"instagram",
                text:`@${name?.split(" ").join("_")}`
            },
        ]
    },
    {
        grid:4,
        header:"Guarantor",
        sub:[
            {
                title:"full name",
                text:"Debby Ogana"
            },
            {
                title:"phone number",
                text:phone
            },
            {
                title:"email address",
                text:"debby@gmail.com"
            },
            {
                title:"relationship",
                text:"sister"
            },
        ]
    },
  ]
}
