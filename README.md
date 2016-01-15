# To install 

```bash
	npm start
```

# To deploy local

Add '127.0.0.1 test.firebaseio.com' to '/etc/hosts'

Execute in a terminal:

```bash
	npm run start:firebase
```

In other terminal execute:

```bash
	npm start
```

And goto [http://localhost:8080](http://localhost:8080)

# To create new token

```bash
	SECRET=<secret> USER=<user> npm run token
```

And add to './src/utils/tokens.js'
