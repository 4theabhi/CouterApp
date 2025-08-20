import './App.css';
import { Member } from './Member';

// Dummy JSON array of objects with name and city
const members = [
  { name: 'Jagadeesh', city: 'Hyderabad' },
  { name: 'MohanRao', city: 'Markapur' },
  { name: 'Anjali', city: 'Bangalore' },
  { name: 'Ravi', city: 'Chennai' },
  { name: 'Priya', city: 'Mumbai' },
  { name: 'Suresh', city: 'Delhi' },
  { name: 'Kiran', city: 'Pune' },
  { name: 'Sunita', city: 'Kolkata' },
  { name: 'Amit', city: 'Ahmedabad' },
  { name: 'Neha', city: 'Jaipur' },
  { name: 'Vikram', city: 'Lucknow' },
  { name: 'Divya', city: 'Bhopal' },
  { name: 'Manoj', city: 'Patna' },
  { name: 'Sneha', city: 'Surat' },
  { name: 'Arjun', city: 'Kanpur' },
  { name: 'Meena', city: 'Nagpur' },
  { name: 'Rahul', city: 'Indore' },
  { name: 'Pooja', city: 'Thane' },
  { name: 'Deepak', city: 'Agra' },
  { name: 'Shreya', city: 'Varanasi' },
  { name: 'Naveen', city: 'Visakhapatnam' },
  { name: 'Lakshmi', city: 'Ludhiana' },
  { name: 'Santosh', city: 'Madurai' },
  { name: 'Geeta', city: 'Nashik' },
  { name: 'Ramesh', city: 'Faridabad' }
];

function App() {

  return (
    <div className="App">
      <h1 style={{backgroundColor:"blueviolet", textAlign:'left'}}>First Bath</h1>

      <div className='member-container'>
        {members.map((member, index) => (
          <Member key={index} name={member.name} city={member.city} />
        ))}
      </div>
    </div>
  );
}

export default App;
