import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { ActionIcon, Avatar, Button, Divider, Grid, Table as MantineTable, TextInput, Tooltip } from '@mantine/core'
import { IconEye, IconPencil, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react'
import { Breadcrumbs } from '@/Components/Breadcrumbs.jsx'
import { Table } from '@/Components/Table.jsx'
import { useState } from 'react'
import { router } from '@inertiajs/core'

const Index = (props) => {
  const [athleteSearch, setAthleteSearch] = useState('')
  const THList = ['#', 'Foto', 'Nama Lengkap', 'Peran', 'Ditambahkan Pada', 'Diperbarui Pada', 'Aksi']
  const actionList = [
    {
      label: 'Rincian Atlet',
      icon: <IconEye />,
      onClick: (user) => router.get(route('athletes.show', user.id)),
      color: 'blue',
    },
    {
      label: 'Ubah Atlet',
      icon: <IconPencil />,
      onClick: (user) => router.get(route('athletes.edit', user.id)),
      color: 'yellow',
    },
    {
      label: 'Hapus Atlet',
      icon: <IconTrash />,
      onClick: (user) => router.delete(route('athletes.destroy', user.id)),
      color: 'red',
    },
  ]
  const athleteList = props.athletes.filter((athlete) => {
    return athlete.user.full_name.toLowerCase().includes(athleteSearch.toLowerCase())
  })
  const TDList = athleteList.map((athlete, id) => (
    <MantineTable.Tr h={48} key={id}>
      <MantineTable.Td
        px={16} py={0}
        style={{ whitespace: 'nowrap' }}>{id + 1}</MantineTable.Td>
      <MantineTable.Td
        px={16} py={0}
        style={{ whiteSpace: 'nowrap' }}>
        <Avatar src={athlete.user.avatar} alt={athlete.user.full_name} />
      </MantineTable.Td>
      <MantineTable.Td
        px={16} py={0}
        style={{ whitespace: 'nowrap' }}>{athlete.user.full_name}</MantineTable.Td>
      <MantineTable.Td
        px={16} py={0}
        style={{ whiteSpace: 'nowrap' }}>{athlete.user.role}</MantineTable.Td>
      <MantineTable.Td
        px={16} py={0}
        style={{ whitespace: 'nowrap' }}>{athlete.user.created_at}</MantineTable.Td>
      <MantineTable.Td
        px={16} py={0}
        style={{ whitespace: 'nowrap' }}>{athlete.user.updated_at}</MantineTable.Td>
      <MantineTable.Td
        px={16} py={0}
        style={{ whiteSpace: 'nowrap' }}>
        <Button.Group>
          {actionList.map((action, id) => (
            <Tooltip label={action.label} key={id} style={{
              borderRadius: 32,
              padding: '.5rem 1rem',
            }}>
              <ActionIcon size={48} radius={32} variant="subtle"
                          aria-label={action.label} color={action.color}
                          onClick={() => action.onClick(athlete.user)}
                          disabled={props.auth.user.id === athlete.user.id}
              >
                {action.icon}
              </ActionIcon>
            </Tooltip>
          ))}
        </Button.Group>
      </MantineTable.Td>
    </MantineTable.Tr>
  ))
  
  return (
    <AppLayout title="Atlet" authed={props.auth.user} meta={props.meta}>
      <Grid
        grow
        justify="space-between"
      >
        <Grid.Col span={3}>
          <Breadcrumbs navList={[{ label: 'Atlet' }]} />
        </Grid.Col>
        
        <Grid.Col
          span={3}
          style={{
            display: 'flex',
          }}
        >
          <Tooltip style={{ borderRadius: 32, padding: '.5rem 1rem' }} disabled={props.coaches.length} label="Tambah data pelatih dulu!">
            <Button
              disabled={!props.coaches.length}
              ml="auto"
              leftSection={<IconPlus />}
              variant="filled"
              color="gold.1"
              h={48}
              radius={32}
              onClick={() => router.get(route('athletes.create'))}
            >
              Tambah Atlet
            </Button>
          </Tooltip>
        </Grid.Col>
        
        <Grid.Col span={12}>
          <TextInput
            variant="filled"
            leftSection={<IconSearch />}
            styles={{
              input: {
                height: 48,
                borderRadius: 32,
                paddingLeft: 50,
                paddingRight: 14,
              },
              section: {
                marginLeft: 8,
              },
            }}
            color="gold.1"
            placeholder="Cari atlet..."
            onChange={(e) => setAthleteSearch(e.target.value)}
          />
        </Grid.Col>
      </Grid>
      
      <Divider my={32} />
      
      <Table thList={THList} tdList={TDList} />
    </AppLayout>
  )
}

export default Index