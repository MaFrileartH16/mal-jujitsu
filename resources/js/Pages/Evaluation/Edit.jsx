import { AppLayout } from '@/Layouts/AppLayout.jsx'
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Fieldset,
  Grid,
  Group,
  Indicator,
  NumberInput,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core'
import { IconCornerDownLeft, IconUser } from '@tabler/icons-react'
import { Breadcrumbs } from '@/Components/Breadcrumbs.jsx'
import { useForm } from '@inertiajs/react'
import 'dayjs/locale/id'
import { Link, RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'

const Edit = (props) => {
  const form = useForm({
    exercise_id: props.exercise_evaluation.exercise.id,
    note: props.exercise_evaluation.note,
    evaluations: props.evaluations.map((evaluation) => ({
      sub_sub_criteria_id: evaluation.sub_sub_criteria_id,
      value: evaluation.value,
    })),
  })
  
  const editor = useEditor({
    extensions: [StarterKit, Link, Placeholder.configure({ placeholder: 'Masukkan catatan' })],
    content: form.data.note,
    onUpdate({ editor }) {
      form.setData('note', editor.getHTML())
    },
  })
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.put(route('evaluations.update', props.exercise_evaluation.id))
    }}>
      <AppLayout
        title={`Penilaian Latihan ${form.data.exercise_id ? `'${[...props.exercises, props.exercise_evaluation.exercise].find((exercise) => exercise.id === form.data.exercise_id)?.name}'` : ''}`}
        authed={props.auth.user} meta={props.meta}>
        <Group w="100%" justify="space-between" mb={32}>
          <Breadcrumbs navList={[{ label: 'Penilaian', route: 'evaluations.index' }, { label: 'Ubah' }]} />
          
          <Tooltip style={{ borderRadius: 32, padding: '.5rem 1rem' }} label="Tambah Penilaian">
            <ActionIcon type="submit" ml="auto" h={48} w={48} color="gold.1" radius={32} display={{ base: 'block', xs: 'none' }}
              // disabled={form.hasErrors || !form.data.name || !form.data.place || !form.data.athlete_id || !form.data.medal}
            >
              <IconCornerDownLeft />
            </ActionIcon>
          </Tooltip>
          
          <Button display={{ base: 'none', xs: 'block' }} type="submit" w={240} leftSection={<IconCornerDownLeft />} variant="filled" color="gold.1" h={48}
                  px={16} styles={{ section: { marginRight: 12 } }} radius={32} loading={form.processing}
            // disabled={form.hasErrors || !form.data.name || !form.data.place || !form.data.athlete_id || !form.data.medal}
          >
            Tambah Penilaian
          </Button>
        </Group>
        
        <Grid grow justify="space-between">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Center>
              <Indicator styles={{ indicator: { padding: 16, border: '4px solid white' } }} inline color="gold.1"
                         label={form.data.exercise_id ? [...props.exercises, props.exercise_evaluation.exercise].find((exercise) => exercise.id === form.data.exercise_id)?.athlete.role : 'Atlet'}
                         position="bottom-center" size={32} withBorder>
                <Avatar
                  mx="auto"
                  src={[...props.exercises, props.exercise_evaluation.exercise].find((exercise) => exercise.id === form.data.exercise_id)?.athlete.avatar}
                  alt={[...props.exercises, props.exercise_evaluation.exercise].find((exercise) => exercise.id === form.data.exercise_id)?.athlete.full_name}
                  size={160}
                />
              </Indicator>
            </Center>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Fieldset radius={20} legend="Informasi Latihan"
                      styles={{ root: { margin: 0, padding: 16 }, legend: { borderRadius: 20, fontSize: 16, padding: 16, fontWeight: 'bold' } }}>
              <Select
                withAsterisk
                variant="filled"
                styles={{
                  label: { marginBottom: 8 },
                  input: { height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16 },
                  section: { marginLeft: 0, width: 48, height: 48 },
                  error: { marginTop: 8 },
                }}
                leftSection={<IconUser />}
                label="Latihan"
                clearable
                searchable
                value={form.data.exercise_id}
                nothingFoundMessage="Tidak ada latihan ditemukan"
                placeholder="Pilih latihan..."
                checkIconPosition="right"
                onChange={(value) => {
                  form.setData('exercise_id', value)
                  
                  if (!value) {
                    form.setError({ exercise_id: 'Latihan tidak boleh kosong.' })
                  } else {
                    form.clearErrors('exercise_id')
                  }
                }}
                data={[...props.exercises, props.exercise_evaluation.exercise].map((exercise) => ({
                  value: exercise.id,
                  label: `${exercise.name} ~ ${exercise.date} (${exercise.athlete.full_name} ~ ${exercise.athlete.role})`,
                }))}
                error={form.errors.exercise_id}
              />
            </Fieldset>
            
            <Box>
              {props.criterias.map((criteria) => (
                <Box key={criteria.id}>
                  <Divider mt={48} label={criteria.name.toUpperCase()} styles={{ label: { fontSize: '14px' } }} labelPosition="center" />
                  
                  {criteria.sub_criterias.map((sub_criteria) => (
                    <Fieldset key={sub_criteria.id} radius={20} legend={sub_criteria.name}
                              styles={{ root: { margin: 0, padding: 16 }, legend: { borderRadius: 20, fontSize: 16, padding: 16, fontWeight: 'bold' } }}>
                      <Stack>
                        {sub_criteria.sub_sub_criterias.map((sub_sub_criteria) => sub_sub_criteria.type === 'radio' ? (
                            <Radio.Group key={sub_sub_criteria.id} description={sub_sub_criteria.description} label={sub_sub_criteria.name} withAsterisk styles={{
                              label: { marginBottom: 8 }, description: { marginBottom: 8 }, error: { marginTop: 8 },
                            }} value={form.data.evaluations.find((evaluation) => evaluation.sub_sub_criteria_id === sub_sub_criteria.id)?.value}
                                         onChange={(value) => {
                                           form.data.evaluations.forEach((evaluation) => {
                                             if (evaluation.sub_sub_criteria_id === sub_sub_criteria.id) {
                                               evaluation.value = value
                                             }
                                           })
                                           
                                           form.setData('evaluations', form.data.evaluations)
                                           
                                           // if (!value) {
                                           //   form.setError({ role: 'Peran tidak boleh kosong.' })
                                           // } else {
                                           //   form.clearErrors('role')
                                           // }
                                         }}>
                              <Group gap={32}>
                                <Radio size="md" value="1" label="1" color="gold.1" />
                                <Radio size="md" value="2" label="2" color="gold.1" />
                                <Radio size="md" value="3" label="3" color="gold.1" />
                                <Radio size="md" value="4" label="4" color="gold.1" />
                                <Radio size="md" value="5" label="5" color="gold.1" />
                              </Group>
                            </Radio.Group>
                          ) : sub_sub_criteria.type === 'number' ? (
                            <NumberInput hideControls description={sub_sub_criteria.description} key={sub_sub_criteria.id} label={sub_sub_criteria.name}
                                         withAsterisk variant="filled"
                                         styles={{
                                           label: { marginBottom: 8 },
                                           description: { marginBottom: 8 },
                                           input: { height: 48, borderRadius: 32, paddingLeft: 16, paddingRight: 16 },
                                           section: { marginLeft: 0, width: 48, height: 48 },
                                           error: { marginTop: 8 },
                                         }} placeholder="Masukkan nilai..." onChange={(value) => {
                              form.data.evaluations.forEach((evaluation) => {
                                if (evaluation.sub_sub_criteria_id === sub_sub_criteria.id) {
                                  evaluation.value = value
                                }
                              })
                              
                              form.setData('evaluations', form.data.evaluations)
                              
                              // if (!email) {
                              //   form.setError({ email: 'Alamat surel tidak boleh kosong.' })
                              // } else if (!/\S+@\S+\.\S+/.test(email)) {
                              //   form.setError({ email: 'Alamat surel tidak sah.' })
                              // } else {
                              //   form.clearErrors('email')
                              // }
                            }} error={form.errors.email}
                                         value={form.data.evaluations.find((evaluation) => evaluation.sub_sub_criteria_id === sub_sub_criteria.id)?.value
                                         } />
                          ) : (
                            <TextInput key={sub_sub_criteria.id} description={sub_sub_criteria.description} label={sub_sub_criteria.name} withAsterisk
                                       variant="filled" styles={{
                              description: { marginBottom: 8 },
                              label: { marginBottom: 8 },
                              input: { height: 48, borderRadius: 32, paddingLeft: 16, paddingRight: 16 },
                              section: { marginLeft: 0, width: 48, height: 48 },
                              error: { marginTop: 8 },
                            }} placeholder="Masukkan nilai..." onChange={(e) => {
                              form.data.evaluations.forEach((evaluation) => {
                                if (evaluation.sub_sub_criteria_id === sub_sub_criteria.id) {
                                  evaluation.value = e.target.value
                                }
                              })
                              
                              form.setData('evaluations', form.data.evaluations)
                              
                              // if (!e.target.value) {
                              //   form.setError(`evaluations.${sub_sub_criteria_id}.value`, 'Nilai tidak boleh kosong.')
                              // } else {
                              //   form.clearErrors('value')
                              // }
                            }} error={form.errors.value}
                                       value={form.data.evaluations.find((evaluation) => evaluation.sub_sub_criteria_id === sub_sub_criteria.id)?.value} />
                          ),
                        )}
                      </Stack>
                    </Fieldset>
                  ))}
                </Box>
              ))}
            </Box>
            
            <Fieldset radius={20} legend="Informasi Tambahan"
                      styles={{ root: { margin: 0, padding: 16 }, legend: { borderRadius: 20, fontSize: 16, padding: 16, fontWeight: 'bold' } }}>
              <Text fz={14}>Catatan</Text>
              <RichTextEditor editor={editor} style={{
                borderRadius: 20,
              }}>
                <RichTextEditor.Toolbar>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Highlight />
                    <RichTextEditor.Code />
                  </RichTextEditor.ControlsGroup>
                  
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                  </RichTextEditor.ControlsGroup>
                  
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                  </RichTextEditor.ControlsGroup>
                  
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                  </RichTextEditor.ControlsGroup>
                  
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                  </RichTextEditor.ControlsGroup>
                  
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Undo />
                    <RichTextEditor.Redo />
                  </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>
                
                <RichTextEditor.Content />
              </RichTextEditor>
            </Fieldset>
          </Grid.Col>
        </Grid>
      </AppLayout>
    </form>
  )
}

export default Edit
