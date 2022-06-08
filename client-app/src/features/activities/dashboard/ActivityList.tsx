import React  from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
interface Props{
    activities:Activity[];
    selectActivity:(id:string) =>void;
}
export function ActivityList({activities,selectActivity}:Props){


    return(
        <>
        <Segment>
        <Item.Group divided>
            {activities.map(activ =>(
                <Item key={activ.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activ.title}</Item.Header>
                        <Item.Meta>{activ.date}</Item.Meta>
                        <Item.Description>
                            <div>{activ.description}</div>
                            <div>{activ.city},{activ.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={()=>selectActivity(activ.id)} floated='right' content='view' color='blue'/>
                            <Label basic content={activ.catregory}></Label>
                        </Item.Extra>
                    </Item.Content> 
                </Item>
            ))}
        </Item.Group>
        </Segment>
        </>
       
    )
}