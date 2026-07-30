```mermaid
    sequenceDiagram
        participant Browser
        participant Server

        Browser->>Server: GET /exampleapp/spa
        activate Server
        Server-->>Browser: HTML document
        deactivate Server

        Browser->>Server: GET /exampleapp/main.css
        activate Server
        Server-->>Browser: CSS stylesheet
        deactivate Server

        Browser->>Server: GET /exampleapp/spa.js
        activate Server
        Server-->>Browser: JavaScript bundle
        deactivate Server

        Note right of Browser: The JavaScript application starts and requests the notes data.

        Browser->>Server: GET /exampleapp/data.json
        activate Server
        Server-->>Browser: JSON response
        deactivate Server

        Note right of Browser: The received data is processed and rendered on the page.

        Browser->>Server: GET /favicon.ico
        activate Server
        Server-->>Browser: Favicon image
        deactivate Server
```
