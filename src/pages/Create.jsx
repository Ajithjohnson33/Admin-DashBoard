import { 
  Box, 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  Input, 
  Textarea, 
  Button, 
  Checkbox ,
  
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'

export default function Create() {

  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Student name:</FormLabel>
          <Input type="text" name="title" />
          
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Course Name:</FormLabel>
          <Input type="text" name="title" />
          
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>SSLC:</FormLabel>
          <Input type="text" name="title" />
          
        </FormControl>


        <FormControl mb="40px">
          <FormLabel>Plus Two:</FormLabel>
          <Input type="text" name="title" />
          
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox 
            name="isPriority" 
            colorScheme="purple"
            size="lg"
          />
          <FormLabel mb="0" ml="10px">Male</FormLabel>

          <Checkbox 
            name="isPriority" 
            colorScheme="purple"
            size="lg"
          />

          <FormLabel mb="0" ml="10px">Female</FormLabel>
        </FormControl>

        <Button type="submit">submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}