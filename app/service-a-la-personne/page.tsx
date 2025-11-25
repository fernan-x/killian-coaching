import React from "react";
import Image from 'next/image';
import { H2 } from "@/components/ui/text";
import Container from "@/components/ui/container";
import SAP_LOGO from "@/assets/images/sap-logo.webp";
import CREDIT_IMPOT_LOGO from "@/assets/images/credit-impot-logo.webp";

export default function ServiceALaPersonne() {
  return (
    <div className="flex w-full flex-col bg-white py-24 sm:py-32">
      <div className="w-screen flex flex-col items-start px-6 md:px-28">
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
            alt="Logo Services à la Personne"
            className="object-contain"
          />
          <Image
            src={CREDIT_IMPOT_LOGO.src}
            width={400}
            height={200}
            priority
            alt="Logo Crédit d'impôt"
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Le Service à la Personne est un service mis en place par l&apos;URSSAF et la Direction Générale des Finances Publiques.
              </p>
              <p>
                Les cours à domicile rentrent dans ce dispositif selon la circulaire du 11 avril 2019 sous certaines conditions.
              </p>
              <p>
                Pour les particuliers le service à la personne est synonyme d&apos;avantage fiscal prenant la forme d&apos;un crédit d&apos;impôt sur le revenu égal à <span className="font-semibold text-primary">50% des dépenses engagées</span> pour des prestations de service à la personne.
              </p>
              <p>
                Depuis 2022, l&apos;URSSAF met en place le service <span className="font-semibold">avance immédiate</span> qui vous permet de déduire immédiatement votre crédit d&apos;impôt du montant que je vous facture pour les prestations réalisées à votre domicile. Il s&apos;agit d&apos;un service optionnel, gratuit et dématérialisé.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <H2 className="text-2xl">Comment ça fonctionne ?</H2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Une fois que votre coach vous a inscrit au service (avec votre autorisation), vous disposez d&apos;un compte sur le site <span className="font-mono text-sm bg-muted px-2 py-1 rounded">particulier.urssaf.fr</span>. Celui-ci vous permet de consulter les demandes de paiement reçues et de suivre votre consommation de crédit d&apos;impôt.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <p className="font-semibold mb-3">La demande de paiement vous indique :</p>
                <ul className="space-y-2 pl-5 list-disc marker:text-primary">
                  <li>Le montant total dû pour les prestations réalisées à votre domicile</li>
                  <li>Le montant du crédit d&apos;impôt auquel vous avez droit</li>
                  <li>Le montant de votre reste à charge après déduction du crédit d&apos;impôt</li>
                </ul>
              </div>
              <p>
                Concrètement, avec ce service, c&apos;est l&apos;URSSAF qui prélève le montant du reste à charge sur votre compte bancaire. Ensuite, l&apos;URSSAF me verse la totalité de la prestation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
