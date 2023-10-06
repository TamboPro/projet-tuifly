import Image from 'next/image'

/*
import { getClient } from "@/lib/clientGraphQL";
import { gql } from "@apollo/client";
*/

import TopHeader from './components/topHeader'
import Header from './components/header'
import Slider from './components/slider'
import TravelForm from './components/travelForm'
import HeaderTabs from './components/headerTabs'

/*
const query = gql`query AllDossierVoyages {
  allDossierVoyages(nom: "tambo", prenom: "Gédéon") {
      reservationHotel {
          idReservation
          numero
          dateReservation
          clientId
      }
      client {
          idClient
          nom
          prenom
          dateNaissance
          adresse
          email
      }
      reservationVol {
          idReservation
          numero
          dateReservationVol
          clientId
      }
      ligne {
          idLigne
          quantite
          prix
          dateReservation
          produitId
          reservationId
      }
      produit {
          idProduit
          numero
          reference
          prix
          typeProduit
          hotelid
          categorieId
      }
      hotel {
          idHotel
          nomHotel
          pays
          ville
          classe
      }
  }
}`;
*/


export default async function Home() {

  //const { data } = await getClient().query({ query });

  console.log("data");

  return (
    <main>
      <TopHeader/>
      <Header/>
      <Slider/>
      <TravelForm />
      <HeaderTabs />
    </main>
  )
}
