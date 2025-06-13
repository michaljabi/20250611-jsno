# Zadanie 10

> Wykonaj serwer w Express.js  
> Powinien on wystawić `API` do korzystania z przygotowanej przez nas wcześniej logiki do obsługiwania gości na przyjęciu (_#Zadanie 8_).   


## Wymagania:
- Na dobry początek zróbmy tylko wyświetlanie listy gości z odpowiednimi statusami - jako `JSON`.
- Endpoint `GET`:
    - `/guests` - pokazuje listę gości.
    format : 
    ```javascript
    [ 
      {id: 1, name: "Michał", status: "confirmed"},
      {id: 2, name: "Kasia", status: "confirmed"},
      {id: 3, name: "Jacek", status: "unconfirmed"},
      {id: 4, name: "Zosia", status: "confirmed"},
      ]
    ```

    - `/guests?status=confirmed` - lista gości z potwierdzonym przybyciem na przycięcie.
  - `/guests?status=unconfirmed` - lista gości niepotwierdzonych.
