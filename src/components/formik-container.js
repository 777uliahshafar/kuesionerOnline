import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Container, Button } from 'react-bootstrap'
import FormikControl from './formik-control'
import ConjForm from './conj-form'
import { navigate } from 'gatsby'

const ruangOptions = [
  { key: 'Pilih ruang ..', value: '' },
  { key: 'Ruang A', value: 'ruangA' },
  { key: 'Ruang B', value: 'ruangB' }
]

function FormikContainer() {
  const initialValues = {
    ruangOptions: '',
    reason: '',
    asp1Options: '',
    asp2Options: '',
    asp3Options: '',
    asp4Options: '',
    elmOptions: ''
  }
  const validationSchema = Yup.object({
    ruangOptions: Yup.string().required('Diperlukan'),
    reason: Yup.string().required('Diperlukan')
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const onSubmit = (values, onSubmitProps) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'city form v2', ...values })
    })
      .then(() => navigate('/terima-kasih'))
      .catch((error) => alert(error))
      .finally(() => onSubmitProps.setSubmitting(false))
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form
            name="city form v2"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={formik.onSubmit}
            action="/terima-kasih"
          >
            <p hidden>
              <label>
                I love honeypot : <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="city form v2" />
            <h2>Pertanyaan</h2>
            <h5>
              <small>* : wajib </small>
            </h5>
            <FormikControl
              control="select"
              label="Pilih ruang yang anda paling sukai? (A atau B)*"
              name="ruangOptions"
              options={ruangOptions}
            />

            <ConjForm />

            <Button
              variant="primary"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Kirimkan
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default FormikContainer
