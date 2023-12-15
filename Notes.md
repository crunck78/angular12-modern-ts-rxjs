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

commit 281824d13b900dc0e8f58b36f5584f9f48ecd217

---

## 11. Creating new component and adding routes via Router

commit 2899c1865a6009540ddc61be4970d2cfb84e2622

---

## 12. Router parameters && 13. New service for the single item

commit a8465dbd69a5a46dce8fec7d6df16f4b4344d749

---

## 14. Inner linking and styling the application



---

## 15. Refactoring services using RxJs

commit 63e5716d140fcf527e390c3b4a00b9ed96156bb4

---

## 16. Angular forms and bindings

commit 37411e10d4b461365b6ea7a24d8d0e56e519d07e

---

## 17. Post requests with custom headers

commit b495bdcdf1d1485528b4c97d880607a87741ddac

---

## 18. Image upload preview within the template && 19. Add upload functionality to the Angular side

commit 0a66eec559b853d29abf45656ac1cd3424f54b11

---

## 20. Image upload on the NodeJS side & proxying CORS requests

commit 5c5aa8a8ac74eade041a4624a659f82a7e07b4a1

---

## 21. Debugging NodeJS server (optional)

commit 2819a18ed4c849e9a38a375089c2ea1ab45e5837

---

## 22. Finalizing the project

commit 3776ee159fbcb437bf45c20a8df41628e2db574f

---

# Section 2: From Vanilla Javascript to Typescript & Angular

## 23. Project overview and setup



---