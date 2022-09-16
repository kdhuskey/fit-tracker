import React, { useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

function Landing() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleInputEmail = (e) => setEmail(e.target.value)
  const handleInputPassword = (e) => setPassword(e.target.value)


  const isError = input === ''
  
  return (
    <>
    <Box display='flex' justifyContent='center' m='20'>
    <Box w='50%' display='flex' flexDirection='column' alignItems='center' p='20' m='20'>
      <FormControl w='250px' isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          value={email}
          onChange={handleInputEmail}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl w='250px' isInvalid={isError}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          value={password}
          onChange={handleInputPassword}
        />
        {!isError ? (
          <FormHelperText>
            Enter your password.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button mt='5' isLoading={isLoading}
 onSubmit={setIsLoading} colorScheme='blue'>Submit</Button>
    </Box>
    </Box>
    </>
  )
}

export default Landing