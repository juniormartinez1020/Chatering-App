import * as React from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true)
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
      Alert.alert('error', (err as Error).message)
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2))
        Alert.alert('code is not correct!')
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
      Alert.alert('error', (err as Error).message)
    }
  }

  if (pendingVerification) {
    return (
      <View className='p-4 gap-4 bg-slate-50 flex-1'>
        <Text className='text-2xl'>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
          className='border border-neutral-400 p-4 rounded-lg'
        />
        <TouchableOpacity 
         className='bg-blue-400 p-4 rounded-full items-center'
        onPress={onVerifyPress}
        >
          <Text  className='font-semibold text-slate-50 text-lg'>Verify</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View className='p-4 gap-4 bg-slate-50 flex-1'>
      <>
        <Text
        className='text-2xl font-semibold'
        >
            Sign up
        </Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(email) => setEmailAddress(email)}
          className='border border-neutral-400 p-4 rounded-lg'
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
           className='border border-neutral-400 p-4 rounded-lg'
        />
        <TouchableOpacity 
        onPress={onSignUpPress}
        className='bg-blue-400 p-4 rounded-full items-center'
        >
          <Text
          className='font-semibold text-slate-50 text-lg'
          >
            Continue
        </Text>
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <Text>Already have an account?</Text>
          <Link href="/sign-in">
            <Text
            className='text-blue-500 font-bold'
            >
                Sign in
            </Text>
          </Link>
        </View>
      </>
    </View>
  )
}