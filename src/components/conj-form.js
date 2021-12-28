import React from 'react'
import FormikControl from './formik-control'
import { Card, Image } from 'react-bootstrap'
import ProfilDesc from './profil-desc'
import ruangA from '../images/ruanga.jpg'
import ruangB from '../images/ruangb.jpg'

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

      <FormikControl control="textarea" label="Deskripsi" name="description" />

      <Card className="card-1" style={{ width: '16rem' }} border="warning" body>
        This is some text within a card body.
        <ProfilDesc
          item1="jumlah pohon(phn)"
          item2="bentuk(btk)  rindang(rdng) pohon(phn) "
          item3="warna(wrn) bunga(bnga)"
          item4="lebar(lbr) jalan(jln)"
          item5="permukaan(mka) jalan(jln)"
          item6="jenis(jns) kursi(krs)"
          item7="cahaya(chy) jalan(jln)"
        />
      </Card>
      <div className="control-1">
        <div className="select-1">
          <ProfilDesc
            item1="banyak phn"
            item2="sangat rndng"
            item3="3-4 wrn bnga"
            item4="2-3m lbr jln"
            item5="aspal mka jln"
            item6="kursi piknik"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 1"
            name="pref"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="sangat rndng "
            item3="1-2 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="tanah mka jln"
            item6="kursi piknik"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 2"
            name="pref2"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="cukup"
            item3="1-2 wrn bnga"
            item4="2-3m lbr jln"
            item5="paving"
            item6="gazebo"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 3"
            name="pref3"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="cukup"
            item3="3-4 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="aspal"
            item6="gazebo"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 4"
            name="pref4"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="cukup "
            item3="> 5 wrn bnga"
            item4="> 3m lbr jln"
            item5="tanah"
            item6="gazebo"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 5"
            name="pref5"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="banyak phn"
            item2="sangat rndng "
            item3="> 5 wrn bnga"
            item4="> 3m lbr jln"
            item5="paving"
            item6="kursi lengkung"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 6"
            name="pref6"
          />
        </div>
        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="cukup"
            item3="3-4 wrn bnga"
            item4="2-3m lbr jln"
            item5="aspal"
            item6="kursi lengkung"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 7"
            name="pref7"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="sangat rndng "
            item3="1-2 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="tanah mka jln"
            item6="kursi lengkung"
            item7="kurang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 8"
            name="pref8"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="sangat rndng "
            item3="3-4 wrn bnga"
            item4="2-3m lbr jln"
            item5="paving mka jln"
            item6="kursi piknik"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 9"
            name="pref9"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="cukup "
            item3="1-2 wrn bnga"
            item4="> 3m lbr jln"
            item5="aspal mka jln"
            item6="kursi piknik"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 10"
            name="pref10"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="cukup rdng"
            item3="> 5 wrn bnga"
            item4="2-3m lbr jln"
            item5="tanah mka jln"
            item6="kursi piknik"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 11"
            name="pref11"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="sangat rdng"
            item3="3-4 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="paving"
            item6="gazebo"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 12"
            name="pref12"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="banyak phn"
            item2="cukup rdng"
            item3="1-2 wrn bnga"
            item4="> 3m lbr jln"
            item5="aspal mka jln"
            item6="gazebo"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 13"
            name="pref13"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="banyak phn"
            item2="sangat rndng "
            item3="1-2 wrn bnga"
            item4="2-3m lbr jln"
            item5="tanah mka jln"
            item6="gazebo"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 14"
            name="pref14"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="sangat rndng"
            item3="> 5 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="aspal mk jln"
            item6="kursi lengkung"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 15"
            name="pref15"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="cukup rndng"
            item3="3-4 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="paving mka jln"
            item6="kursi lengkung"
            item7="sedang chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 16"
            name="pref16"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="banyak phn"
            item2="cukup rndng"
            item3="> 5 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="paving"
            item6="kursi piknik"
            item7="tinggii chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 17"
            name="pref17"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="sangat rndng"
            item3="1-2 wrn bnga"
            item4="> 3m lbr jln"
            item5="aspal"
            item6="kursi piknik"
            item7="tinggi chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 18"
            name="pref18"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="sedikit phn"
            item2="sangat rndng "
            item3="> 5 wrn phn"
            item4="2-3m lbr jln"
            item5="aspal"
            item6="gazebo"
            item7="tinggi chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 19"
            name="pref19"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="sangat rndng "
            item3="3-4 wrn bnga"
            item4="> 3m lbr jln"
            item5="tanah mka jln"
            item6="gazebo"
            item7="tinggi chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 20"
            name="pref20"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="bbrapa phn"
            item2="cukup rndng"
            item3="1-2 wrn bnga"
            item4="2-3m lbr jln"
            item5="paving"
            item6="kursi lengkung"
            item7="tinggi chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 21"
            name="pref21"
          />
        </div>

        <div className="select-1">
          <ProfilDesc
            item1="banyak phn "
            item2="cukup rndng"
            item3="3-4 wrn bnga"
            item4="< 1.5m lbr jln"
            item5="tanah mka jln"
            item6="kursi lengkung"
            item7="tinggi chy"
          />
          <FormikControl
            control="input"
            type="number"
            label="profil 22"
            name="pref22"
          />
        </div>
      </div>
    </div>
  )
}
export default ConjForm
