import {
  Grid,
  Header,
  List,
} from 'semantic-ui-react'
import {useState} from 'react'
import people from './data'
import Detail from '../components/Detail'

export default function Home() {
  const [detail, setDetail] = useState({})

  return (
    <Grid container stackable reversed="mobile" centered columns={3}>
      <Grid.Column>
        <Header size="medium">Name List</Header>
        <List>
          {people.map(e => 
            <List.Item key={e.id} as="a" onClick={ev => setDetail(e)}>
              {e.name}
            </List.Item>)}
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">Detail</Header>
        <Detail detail={detail} />
      </Grid.Column>
    </Grid>
  )
}