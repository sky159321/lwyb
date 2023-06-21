import { SignIn } from 'app/features/auth/signIn'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign In',
        }}
      />
      <SignIn />
    </>
  )
}
