import {
    web,
    mobile,
    backend,
    creator
} from "../assets"


import {
  baskey,
  foot,
  chess,
  TT
} from "../assets/eventsicons"

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const events = [
  {
    title : "Cricket",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Football",
    icon : foot,
    price : "Rs 5000 -/"
  },
  {
    title : "Hockey",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Kabbadi",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Squash",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Badminton",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Table Tennis",
    icon : TT,
    price : "Rs 5000 -/"
  },
  {
    title : "Lawn Tennis",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Basketball",
    icon : baskey,
    price : "Rs 5000 -/"
  },
  {
    title : "Volleyball",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Athletics",
    icon : web,
    price : "Rs 5000 -/"
  },
  {
    title : "Chess",
    icon : chess,
    price : "Rs 5000 -/"
  },
  {
    title : "E-Sports",
    icon : web,
    price : "Rs 5000 -/"
  }
]

const signupFields=[
  {
      labelText:"Username",
      labelFor:"username",
      id:"username",
      name:"username",
      type:"text",
      autoComplete:"username",
      isRequired:true,
      placeholder:"Enter Username"   
  },
  {
    labelText:"Email address",
    labelFor:"email",
    id:"email",
    name:"email",
    type:"email",
    autoComplete:"email",
    isRequired:true,
    placeholder:"Email address"   
  },
  {
      labelText:"First Name",
      labelFor:"First Name",
      id:"first_name",
      name:"First Name",
      type:"text",
      autoComplete:"First Name",
      isRequired:true,
      placeholder:"First Name"   
  },
  {
      labelText:"Last Name",
      labelFor:"Last Name",
      id:"last_name",
      name:"Last Name",
      type:"text",
      autoComplete:"Last Name",
      isRequired:true,
      placeholder:" Last Name"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  },
  {
      labelText:"gender",
      labelFor:"gender",
      id:"gender",
      name:"gender",
      type:"radio",
      autoComplete:"",
      isRequired:true,
      placeholder:"Gender",  
  },

]

const loginFields=[
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  }
]

export {services, events, signupFields, loginFields};
