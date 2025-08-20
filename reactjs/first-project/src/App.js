
import React, { useState } from 'react';
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
  const [selectedMember, setSelectedMember] = useState(null);
  const [showBlast, setShowBlast] = useState(false);

  const handlePickRandom = () => {
    const randomIndex = Math.floor(Math.random() * members.length);
    setSelectedMember(members[randomIndex]);
    setShowBlast(true);
    setTimeout(() => setShowBlast(false), 1200); // Animation duration
  };

  return (
    <div className="App">
      <h1 style={{backgroundColor:"blueviolet", textAlign:'left'}}>First Bath</h1>

      <div className='member-container'>
        {members.map((member, index) => (
          <Member key={index} name={member.name} city={member.city} />
        ))}
      </div>

      {/* Result in the middle between member list and button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {selectedMember && (
          <div style={{margin: '32px 0 32px 0', fontWeight: 'bold', position: 'relative', minHeight: '60px', textAlign: 'center'}}>
            {showBlast && (
              <div className="blast-animation">
                🎉🎊💥
              </div>
            )}
            <span style={{
              display: 'inline-block',
              fontSize: showBlast ? '2.2rem' : '1.2rem',
              color: showBlast ? '#d72660' : '#222',
              transition: 'all 0.4s cubic-bezier(.68,-0.55,.27,1.55)'
            }}>
              {showBlast ? `Congratulations!` : 'Your selected member:'} {selectedMember.name} from {selectedMember.city}
            </span>
          </div>
        )}

        {/* Centered button */}
        <button onClick={handlePickRandom} style={{margin: '0 auto 32px auto', padding: '12px 28px', display: 'block', fontSize: '1.1rem', borderRadius: '8px', background: '#7c3aed', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px #0001'}}>Pick Random Member</button>
      </div>
    </div>
  );
}


// Add animation styles
const style = document.createElement('style');
style.innerHTML = `
.blast-animation {
  position: absolute;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
  font-size: 2.5rem;
  animation: blast 1.2s ease;
  pointer-events: none;
  z-index: 2;
}
@keyframes blast {
  0% { opacity: 0; transform: translateX(-50%) scale(0.5); }
  30% { opacity: 1; transform: translateX(-50%) scale(1.2); }
  60% { opacity: 1; transform: translateX(-50%) scale(1.1); }
  100% { opacity: 0; transform: translateX(-50%) scale(0.7); }
}
`;
document.head.appendChild(style);

export default App;
