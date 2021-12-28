import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Container, Button } from 'react-bootstrap'
import FormikControl from './formik-control'
import ConjForm from './conj-form'
import { navigate } from 'gatsby'

/*
const dropdownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]*/

const radioOptions = [
  { key: 'Option 1', value: 'rOption1' },
  { key: 'Option 2', value: 'rOption2' },
  { key: 'Option 3', value: 'rOption3' },
  { key: 'Option 4', value: 'rOption4' },
  { key: 'Option 5', value: 'rOption5' }
]

const checkboxOptions = [
  { key: 'Option 1', value: 'cOption1' },
  { key: 'Option 2', value: 'cOption2' },
  { key: 'Option 3', value: 'cOption3' },
  { key: 'Option 4', value: 'cOption4' },
  { key: 'Option 5', value: 'cOption5' }
]

function FormikContainer() {
  const initialValues = {
    nomorHp: '',
    description: '',
    pref: '',
    pref2: '',
    pref3: '',
    likert: '',
    checkboxOption: ''
  }
  const validationSchema = Yup.object({
    nomorHp: Yup.string().required('Diperlukan'),
    description: Yup.string().required('Diperlukan'),
    pref: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref2: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref3: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref4: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref5: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref6: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref7: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref8: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref9: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref10: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref11: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref12: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref13: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref14: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref15: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref16: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref17: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref18: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref19: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref20: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref21: Yup.string().required('Diperlukan').max(3, 'maks 100'),
    pref22: Yup.string().required('Diperlukan').max(3, 'maks 100')
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
      body: encode({ 'form-name': 'formik form v1', ...values })
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
            name="formik form v1"
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
            <input type="hidden" name="form-name" value="formik form v1" />

            <FormikControl
              control="input"
              label="Nomor Handphone"
              name="nomorHp"
              text="nomor anda tidak akan kami sebarluaskan"
            />
            <FormikControl
              control="textarea"
              label="Deskripsi"
              name="description"
            />
            <ConjForm />

            <FormikControl
              control="radio"
              label="Pilih Skala"
              name="likert"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Pilih checkbox"
              name="checkboxOption[]"
              options={checkboxOptions}
            />

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
