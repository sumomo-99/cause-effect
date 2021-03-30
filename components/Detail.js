import {
  Card,
  Image,
  List,
} from 'semantic-ui-react'

export default function Detail(props) {
  return (
    <Card>
      <Image src={props.detail.avator} />
      <Card.Content>
        <Card.Header>Name: {props.detail.name}</Card.Header>
        <Card.Description>
          <List>
            <List.Item>Street: {props.detail.street}</List.Item>
            <List.Item>City: {props.detail.city}</List.Item>
            <List.Item>Country: {props.detail.country}</List.Item>
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}