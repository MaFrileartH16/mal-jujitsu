import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Avatar, Box, Fieldset, Grid, Indicator, Select, SimpleGrid, TextInput } from '@mantine/core'
import { IconBuilding, IconCalendar, IconClipboardText, IconClockPause, IconClockPlay, IconUser } from '@tabler/icons-react'
import { Breadcrumbs } from '@/Components/Breadcrumbs.jsx'
import { useForm } from '@inertiajs/react'
import 'dayjs/locale/id'
import { DatePickerInput, TimeInput } from '@mantine/dates'

const Show = (props) => {
  const form = useForm({
    name: props.exercise.name,
    place: props.exercise.place,
    athlete_id: props.exercise.athlete.user_id,
    coach_id: props.exercise.coach.user_id,
    date: props.exercise.date,
    start_time: props.exercise.start_time,
    end_time: props.exercise.end_time,
  })
  
  return (
    <AppLayout title="Latihan" authed={props.auth.user} meta={props.meta}>
      <Box mb={32}>
        <Breadcrumbs navList={[{ label: 'Latihan', route: 'exercises.index' }, { label: 'Rincian' }]} />
      </Box>
      
      <Grid grow justify="space-between">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <SimpleGrid spacing={32} cols={{
            base: 1,
            xs: 2,
            md: 1,
          }}>
            <Indicator inline color="gold.2" styles={{ indicator: { padding: 16 } }}
                       label={form.data.athlete_id ? props.athletes.find((athlete) => athlete.user.id === form.data.athlete_id)?.user.role : 'Atlet'}
                       position="bottom-center" size={32} withBorder>
              <Avatar
                mx="auto"
                src={props.athletes.find((athlete) => athlete.user.id === form.data.athlete_id)?.user.avatar}
                alt={props.athletes.find((athlete) => athlete.user.id === form.data.athlete_id)?.user.full_name}
                size={160}
              />
            </Indicator>
            
            <Indicator inline color="gold.2" styles={{ indicator: { padding: 16 } }}
                       label={form.data.coach_id ? props.coaches.find((coach) => coach.user.id === form.data.coach_id)?.user.role : 'Pelatih'}
                       position="bottom-center" size={32} withBorder>
              <Avatar
                mx="auto"
                src={props.coaches.find((coach) => coach.user.id === form.data.coach_id)?.user.avatar}
                alt={props.coaches.find((coach) => coach.user.id === form.data.coach_id)?.user.full_name}
                size={160}
              />
            </Indicator>
          </SimpleGrid>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Fieldset mb={16} radius={20} legend="Informasi Latihan"
                    styles={{
                      root: { margin: 0, padding: 16, border: '1px solid #dcdcdc' },
                      legend: { borderRadius: 20, fontSize: 16, padding: 16, fontWeight: 'bold' },
                    }}>
            <TextInput variant="filled" leftSection={<IconClipboardText />} styles={{
              label: { marginBottom: 8 },
              input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }} mb={16} label="Nama" placeholder="Masukkan nama..." onChange={(e) => {
              form.setData('name', e.target.value)
              
              if (!e.target.value) {
                form.setError({ name: 'Nama latihan tidak boleh kosong.' })
              } else {
                form.clearErrors('name')
              }
            }} error={form.errors.name} value={form.data.name} disabled />
            
            <TextInput variant="filled" leftSection={<IconBuilding />} styles={{
              label: { marginBottom: 8 },
              input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
              section: { marginLeft: 0, width: 48, height: 48 },
              error: { marginTop: 8 },
            }} mb={16} label="Tempat" placeholder="Masukkan nama..." onChange={(e) => {
              form.setData('place', e.target.value)
              
              if (!e.target.value) {
                form.setError({ place: 'Nama tempat tidak boleh kosong.' })
              } else {
                form.clearErrors('place')
              }
            }} error={form.errors.place} value={form.data.place} disabled />
            
            <Select
              disabled
              mb={16}
              value={form.data.athlete_id}
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
            
            <Select
              disabled
              mb={16}
              value={form.data.coach_id}
              variant="filled"
              styles={{
                label: { marginBottom: 8 },
                input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
                section: { marginLeft: 0, width: 48, height: 48 },
                error: { marginTop: 8 },
              }}
              leftSection={<IconUser />}
              label="Pelatih"
              clearable
              searchable
              nothingFoundMessage="Tidak ada pelatih ditemukan"
              placeholder="Pilih pelatih..."
              checkIconPosition="right"
              onChange={(value) => {
                form.setData('coach_id', value)
                
                if (!value) {
                  form.setError({ coach_id: 'Pelatih tidak boleh kosong.' })
                } else {
                  form.clearErrors('coach_id')
                }
              }}
              data={props.coaches.map((coach) => ({ value: coach.user.id, label: `${coach.user.full_name} (${coach.user.role})` }))}
              error={form.errors.coach_id}
            />
            
            <DatePickerInput disabled mb={16} locale="id" monthsListFormat="MMMM" clearable allowDeselect firstDayOfWeek={0} variant="filled"
                             valueFormat="dddd, D MMMM YYYY" leftSection={<IconCalendar />} label="Tanggal"
                             placeholder="Masukkan tanggal..."
                             styles={{
                               label: { marginBottom: 8 },
                               input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
                               section: { marginLeft: 0, width: 48, height: 48 },
                               error: { marginTop: 8 },
                               calendarHeader: { height: 48 },
                               calendarHeaderControl: { height: 48, width: 48, borderRadius: 32 },
                             }} onChange={(value) => {
              form.setData('date', value)
              
              if (!value) {
                form.setError({ date: 'Tanggal latihan tidak boleh kosong.' })
              } else {
                form.clearErrors('date')
              }
            }} error={form.errors.date} value={new Date(form.data.date)}
            />
            
            <TimeInput disabled mb={16} color="gold.2" placeholder="HH:MM" locale="id" variant="filled"
                       leftSection={<IconClockPlay />} label="Waktu Mulai"
                       styles={{
                         label: { marginBottom: 8 },
                         input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
                         section: { marginLeft: 0, width: 48, height: 48 },
                         error: { marginTop: 8 },
                         calendarHeader: { height: 48 },
                         calendarHeaderControl: { height: 48, width: 48, borderRadius: 32 },
                       }} onChange={(e) => {
              form.setData('start_time', e.target.value)
              
              if (!e.target.value) {
                form.setError({ start_time: 'Waktu mulai tidak boleh kosong.' })
              } else {
                form.clearErrors('start_time')
              }
            }} error={form.errors.start_time} value={form.data.start_time} />
            
            <TimeInput disabled color="gold.2" placeholder="HH:MM" locale="id" variant="filled"
                       leftSection={<IconClockPause />} label="Waktu Selesai"
                       styles={{
                         label: { marginBottom: 8 },
                         input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
                         section: { marginLeft: 0, width: 48, height: 48 },
                         error: { marginTop: 8 },
                         calendarHeader: { height: 48 },
                         calendarHeaderControl: { height: 48, width: 48, borderRadius: 32 },
                       }} onChange={(e) => {
              form.setData('end_time', e.target.value)
              
              if (!e.target.value) {
                form.setError({ end_time: 'Waktu selesai tidak boleh kosong.' })
              } else {
                form.clearErrors('end_time')
              }
            }} error={form.errors.end_time} value={form.data.end_time} />
          </Fieldset>
        </Grid.Col>
      </Grid>
    </AppLayout>
  )
}

export default Show
