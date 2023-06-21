import {
  Anchor,
  Button,
  Form,
  H1,
  Paragraph,
  Separator,
  Sheet,
  Spinner,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useEffect, useState } from 'react'
import { Input } from 'tamagui'
import { useLink } from 'solito/link'

export function SignIn() {
  const [status, setStatus] = useState<'init' | 'submitting' | 'submitted'>('init')
  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('init'), 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])

  return (
    <YStack ai="center" p="$4" space="$4">
      <XStack>
        <Form
          minWidth={300}
          space
          onSubmit={() => setStatus('submitting')}
          borderWidth={1}
          borderRadius="$4"
          backgroundColor="$background"
          borderColor="$borderColor"
          padding="$8"
        >
          <Input size="$4" placeholder="id " />
          <Input size="$4" placeholder="pw " />
          <Form.Trigger asChild disabled={status !== 'init'} width={100}>
            <Button icon={status === 'submitting' ? () => <Spinner /> : undefined}>Submit</Button>
          </Form.Trigger>
        </Form>
      </XStack>
    </YStack>
  )
}
