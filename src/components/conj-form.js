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

const elmOptions = [
  { key: 'Jumlah pohon', value: 'jmlhPhn' },
  { key: 'Kerindangan pohon', value: 'bntukPhn' },
  { key: 'Lebar jalan pejalan kaki', value: 'lbrJln' },
  { key: 'Permukaan jalan pejalan kaki', value: 'PermJln' },
  { key: 'Tingkat pencahayaan', value: 'TngkChy' }
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
          Mengapa anda memilih ruang tersebut?*
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
          Seberapa besar anda setuju/tidak setuju terhadap pernyatan tentang
          ruang publik pantai senggol?
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
        label="Ruang memiliki fasilitas untuk bermain dan menyalurkan hobi"
        name="asp3Options"
        options={likertOptions}
      />

      <FormikControl
        control="radio"
        label="Ruang adalah area yang damai dan tenang"
        name="asp4Options"
        options={likertOptions}
      />
      <Card style={{ width: '16rem' }} border="warning">
        <Card.Text className="card-2" style={{ width: '13rem' }}>
          Pilih karakteristik elemen dari pantai senggol yang mendukung alasan
          anda memilih ruang?
          <small>(banyak pilihan diperbolehkan)</small>
        </Card.Text>
      </Card>
      <FormikControl
        control="checkbox"
        label="Karakteristik elemen"
        name="elmOptions[]"
        options={elmOptions}
      />
    </div>
  )
}
export default ConjForm
