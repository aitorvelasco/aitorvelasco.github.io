import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
  makeStyles,
} from '@material-ui/core'

import { Alert } from '@material-ui/lab'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import sendEmail from '../../services'

const useStyles = makeStyles(() => ({
  section: {
    scrollMarginTop: '76px',
  },
}))

const ContactForm = () => {
  const [open, setOpen] = useState(false)
  const [statusOk, setStatusOk] = useState(false)

  interface Inputs {
    name: string
    email: string
    phone: string
    message: string
  }

  const PHONE_REGEX = /^[6|7|8|9][0-9]{8}$/

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'El nombre y apellido debe tener más de 3 letras')
      .required(),
    email: yup.string().email('Debes introducir un email válido').required(),
    phone: yup
      .string()
      .test(
        'phone',
        'Tu número de teléfono no es válido o está incompleto',
        (phone) => !phone || PHONE_REGEX.test(phone)
      ),
    message: yup
      .string()
      .min(3, 'El mensaje debe ser más largo. ¡Cuéntame!')
      .required(),
  })

  // use Inputs interface should be works but it throws Typescript error, so temporary use any
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  })

  // TODO: Resolve this stream
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendEmail(data)
    setOpen(true)
    setStatusOk(true)
  }

  const { section } = useStyles()
  return (
    <Box py={2}>
      <Container maxWidth="md" id="contact" className={section}>
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
                variant="outlined"
                label="Nombre"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
                required
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
                variant="outlined"
                label="Email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                required
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
                variant="outlined"
                type="tel"
                inputProps={{ maxLength: 9 }}
                label="Teléfono"
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
                variant="outlined"
                multiline
                minRows={5}
                label="Mensaje"
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ''}
                required
              />
            )}
          />
          <Box display="flex" justifyContent="center" py={2}>
            <Button color="secondary" type="submit" variant="contained">
              Enviar
            </Button>
          </Box>
        </form>

        <Snackbar
          open={open}
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

export default ContactForm
