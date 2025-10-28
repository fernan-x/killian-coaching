import React from "react";

import Image from 'next/image';

import SAP_LOGO from "@/assets/images/sap-logo.webp";
import CREDIT_IMPOT_LOGO from "@/assets/images/credit-impot-logo.webp";

export default function ServiceALaPersonne() {
  return (
    <div className="flex w-full flex-col bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="uppercase text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services à la personne (SAP)</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Obtenez 50% de réduction sur votre coaching grâce aux services à la personne.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mt-16 mb-16">
          <Image
            src={SAP_LOGO.src}
            width={200}
            height={200}
            priority
            alt="Killian motivating a customer"
            className="object-cover"
          />
          <Image
            src={CREDIT_IMPOT_LOGO.src}
            width={400}
            height={200}
            priority
            alt="Killian motivating a customer"
            className="object-cover"
          />
        </div>

        <div className="flex gap-12 flex-col md:flex-row">
          <div className="flex gap-2 flex-col">
            <p>
              Le Service à la Personne est un service mis en place par l&apos;URSSAF et la Direction Générale des Finances Publiques.
            </p>
            <p>
              Les cours à domicile rentrent dans ce dispositif selon la circulaire du 11 avril 2019 sous certaines conditions.
            </p>
            <p>
              Pour les particuliers le service à la personne est synonyme d&apos;avantage fiscal prenant la forme d&apos;un crédit d&apos;impôt sur le revenu égal à 50% des dépenses engagées pour des prestations de service à la personne.
            </p>
            <p>
              Depuis 2022, l&apos;URSSAF met en place le service avance immédiate qui vous permet de déduire immédiatement votre crédit d&apos;impôt du montant que je vous facture pour les prestations réalisées à votre domicile. Il s&apos;agit d&apos;un service optionnel, gratuit et dématérialisé.
            </p>
          </div>

          <div className="flex gap-2 flex-col">
            <p>
              Une fois que votre coach vous a inscrit au service (avec votre autorisation), vous disposez d&apos;un compte sur le site particulier.urssaf.fr. Celui-ci vous permet de consulter les demandes de paiement reçues et de suivre votre consommation de crédit d&apos;impôt. La demande de paiement vous indique :
            </p>
            <ul className="list-disc py-2 px-6">
              <li>Le montant total dû pour les prestations réalisées à votre domicile</li>
              <li>Le montant du crédit d&apos;impôt auquel vous avez droit</li>
              <li>Le montant de votre reste à charge après déduction du crédit d&apos;impôt (montant total - crédit d&apos;impôt)</li>
            </ul>
            <p>
              Concrètement, avec ce service, c&apos;est l&apos;URSSAF, qui prélève le montant du reste à charge sur votre compte bancaire. Ensuite, l&apos;URSSAF me verse la totalité de la prestation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
