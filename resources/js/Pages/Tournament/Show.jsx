import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { ActionIcon, Avatar, Button, Center, Divider, Fieldset, Grid, Group, Indicator, Radio, Select, TextInput, Tooltip } from '@mantine/core'
import { IconBuilding, IconClipboardText, IconCornerDownLeft, IconUser } from '@tabler/icons-react'
import { Breadcrumbs } from '@/Components/Breadcrumbs.jsx'
import { useForm } from '@inertiajs/react'
import 'dayjs/locale/id'

const Edit = (props) => {
  const form = useForm({ name: props.tournament.name, place: props.tournament.place, athlete_id: props.tournament.athlete.id, medal: props.tournament.medal })
  
  return (
    <AppLayout title="Turnamen" authed={props.auth.user} meta={props.meta}>
      <Grid justify="space-between">
        <Grid.Col span={{ base: 6, xs: 5, sm: 4, md: 3 }}>
          <Breadcrumbs navList={[{ label: 'Turnamen', route: 'tournaments.index' }, { label: 'Rincian' }]} />
        </Grid.Col>
        
        <Grid.Col span={{ base: 6, xs: 5, sm: 4, md: 3 }}>
          <Tooltip style={{ borderRadius: 32, padding: '.5rem 1rem' }} label="Ubah Turnamen">
            <ActionIcon type="submit" ml="auto" h={48} w={48} color="gold.1" radius={32} display={{ base: 'block', xs: 'none' }}
                        disabled={form.hasErrors || !form.data.name || !form.data.place || !form.data.athlete_id || !form.data.medal}>
              <IconCornerDownLeft />
            </ActionIcon>
          </Tooltip>
          
          <Button display={{ base: 'none', xs: 'block' }} type="submit" fullWidth leftSection={<IconCornerDownLeft />} variant="filled" color="gold.1" h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32} loading={form.processing}
                  disabled={form.hasErrors || !form.data.name || !form.data.place || !form.data.athlete_id || !form.data.medal}>
            Ubah Latihan
          </Button>
        </Grid.Col>
      </Grid>
      
      <Divider my={32} />
      
      <Grid grow justify="space-between">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Center>
            <Indicator styles={{ indicator: { padding: 16, border: '4px solid white' } }} inline color="gold.1"
                       label={form.data.athlete_id ? props.athletes.find((athlete) => athlete.user.id === form.data.athlete_id)?.user.role : 'Atlet'}
                       position="bottom-center" size={32} withBorder>
              <Avatar
                mx="auto"
                src={props.athletes.find((athlete) => athlete.user.id === form.data.athlete_id)?.user.avatar}
                alt={props.athletes.find((athlete) => athlete.user.id === form.data.athlete_id)?.user.full_name}
                size={160}
              />
            </Indicator>
          </Center>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Fieldset mb={16} radius={20} legend="Informasi Turnamen"
                    styles={{ root: { margin: 0, padding: 16 }, legend: { borderRadius: 20, fontSize: 16, padding: 16, fontWeight: 'bold' } }}>
            
            <TextInput disabled withAsterisk variant="filled" leftSection={<IconClipboardText />} styles={{
              label: { marginBottom: 8 },
              input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }} mb={16} label="Nama Turnamen" placeholder="Masukkan nama turnamen..." onChange={(e) => {
              form.setData('name', e.target.value)
              
              if (!e.target.value) {
                form.setError({ name: 'Nama latihan tidak boleh kosong.' })
              } else {
                form.clearErrors('name')
              }
            }} error={form.errors.name} value={form.data.name} />
            
            <TextInput disabled withAsterisk variant="filled" leftSection={<IconBuilding />} styles={{
              label: { marginBottom: 8 },
              input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }} mb={16} label="Tempat Turnamen" placeholder="Masukkan tempat turnamen..." onChange={(e) => {
              form.setData('place', e.target.value)
              
              if (!e.target.value) {
                form.setError({ place: 'Nama tempat tidak boleh kosong.' })
              } else {
                form.clearErrors('place')
              }
            }} error={form.errors.place} value={form.data.place} />
            
            <Select
              disabled
              value={form.data.athlete_id}
              mb={16}
              withAsterisk
              variant="filled"
              styles={{
                label: { marginBottom: 8 },
                input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
                section: { marginLeft: 0, width: 48, height: 48 },
                error: { marginTop: 8 },
              }}
              leftSection={<IconUser />}
              label="Atlet"
              clearable
              searchable
              nothingFoundMessage="Tidak ada atlet ditemukan"
              placeholder="Pilih atlet..."
              checkIconPosition="right"
              onChange={(value) => {
                form.setData('athlete_id', value)
                
                if (!value) {
                  form.setError({ athlete_id: 'Atlet tidak boleh kosong.' })
                } else {
                  form.clearErrors('athlete_id')
                }
              }}
              data={props.athletes.map((athlete) => ({ value: athlete.user.id, label: `${athlete.user.full_name} (${athlete.user.role})` }))}
              error={form.errors.athlete_id}
            />
            
            <Radio.Group value={form.data.medal} label="Medali" withAsterisk styles={{
              label: { marginBottom: 8 }, error: { marginTop: 8 },
            }} onChange={(value) => {
              form.setData('medal', value)
              
              if (!value) {
                form.setError({ medal: 'Peran tidak boleh kosong.' })
              } else {
                form.clearErrors('medal')
              }
            }}>
              <Group gap={32}>
                <Radio size="md" value="Emas" label="🥇 Emas" color="gold.1" disabled />
                <Radio size="md" value="Perak" label="🥈 Perak" color="gold.1" disabled />
                <Radio size="md" value="Perunggu" label="🥉 Perunggu" color="gold.1" disabled />
              </Group>
            </Radio.Group>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </AppLayout>
  )
}

export default Edit
