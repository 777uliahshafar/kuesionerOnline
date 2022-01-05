import React from 'react'
import FormikControl from './formik-control'
import { Card, Image } from 'react-bootstrap'
import ruangA from '../images/ruanga.jpg'
import ruangB from '../images/ruangb.jpg'

const likertOptions = [
  { key: '-1- ', value: '1' },
  { key: '-2- ', value: '2' },
  { key: '-3- ', value: '3' },
  { key: '-4- ', value: '4' },
  { key: '-5- ', value: '5' }
]

const elm1Options = [
  { key: 'Sedikit phn', value: 'sdkitPhon' },
  { key: 'Beberapa phn', value: 'bbrpPhon' },
  { key: 'Banyak phn', value: 'bnykPhon' }
]

const elm2Options = [
  { key: 'Tidak rindang', value: 'tdkRindng' },
  { key: 'Cukup rindang', value: 'ckpRindng' },
  { key: 'Sangat rindang', value: 'sgtRindng' }
]

const elm3Options = [
  { key: '> 3m', value: '>3m' },
  { key: '2-3m', value: '2-3m' },
  { key: '< 1.5m', value: '<1.5m' }
]

const elm4Options = [
  { key: 'Paving', value: 'paving' },
  { key: 'Aspal', value: 'aspal' },
  { key: 'Lantai keramik', value: 'tanah' }
]

const elm5Options = [
  { key: '1 atau 2 warna', value: 'satuDuaWarna' },
  { key: '3 atau 4 warna', value: 'tigaEmpatWarna' },
  { key: '5 atau lebih warna', value: 'limaLebihWarna' }
]

const elm6Options = [
  { key: 'Kursi bergerak', value: 'kursiBergerak' },
  { key: 'Lesehan', value: 'lesehan' },
  { key: 'Gazebo', value: 'gazebo' }
]

const elm7Options = [
  { key: 'Kurang', value: 'kurang' },
  { key: 'Sedang', value: 'sedang' },
  { key: 'Tinggi', value: 'tinggi' }
]

function ConjForm() {
  return (
    <div>
      <Card className="card-1" style={{ width: '13rem' }}>
        <Image src={ruangA} alt="ruangA" fluid className="card-img-top" />
        <Card.Text className="text-center">Ruang A </Card.Text>
      </Card>
      <Card className="card-1" style={{ width: '13rem' }}>
        <Image src={ruangB} alt="ruangB" fluid className="card-img-top" />
        <Card.Text className="text-center">Ruang B </Card.Text>
      </Card>

      <Card style={{ width: '16rem' }} border="warning">
        <Card.Title className="card-1" style={{ width: '13rem' }}>
          Jelaskan hal yang menarik tentang fitur (karakteristik) dari ruang
          yang anda pilih?
        </Card.Title>
        <Card.Body className="text-muted">
          <small>
            cth: ruang ini memiliki <u> jalan pedestrian</u> dan
            <u> tidak ada pohon</u> dan kerumunan semak-semak jadi saya bisa
            berjalan-jalan tanpa rasa takut.{' '}
          </small>
        </Card.Body>
      </Card>
      <FormikControl control="textarea" name="reason" rows={4} />
      <Card style={{ width: '16rem' }} border="warning">
        <Card.Text className="card-2">
          Berikut ini pernyataan tentang sejumlah fitur, karakteristik, dan
          fungsi dari pantai senggol, mohon tunjukkan seberapa besar anda
          setuju/tidak setuju dengan setiap pernyataan?
        </Card.Text>
        <Card.Text className="text-muted">
          <small>
            {' '}
            Terdapat lima pilihan yang tersedia yaitu 1=sangat tidak setuju, 2=
            tidak setuju, 3= netral, 4=setuju, 5=sangat setuju.
          </small>
        </Card.Text>
      </Card>
      <FormikControl
        control="radio"
        label="Ruang publik memudahkan akses terhadap fasilitasnya"
        name="asp1Options"
        options={likertOptions}
      />

      <FormikControl
        control="radio"
        label="Ruang publik memberikan kebebasan menikmati pemandangan"
        name="asp2Options"
        options={likertOptions}
      />

      <FormikControl
        control="radio"
        label="Sejumlah fitur dari ruang membuat ruang terasa berbahaya dan mengancam"
        name="asp3Options"
        options={likertOptions}
      />

      <FormikControl
        control="radio"
        label="Ruang memiliki fasilitas untuk bermain dan menyalurkan hobi"
        name="asp4Options"
        options={likertOptions}
      />

      <FormikControl
        control="radio"
        label="Tidak ada pohon, bunga, tanaman yang menarik di ruang publik"
        name="asp5Options"
        options={likertOptions}
      />

      <FormikControl
        control="radio"
        label="Ruang mendukung untuk berinteraksi sosial"
        name="asp6Options"
        options={likertOptions}
      />
      <FormikControl
        control="radio"
        label="Ruang adalah area yang damai dan tenang"
        name="asp7Options"
        options={likertOptions}
      />
      <FormikControl
        control="radio"
        label="Ruang publik memiliki fasilitas-fasilitas yang saling berjauhan"
        name="asp8Options"
        options={likertOptions}
      />
      <Card style={{ width: '16rem' }} border="warning">
        <Card.Text className="card-2" style={{ width: '13rem' }}>
          Dibawah ini sejumlah fitur ruang publik, Apa fitur ruang yang anda
          sukai dalam ruang publik?
        </Card.Text>
        <Card.Text>
          <small>Boleh dikosongkan jika tidak relevan</small>
        </Card.Text>
      </Card>
      <FormikControl
        control="checkbox"
        label="Jumlah pohon"
        name="elm1Options"
        options={elm1Options}
      />

      <FormikControl
        control="checkbox"
        label="Bentuk pohon"
        name="elm2Options"
        options={elm2Options}
      />

      <FormikControl
        control="checkbox"
        label="Lebar jalan"
        name="elm3Options"
        options={elm3Options}
      />

      <FormikControl
        control="checkbox"
        label="Permukaan jalan"
        name="elm4Options"
        options={elm4Options}
      />

      <FormikControl
        control="checkbox"
        label="Warna bunga"
        name="elm5Options"
        options={elm5Options}
      />

      <FormikControl
        control="checkbox"
        label="Jenis kursi"
        name="elm6Options"
        options={elm6Options}
      />
      <FormikControl
        control="checkbox"
        label="Pencahayaan jalan"
        name="elm7Options"
        options={elm7Options}
      />
    </div>
  )
}
export default ConjForm
