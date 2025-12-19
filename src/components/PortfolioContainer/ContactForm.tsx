import { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert
} from '@mui/material'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"

import { sendEmail } from '../../services'

const PHONE_REGEX = /^[6|7|8|9][0-9]{8}$/

const schema = z.object({
  name: z.string().min(3, 'El nombre y apellido debe tener más de 3 letras'),
  email: z.email('Debes introducir un email válido'),
  phone: z.string().optional()
  .refine(
    (phone) => !phone || PHONE_REGEX.test(phone),
    { message: 'Tu número de teléfono no es válido o está incompleto' }
  ),
  message: z.string().min(3, 'El mensaje debe ser más largo. ¡Cuéntame!'),
})

type Inputs = z.infer<typeof schema>

export default function ContactForm() {
  const [open, setOpen] = useState(false)
  const [disable, setDisable] = useState(false)
  const [statusOk, setStatusOk] = useState(false)

  const {
    handleSubmit,
    control,
    reset,
    formState,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const { errors } = formState

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', phone: '', message: '' })
    }
  }, [formState, reset])


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setDisable(true)
    const status = await sendEmail(data)
    setOpen(true)
    setStatusOk(status.ok)
    setDisable(false)
  }
  return (
    <Box py={2}>
      <Container maxWidth="md" id="contact" sx={{ scrollMarginTop: 76 }}>
        <Typography color="inherit" variant="h2">
          Contacto
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                label="Nombre"
                placeholder="Nombre"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                label="Email"
                placeholder="Email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                type="tel"
                inputProps={{ maxLength: 9 }}
                label="Teléfono"
                placeholder="Telefono"
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ''}
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                margin="normal"
                multiline
                minRows={5}
                label="Mensaje"
                placeholder="Mensaje"
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
              />
            )}
          />
          <Box display="flex" justifyContent="center" py={2}>
            <Button disabled={disable} color="secondary" variant="contained" type="submit">
              Enviar
            </Button>
          </Box>
        </form>

        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={5000}
          onClose={() => setOpen(false)}
        >
          {statusOk ? (
            <Alert severity="success">
              Formulario enviado. ¡Pronto nos pondremos en contacto!
            </Alert>
          ) : (
            <Alert severity="error">
              Se ha producido un error en el envío de los datos.
            </Alert>
          )}
        </Snackbar>
      </Container>
    </Box>
  )
}
