# Detext

Upload documents, search their contents, and ask questions about them.

## why I'm building it

To learn by building an end-to-end document search and question-answering system.

## Planned Features

- Document upload
- Text extraction
- Search
- Question answering
- Summaries

## Tech Stack
- Python
- PostgreSQL
- FastAPI
- pymupdf

## Status

### the current architechture

- api.py: recieve request via fastAPI and passes PDF to storage

- storage.py: reads bytes from the requested file from api and writes data to new file location

- doc.process.py: recieves saved file from storage, extracts the text via pymupdf

- database.py (in progress): stores document content and metadata