import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import { InputGroup, Button, FormControl, Container, ListGroup } from 'react-bootstrap'

const App = () => {
  const [ value, setValue ] = useState('')
  const [ list, setList ] = useState (
    localStorage.getItem('list') ?
    JSON.parse(localStorage.getItem('list')): []
  )
  const handelSubmit = e => {
    e.preventDefault()
    setList(prev => [...prev, { id: list.length, value }])
    setValue('')
  }
  const handelRemove = id => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [ list ])

  return (
    <>
      <Header />
      <Container className='mt-4'>
        
        <form onSubmit={e => handelSubmit(e)}>
          <InputGroup>
            <FormControl
              placeholder='کار من...'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <InputGroup.Prepend>
              <Button
                type='submit'
                variant='success'
                size='sm'
              >افزودن</Button>
            </InputGroup.Prepend>
          </InputGroup>
        </form>

        <ListGroup className='text-right mt-4'>
          {
            list.length ?
              list.map(item =>
                <ListGroup.Item
                  key={item.id}
                  className='d-flex justify-content-between align-items-center'>
                  { item.value }
                  <Button 
                    variant='danger' 
                    size='sm'
                    onClick={() => handelRemove(item.id)}
                  > حذف </Button>
                </ListGroup.Item>
              )
            :
            <div className='text-center text-success'>
              هوراا همه‌ی کارای لعنتیت رو انجام دادی!
            </div>
          }
        </ListGroup>
      </Container>
    </>
  )
}

export default App;
