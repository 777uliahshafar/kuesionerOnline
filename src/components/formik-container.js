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

const genderOptions = [
  { key: 'Laki-laki', value: 'lakiLaki' },
  { key: 'Perempuan', value: 'perempuan' }
]

const sukuOptions = [
  { key: 'Bugis', value: 'bugis' },
  { key: 'Makassar', value: 'makassar' },
  { key: 'Toraja', value: 'toraja' },
  { key: 'Lainnya', value: 'lainny' }
]

const pekOptions = [
  { key: 'Karyawan', value: 'karyawan' },
  { key: 'Pelajar', value: 'pelajar' },
  { key: 'Wiraswasta', value: 'wiraswasta' },
  { key: 'Blm bekerja', value: 'belumBekerja' }
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
    genderOptions: '',
    sukuOptions: '',
    usia: '',
    pekOptions: '',
    reason: '',
    pref: '',
    pref2: '',
    pref3: '',
    pref4: '',
    pref5: '',
    pref6: '',
    pref7: '',
    pref8: '',
    pref9: '',
    pref10: '',
    pref11: '',
    pref12: '',
    pref13: '',
    pref14: '',
    pref15: '',
    pref16: '',
    pref17: '',
    pref18: '',
    pref19: '',
    pref20: '',
    pref21: '',
    pref22: '',
    likert: '',
    checkboxOption: ''
  }
  const validationSchema = Yup.object({
    nomorHp: Yup.string().required('Diperlukan'),
    reason: Yup.string().required('Diperlukan'),
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
              control="radio"
              label="Jenis kelamin"
              name="genderOptions"
              options={genderOptions}
            />

            <FormikControl
              control="radio"
              label="Suku"
              name="sukuOptions"
              options={sukuOptions}
            />

            <FormikControl control="input" label="Usia" name="usia" />

            <FormikControl
              control="radio"
              label="Pekerjaan"
              name="pekOptions"
              options={pekOptions}
            />

            <FormikControl
              control="select"
              label="Mana diantara berikut ini ruang yang ada sukai"
              name="ruangOptions"
              options={ruangOptions}
            />

            <ConjForm />

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
