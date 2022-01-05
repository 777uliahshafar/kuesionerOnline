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

const serOptions = [
  { key: 'Jarang', value: 'jarang' },
  { key: 'Sekali sebulan', value: 'sekali/bulan' },
  { key: 'Sekali seminggu', value: 'sekali/minggu' },
  { key: 'Tiap hari', value: 'tiaphari' }
]

const kendOptions = [
  { key: 'Jalan kaki', value: 'jalankaki' },
  { key: 'Sepeda', value: 'sepeda' },
  { key: 'Sepeda Motor', value: 'motor' },
  { key: 'Mobil', value: 'mobil' }
]

const perjOptions = [
  { key: 'Kurang 5mnt', value: 'kurang 5mnt' },
  { key: '5mnt-15mnt', value: '5mnt-15mnt' },
  { key: '15mnt-30mnt', value: '15mnt-30mnt' },
  { key: '30-60mnt', value: '30-60mnt' }
]

const kapOptions = [
  { key: 'Setiap hari', value: 'setiaphari' },
  { key: 'Akhir pekan', value: 'akhirpekan' },
  { key: 'Hari libur/akhir pekan', value: 'harilibur' }
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

const jamOptions = [
  { key: 'Pagi', value: 'pagi' },
  { key: 'Siang/Sore', value: 'siang' },
  { key: 'Malam', value: 'malam' },
  { key: 'kapan pun', value: 'kapanpun' }
]

function FormikContainer() {
  const initialValues = {
    namaPanggil: '',
    genderOptions: '',
    sukuOptions: '',
    usia: '',
    pekOptions: '',
    elm1Options: '',
    elm2Options: '',
    elm3Options: '',
    elm4Options: '',
    elm5Options: '',
    elm6Options: '',
    elm7Options: '',
    serOptions: '',
    kendOptions: '',
    perjOptions: '',
    kapOptions: '',
    jamOptions: '',
    reason: '',
    aksesOptions: ''
  }
  const validationSchema = Yup.object({
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
            <h2>Data diri</h2>
            <FormikControl
              control="input"
              label="Nama"
              name="namaPanggil"
              text="data diri anda tidak akan disebarluaskan"
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
              label="Mana diantara berikut ini ruang yang anda sukai"
              name="ruangOptions"
              options={ruangOptions}
            />

            <ConjForm />

            <h2>Frekuensi kunjungan</h2>
            <FormikControl
              control="radio"
              label="Seberapa sering anda mengunjungi tepi laut"
              name="serOptions"
              options={serOptions}
            />

            <FormikControl
              control="radio"
              label="Kendaraan apa yang anda gunakan untuk ke tepi laut"
              name="kendOptions"
              options={kendOptions}
            />

            <FormikControl
              control="radio"
              label="Berapa lama perjalanan anda menuju pantai senggol"
              name="perjOptions"
              options={perjOptions}
            />

            <FormikControl
              control="radio"
              label="Kapan saja anda mengunjungi tepi laut"
              name="kapOptions"
              options={kapOptions}
            />

            <FormikControl
              control="checkbox"
              label="Jam berapa anda sering mengunjungi pantai senggol"
              name="jamOptions[]"
              options={jamOptions}
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
