import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';



function App() {
  const [activities,setActivities] =useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity] = useState<Activity|undefined>(undefined);
  const [editMode,setEditMode] = useState(false);

  useEffect(() =>{
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  },[])
  function handlSelectActivity(id:string){
    setSelectedActivity(activities.find(x=>x.id === id));
  }
  function handlCancelSelectActivity(){
      setSelectedActivity(undefined);
  }
  function handleFormOpen(id?:string){
    id ? handlSelectActivity(id):handlCancelSelectActivity();
    setEditMode(true);
  }
  function handleFormClose(){
    setEditMode(false);
  }
  return (
  <>
    <NavBar openForm={handleFormOpen}/>
        <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handlSelectActivity}
        cancelSelectActivity={handlCancelSelectActivity}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        />
        </Container>
  </>
             
  );
}

export default App;
