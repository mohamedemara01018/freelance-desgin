import UploadDriversLicensePage from "@/components/features/upload-document-page/Uploaddriverslicense";
import Uploadnationalid from "@/components/features/upload-document-page/Uploadnationalid";
import UploadPassportPage from "@/components/features/upload-document-page/Uploadpassport";
import { DocumentType } from "@/utils/enums.utils";

import React from 'react'




function UploadDocumentPage({ selected }: { selected: string }) {
    return (
        <main className="pt-16">
            <section className="wrapper">
                {selected == DocumentType.NATIONAL_ID && <Uploadnationalid />}
                {selected == DocumentType.PASSPORT && <UploadPassportPage />}
                {selected == DocumentType.DRIVING_LICENSE && <UploadDriversLicensePage />}
            </section>
        </main>
    )
}

export default UploadDocumentPage