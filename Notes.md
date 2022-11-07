# Section 1: Introduction

---

## 1.  How to approach the information

---

## 2. Introduction

- Install NodeJS and NPM
- Install Angular CLI
- Create new Angular App with ```ng new <app-name>```.

---

## 3. Angular 12 upgrade

---

## 4. Inside of an Angular application

- Start Server with ```ng serve```.

---

## 5. Servers - we will be using

- Angular in-memory front-end server: ```ng serve``` -> port 4200
 Upload and serve images Express & Node: ```node server.js``` -> port 3500
 CRUD items with JSON-server: ```json-server items.json``` -> port 3000

---

## 6. Adding JSON server with Node.js

commit 7e5db8ad6bf13be26b9abbe4aefc2bade1a93db5

---

## 7. Introduction to Angular services

- Create Angular Service with ```ng g s <service-name>```.

commit 0d62cb24dce877911c6e55c4e135d664ede79efc

---

## 8. Angular Templates and 9. Interfaces, types and generics in Angular

- JSON Pipe in Angulat Template outputs Obejcts Content.

```app.component.ts```

```ts
//...
class AppComponent{
    object = { name: "Some Name", age: 21};
}
//...
```

```app.component.html```

```html
Welcome {{ object | json }}!
```

Create ```interface``` as generic Type for your Backend Data.

Use generic Type with ```HttpClien``` Angular service.

commit 842a582a526f23a8411a4098a96c20539b2f63a9

---

## 10. Introducing RxJS to improve the code logic

On subscribing RxJS Observable, often is forgoten to unsubscribe.

Better way is to subscribe to RxJS Observables in Angular Templates using the ```async```Pipe.

This will automaticaly unsubscribe the RxJS Observable


---
