import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import { assist } from '@sanity/assist'

export default defineConfig({
  name: 'default',
  title: 'souschef-homepage',

  projectId: '10y6s55e',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    assist({
      translate: {
        document: {
            // The name of the field that holds the current language
            // in the form of a language code e.g. 'en', 'fr', 'nb_NO'.
            // Required
            languageField: 'language',
            // Optional extra filter for document types.
            // If not set, translation is enabled for all documents
            // that has a field with the name defined above.
            documentTypes: ['blogpost'],
        }
      }
    }),
    documentInternationalization({
      supportedLanguages: [
        {id: 'ja', title: 'Japanese'},
        {id: 'en', title: 'English'}
      ],
      schemaTypes: ['blogpost'],
    })],

  schema: {
    types: schemaTypes,
  },
})
