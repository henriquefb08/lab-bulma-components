import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import Button from './buttons/buttons.js'

const App = () => {
  return ( <div>
<Navbar/> 
<FormField label="Name"  type="text"  placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />;

<Button isSmall isDanger className="is-rounded my-class"> Button 1</Button>
<Button isSmall isSuccess>Button 2</Button>
  
  </div> 
  ) 

};

export default App;


