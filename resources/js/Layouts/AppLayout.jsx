import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { ActionIcon, Affix, Box, Flex, Tooltip, Transition } from '@mantine/core'
import { Header } from '@/Components/Header.jsx'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowNarrowUp, IconCheck, IconX } from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'

export const AppLayout = (props) => {
  useEffect(() => {
    if (props.meta) {
      notifications.show({
        title: props.meta.title,
        message: props.meta.message,
        color: props.meta.status ? 'green' : 'red',
        autoClose: 2000,
        style: {
          borderRadius: 20,
        },
        styles: {
          root: {
            padding: 20,
          },
        },
        icon: props.meta.status ? <IconCheck /> : <IconX />,
      })
    }
  }, [props.meta])
  const [scroll, scrollTo] = useWindowScroll()
  
  return (
    <Flex
      mih="100vh"
      direction="column"
    >
      <Head title={props.title} />
      
      {props.authed && <Header authed={props.authed} title={props.title} />}
      
      <Box
        mih="100vh"
        px={props.authed && {
          base: 16,
          sm: 32,
          md: 48,
          lg: 64,
        }}
        py={props.authed && 32}
      >
        {props.children}
      </Box>
      
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="fade" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Tooltip label="Gulir ke atas" style={{
              borderRadius: 32,
              padding: '.5rem 1rem',
            }}>
              <ActionIcon onClick={() => scrollTo({ y: 0 })} pos="fixed" h={48} w={48} color="gold.1" radius={32} m={16} bottom={0} right={0} variant="filled"
                          style={transitionStyles} aria-label="Scroll to top">
                <IconArrowNarrowUp />
              </ActionIcon>
            </Tooltip>
          )}
        </Transition>
      </Affix>
    </Flex>
  )
}
