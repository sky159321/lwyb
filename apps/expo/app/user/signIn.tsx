import { Theme } from 'tamagui'
import { SignIn } from 'app/features/auth/signIn'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <Theme name="yellow">
      <Stack.Screen
        options={{
          title: 'Sign In',
        }}
      />
      <SignIn />
    </Theme>
  )
}
