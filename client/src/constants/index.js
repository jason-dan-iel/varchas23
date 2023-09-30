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
      labelText:"Name",
      labelFor:"name",
      id:"name",
      name:"name",
      type:"text",
      autoComplete:"name",
      isRequired:true,
      placeholder:"Name"   
  },
  {
      labelText:"Username",
      labelFor:"username",
      id:"username",
      name:"username",
      type:"text",
      autoComplete:"username",
      isRequired:true,
      placeholder:"Username"   
  },
  {
      labelText:"College",
      labelFor:"college",
      id:"college",
      name:"college",
      type:"text",
      autoComplete:"college",
      isRequired:true,
      placeholder:"College"   
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
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
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
