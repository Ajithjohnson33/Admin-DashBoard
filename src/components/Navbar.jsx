
import { UnlockIcon } from "@chakra-ui/icons"
import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast } from "@chakra-ui/react"

export default function Navbar() {

  const toast = useToast()

  const showToast =() => {
    toast({
      title: 'Logged out',
      description:'Sucessfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />

    })
  }


  return (

    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="3rem" color="purple" >Welcome to Eloit Global School</Heading>
      <Spacer />


      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">CBSE</Box>
        <Text>eloit@.com</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
      
    </Flex>

  )
}

