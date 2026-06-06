# Detext

Upload documents, search their contents, and ask questions about them.

## why I'm building it

Detext is a document processing platform for file ingestion, text extraction, storage, and search. I'm building it to better understand and explore backend architecture and systems design.

## Planned Features

- Document upload
- Text extraction
- Search
- database storage

## Tech Stack
- Node.js
- TypeScript
- Express
- PostgreSQL
- Doocker
- Mupdf

## Status

### the current architechture

- api.ts: recieve request via express and passes PDF to storage

- storage.ts: Ensure upload directory exists, move uploaded file to permanent location and return filepath

- doc.process.ts: recieves saved file from storage, extracts the text via mupdf

- database.ts (in progress): stores document content and metadata